// ============================================
// DevAI Academy - Application Engine
// ============================================

(function() {
    'use strict';

    // --- State ---
    const STORAGE_KEY = 'devai-academy-progress';
    let completedLessons = loadProgress();
    let currentWorkshopPhase = 0;
    let currentWorkshopLesson = 0;
    let quizStates = {};

    // --- Init ---
    document.addEventListener('DOMContentLoaded', () => {
        renderRoadmap();
        renderPhaseTabs();
        renderModuleContent(0);
        renderResources();
        updateAllProgress();
        setupNavigation();
        setupScrollEffects();
        setupWorkshopEvents();
        addSVGGradient();
    });

    // --- LocalStorage ---
    function loadProgress() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            return {};
        }
    }

    function saveProgress() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
        } catch (e) {
            // silently fail if storage is unavailable
        }
    }

    function toggleLesson(lessonId) {
        if (completedLessons[lessonId]) {
            delete completedLessons[lessonId];
        } else {
            completedLessons[lessonId] = Date.now();
        }
        saveProgress();
        updateAllProgress();

        // If workshop is open, update the complete button
        const overlay = document.getElementById('workshopOverlay');
        if (overlay && overlay.classList.contains('active')) {
            updateWorkshopButtons();
        }
    }

    // --- Progress Calculations ---
    function getTotalLessons() {
        return PHASES.reduce((sum, phase) => sum + phase.lessons.length, 0);
    }

    function getCompletedCount() {
        return Object.keys(completedLessons).length;
    }

    function getPhaseProgress(phaseId) {
        const phase = PHASES[phaseId];
        if (!phase || phase.lessons.length === 0) return 0;
        const completed = phase.lessons.filter(l => completedLessons[l.id]).length;
        return (completed / phase.lessons.length) * 100;
    }

    function isPhaseComplete(phaseId) {
        return getPhaseProgress(phaseId) === 100;
    }

    function getCurrentPhaseIndex() {
        for (let i = 0; i < PHASES.length; i++) {
            if (!isPhaseComplete(i)) return i;
        }
        return PHASES.length - 1;
    }

    function updateAllProgress() {
        const total = getTotalLessons();
        const completed = getCompletedCount();
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

        // Nav progress bar
        const navFill = document.getElementById('navProgressFill');
        const navText = document.getElementById('navProgressText');
        if (navFill) navFill.style.width = percent + '%';
        if (navText) navText.textContent = percent + '%';

        // Progress ring
        const ring = document.getElementById('progressRing');
        if (ring) {
            const circumference = 2 * Math.PI * 85;
            ring.style.strokeDasharray = circumference;
            ring.style.strokeDashoffset = circumference - (percent / 100) * circumference;
        }

        const pctEl = document.getElementById('progressPercentage');
        if (pctEl) pctEl.textContent = percent + '%';

        const lessonsCompletedEl = document.getElementById('lessonsCompleted');
        if (lessonsCompletedEl) lessonsCompletedEl.textContent = completed;

        const lessonsTotalEl = document.getElementById('lessonsTotal');
        if (lessonsTotalEl) lessonsTotalEl.textContent = total;

        const completedCountEl = document.getElementById('completedCount');
        if (completedCountEl) completedCountEl.textContent = completed;

        const currentPhaseEl = document.getElementById('currentPhase');
        if (currentPhaseEl) {
            const idx = getCurrentPhaseIndex();
            currentPhaseEl.textContent = 'Phase ' + idx;
        }

        // Update roadmap items
        PHASES.forEach((phase, i) => {
            const item = document.querySelector('.roadmap-item[data-phase="' + i + '"]');
            if (!item) return;
            const progress = getPhaseProgress(i);
            const isCurrent = i === getCurrentPhaseIndex();
            item.classList.toggle('completed', progress === 100);
            item.classList.toggle('active', isCurrent);
            const fill = item.querySelector('.roadmap-progress-fill');
            if (fill) fill.style.width = progress + '%';
        });

        // Update phase tabs
        document.querySelectorAll('.phase-tab').forEach(tab => {
            const phaseId = parseInt(tab.dataset.phase);
            tab.classList.toggle('completed', isPhaseComplete(phaseId));
        });

        // Update checkboxes in current view
        document.querySelectorAll('.lesson-checkbox').forEach(cb => {
            const lessonId = cb.dataset.lesson;
            cb.classList.toggle('checked', !!completedLessons[lessonId]);
            cb.textContent = completedLessons[lessonId] ? '✓' : '';
        });

        updateStreak();
    }

    // --- Streak ---
    function updateStreak() {
        const streakEl = document.getElementById('streak');
        if (!streakEl) return;

        const timestamps = Object.values(completedLessons);
        if (!timestamps.length) {
            streakEl.textContent = '0';
            return;
        }

        const dates = timestamps.map(ts => {
            const d = new Date(ts);
            return d.toISOString().split('T')[0];
        });
        const unique = [...new Set(dates)].sort().reverse();

        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        let streak = 0;
        if (unique[0] === today || unique[0] === yesterday) {
            streak = 1;
            for (let i = 1; i < unique.length; i++) {
                const prev = new Date(unique[i - 1]);
                const curr = new Date(unique[i]);
                const diff = (prev - curr) / 86400000;
                if (diff === 1) {
                    streak++;
                } else {
                    break;
                }
            }
        }

        streakEl.textContent = streak;
    }

    // --- Render Roadmap ---
    function renderRoadmap() {
        const container = document.getElementById('roadmapContainer');
        if (!container) return;

        container.innerHTML = PHASES.map((phase, i) => {
            const progress = getPhaseProgress(i);
            const isComplete = progress === 100;
            const isCurrent = i === getCurrentPhaseIndex();
            const completedCount = phase.lessons.filter(l => completedLessons[l.id]).length;

            return '<div class="roadmap-item' +
                (isComplete ? ' completed' : '') +
                (isCurrent ? ' active' : '') +
                '" data-phase="' + i + '">' +
                '<div class="roadmap-dot"><span class="roadmap-dot-check">✓</span></div>' +
                '<div class="roadmap-card" onclick="window.showPhase(' + i + ')">' +
                    '<div class="roadmap-phase" style="color: ' + phase.color + '">Phase ' + i + ' ' + phase.icon + '</div>' +
                    '<div class="roadmap-title">' + phase.title + '</div>' +
                    '<div class="roadmap-desc">' + phase.description + '</div>' +
                    '<div class="roadmap-meta">' +
                        '<span>⏱ ' + phase.duration + '</span>' +
                        '<span>📖 ' + completedCount + '/' + phase.lessons.length + ' leçons</span>' +
                    '</div>' +
                    '<div class="roadmap-progress-bar">' +
                        '<div class="roadmap-progress-fill" style="width: ' + progress + '%"></div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    // --- Render Phase Tabs ---
    function renderPhaseTabs() {
        const container = document.getElementById('phaseTabs');
        if (!container) return;

        container.innerHTML = PHASES.map((phase, i) => {
            const isComplete = isPhaseComplete(i);
            return '<button class="phase-tab' +
                (i === 0 ? ' active' : '') +
                (isComplete ? ' completed' : '') +
                '" data-phase="' + i + '" onclick="window.showPhase(' + i + ')">' +
                phase.icon + ' P' + i + ': ' + phase.title +
                '</button>';
        }).join('');
    }

    // --- Render Module Content ---
    function renderModuleContent(phaseIndex) {
        const container = document.getElementById('moduleContent');
        if (!container) return;
        const phase = PHASES[phaseIndex];
        if (!phase) return;

        let html = '<div class="module-header" style="margin-bottom: 24px;">' +
            '<h3 style="font-size: 1.5rem; margin-bottom: 8px;">' +
                phase.icon + ' Phase ' + phaseIndex + ' : ' + phase.title +
            '</h3>' +
            '<p style="color: var(--text-secondary);">' + phase.description + '</p>' +
        '</div>';

        html += phase.lessons.map((lesson, lessonIndex) => {
            const isChecked = !!completedLessons[lesson.id];
            const tagsHtml = lesson.tags ? lesson.tags.map(tag =>
                '<span class="lesson-tag tag-' + tag + '">' + tag + '</span>'
            ).join('') : '';
            const duration = lesson.workshop ? (lesson.workshop.duration || '15 min') : '15 min';

            return '<div class="lesson-card' + (isChecked ? ' completed' : '') + '" onclick="window.openWorkshop(' + phaseIndex + ',' + lessonIndex + ')" style="cursor: pointer;">' +
                '<button class="lesson-checkbox' + (isChecked ? ' checked' : '') + '" data-lesson="' + lesson.id + '" onclick="event.stopPropagation(); window.toggleLesson(\'' + lesson.id + '\')">' +
                    (isChecked ? '✓' : '') +
                '</button>' +
                '<div class="lesson-info">' +
                    '<div class="lesson-title">' + lesson.title + '</div>' +
                    '<div class="lesson-desc">' + lesson.desc + '</div>' +
                    '<div class="lesson-tags">' + tagsHtml + '</div>' +
                    '<div class="lesson-card-footer" style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">' +
                        '<span style="font-size: 0.8rem; color: var(--text-secondary);">⏱ ' + duration + '</span>' +
                        '<span class="lesson-open-hint" style="font-size: 0.8rem; color: var(--accent, #6366f1); font-weight: 500;">Ouvrir l\'atelier →</span>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }).join('');

        container.innerHTML = html;
    }

    // --- Render Resources ---
    function renderResources() {
        const container = document.getElementById('resourcesGrid');
        if (!container) return;

        container.innerHTML = RESOURCES.map(res => {
            return '<div class="resource-card">' +
                '<div class="resource-icon">' + res.icon + '</div>' +
                '<span class="resource-level level-' + res.level + '">' + res.level + '</span>' +
                '<div class="resource-title">' + res.title + '</div>' +
                '<div class="resource-desc">' + res.desc + '</div>' +
                '<a href="' + res.url + '" target="_blank" rel="noopener" class="resource-link">Voir la ressource →</a>' +
            '</div>';
        }).join('');
    }

    // =======================================
    // WORKSHOP SYSTEM
    // =======================================

    function setupWorkshopEvents() {
        const backBtn = document.getElementById('workshopBackBtn');
        if (backBtn) backBtn.addEventListener('click', closeWorkshop);

        const prevBtn = document.getElementById('workshopPrevBtn');
        if (prevBtn) prevBtn.addEventListener('click', () => navigateWorkshopLesson(-1));

        const nextBtn = document.getElementById('workshopNextBtn');
        if (nextBtn) nextBtn.addEventListener('click', () => navigateWorkshopLesson(1));

        const completeBtn = document.getElementById('workshopCompleteBtn');
        if (completeBtn) completeBtn.addEventListener('click', completeFromWorkshop);

        // Scroll progress tracking
        const scrollContainer = document.getElementById('workshopScrollContainer');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', () => {
                const scrollable = scrollContainer.scrollHeight - scrollContainer.clientHeight;
                const progress = scrollable > 0
                    ? (scrollContainer.scrollTop / scrollable) * 100
                    : 0;
                const bar = document.getElementById('workshopScrollProgress');
                if (bar) bar.style.width = Math.min(100, progress) + '%';
            });
        }

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const overlay = document.getElementById('workshopOverlay');
                if (overlay && overlay.classList.contains('active')) {
                    closeWorkshop();
                }
            }
        });
    }

    function openWorkshop(phaseIndex, lessonIndex) {
        currentWorkshopPhase = phaseIndex;
        currentWorkshopLesson = lessonIndex;
        quizStates = {};

        const phase = PHASES[phaseIndex];
        const lesson = phase.lessons[lessonIndex];

        // Update topbar labels
        const phaseLabel = document.getElementById('workshopPhaseLabel');
        if (phaseLabel) phaseLabel.textContent = phase.icon + ' Phase ' + phaseIndex;

        const durationLabel = document.getElementById('workshopDurationLabel');
        if (durationLabel) {
            durationLabel.textContent = lesson.workshop
                ? (lesson.workshop.duration || '15 min')
                : '15 min';
        }

        // Build content HTML
        const contentEl = document.getElementById('workshopContent');
        let html = '';

        // Title + description
        html += '<h1 class="workshop-title">' + lesson.title + '</h1>';
        html += '<p class="workshop-desc">' + lesson.desc + '</p>';

        // Tags
        if (lesson.tags && lesson.tags.length) {
            html += '<div class="workshop-tags">';
            html += lesson.tags.map(t =>
                '<span class="lesson-tag tag-' + t + '">' + t + '</span>'
            ).join('');
            html += '</div>';
        }

        if (lesson.workshop) {
            // Difficulty indicator
            if (lesson.workshop.difficulty !== undefined) {
                const diff = lesson.workshop.difficulty;
                const diffLabels = ['', 'Débutant', 'Intermédiaire', 'Avancé'];
                const diffColors = ['', '#10b981', '#f59e0b', '#ef4444'];
                const label = diffLabels[diff] || 'Débutant';
                const color = diffColors[diff] || '#10b981';
                html += '<div class="workshop-difficulty" style="display: inline-flex; align-items: center; gap: 6px; margin-bottom: 16px; font-size: 0.85rem;">' +
                    '<span style="color: ' + color + '; font-weight: 600;">● ' + label + '</span>' +
                '</div>';
            }

            // Objectives
            if (lesson.workshop.objectives && lesson.workshop.objectives.length) {
                html += '<div class="workshop-objectives">' +
                    '<h3>🎯 Objectifs de cet atelier</h3>' +
                    '<ul>' +
                    lesson.workshop.objectives.map(o => '<li>' + o + '</li>').join('') +
                    '</ul>' +
                '</div>';
            }

            // Sections
            if (lesson.workshop.sections && lesson.workshop.sections.length) {
                html += lesson.workshop.sections.map((section, i) =>
                    renderSection(section, i)
                ).join('');
            }
        } else {
            html += '<div class="workshop-callout note">' +
                '<span class="callout-icon">📝</span>' +
                '<div><strong>Contenu en cours de création</strong><br>' +
                'Le contenu interactif de cet atelier arrive bientôt. En attendant, utilise les ressources ci-dessous.</div>' +
            '</div>';
        }

        // Resources/links at bottom
        if (lesson.links && lesson.links.length) {
            html += '<div class="workshop-resources">' +
                '<h3>📚 Ressources supplémentaires</h3>' +
                '<div class="resources-links">' +
                lesson.links.map(l =>
                    '<a href="' + l.url + '" target="_blank" rel="noopener" class="resource-link-item">→ ' + l.label + '</a>'
                ).join('') +
                '</div>' +
            '</div>';
        }

        if (contentEl) contentEl.innerHTML = html;

        // Reset scroll and progress bar
        const scrollContainer = document.getElementById('workshopScrollContainer');
        if (scrollContainer) scrollContainer.scrollTop = 0;

        const scrollBar = document.getElementById('workshopScrollProgress');
        if (scrollBar) scrollBar.style.width = '0%';

        // Update navigation buttons
        updateWorkshopButtons();

        // Show overlay
        const overlay = document.getElementById('workshopOverlay');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeWorkshop() {
        const overlay = document.getElementById('workshopOverlay');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function navigateWorkshopLesson(direction) {
        const phase = PHASES[currentWorkshopPhase];
        const newIndex = currentWorkshopLesson + direction;
        if (newIndex >= 0 && newIndex < phase.lessons.length) {
            openWorkshop(currentWorkshopPhase, newIndex);
        }
    }

    function completeFromWorkshop() {
        const lesson = PHASES[currentWorkshopPhase].lessons[currentWorkshopLesson];
        if (!completedLessons[lesson.id]) {
            completedLessons[lesson.id] = Date.now();
            saveProgress();
            updateAllProgress();
            // Re-render the module content for the current workshop phase
            renderModuleContent(currentWorkshopPhase);
            renderRoadmap();
            showToast('Atelier terminé ! 🎉', 'success');
        }
        updateWorkshopButtons();
    }

    function updateWorkshopButtons() {
        const phase = PHASES[currentWorkshopPhase];
        const lesson = phase.lessons[currentWorkshopLesson];

        const prevBtn = document.getElementById('workshopPrevBtn');
        if (prevBtn) prevBtn.disabled = currentWorkshopLesson === 0;

        const nextBtn = document.getElementById('workshopNextBtn');
        if (nextBtn) nextBtn.disabled = currentWorkshopLesson >= phase.lessons.length - 1;

        const completeBtn = document.getElementById('workshopCompleteBtn');
        if (completeBtn) {
            if (completedLessons[lesson.id]) {
                completeBtn.textContent = '✓ Terminé';
                completeBtn.classList.add('completed');
            } else {
                completeBtn.textContent = 'Marquer comme terminé';
                completeBtn.classList.remove('completed');
            }
        }
    }

    // --- Section Rendering ---
    function renderSection(section, index) {
        switch (section.type) {
            case 'theory':   return renderTheory(section);
            case 'code':     return renderCodeBlock(section);
            case 'info':     return renderCallout(section);
            case 'quiz':     return renderQuiz(section, index);
            case 'exercise': return renderExercise(section, index);
            default:         return '';
        }
    }

    function renderTheory(section) {
        let html = '';
        if (section.title) {
            html += '<h2 class="workshop-section-title">' + section.title + '</h2>';
        }
        html += '<div class="workshop-theory"><p>' + formatText(section.content) + '</p></div>';
        return html;
    }

    function formatText(text) {
        if (!text) return '';
        return text
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/`(.+?)`/g, '<code>$1</code>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');
    }

    function renderCodeBlock(section) {
        const escaped = escapeHtml(section.code || '');
        const highlighted = highlightCode(escaped, section.language || '');
        let encoded;
        try {
            encoded = btoa(unescape(encodeURIComponent(section.code || '')));
        } catch (e) {
            encoded = btoa(section.code || '');
        }

        let html = '';
        if (section.title) {
            html += '<h2 class="workshop-section-title">' + section.title + '</h2>';
        }
        html += '<div class="workshop-code-block">';
        html += '<div class="code-block-header">';
        html += '<span class="code-lang-label">' + (section.language || 'code') + '</span>';
        html += '<button class="copy-btn" onclick="window.copyCode(this, \'' + encoded + '\')">Copier</button>';
        html += '</div>';
        html += '<pre><code>' + highlighted + '</code></pre>';
        html += '</div>';

        if (section.explanation) {
            html += '<p class="code-explanation">💡 ' + formatText(section.explanation) + '</p>';
        }
        return html;
    }

    function renderCallout(section) {
        const variant = section.variant || 'note';
        const icons   = { tip: '💡', warning: '⚠️', note: '📝', important: '🔴' };
        const titles  = { tip: 'Astuce', warning: 'Attention', note: 'Note', important: 'Important' };

        return '<div class="workshop-callout ' + variant + '">' +
            '<span class="callout-icon">' + (icons[variant] || '📝') + '</span>' +
            '<div>' +
                '<strong>' + (titles[variant] || 'Note') + '</strong><br>' +
                formatText(section.content) +
            '</div>' +
        '</div>';
    }

    function renderQuiz(section, index) {
        const qid = 'quiz-' + index;

        let html = '<div class="workshop-quiz" id="' + qid + '">';
        html += '<div class="quiz-question">📝 ' + section.question + '</div>';
        html += '<div class="quiz-options">';

        html += section.choices.map((choice, i) =>
            '<button class="quiz-option" data-quiz="' + index + '" data-choice="' + i + '" ' +
            'onclick="window.answerQuiz(' + index + ',' + i + ',' + section.correct + ')">' +
                '<span class="quiz-option-letter">' + String.fromCharCode(65 + i) + '</span>' +
                '<span>' + choice + '</span>' +
            '</button>'
        ).join('');

        html += '</div>';
        html += '<div class="quiz-explanation" id="quizExpl-' + index + '">' +
            formatText(section.explanation || '') +
        '</div>';
        html += '</div>';

        return html;
    }

    function renderExercise(section, index) {
        const eid = 'exercise-' + index;
        const solutionEscaped = escapeHtml(section.solution || '');
        const highlighted = highlightCode(solutionEscaped, section.language || '');

        let html = '<div class="workshop-exercise">';
        html += '<div class="exercise-header">🏋️ Exercice : ' + (section.title || 'À toi de jouer') + '</div>';
        html += '<div class="exercise-instructions">' + formatText(section.instructions) + '</div>';

        if (section.starterCode) {
            html += '<textarea class="exercise-textarea" id="' + eid + '-code" spellcheck="false">' +
                escapeHtml(section.starterCode) +
            '</textarea>';
        }

        html += '<div class="exercise-actions">';
        html += '<button class="btn-show-solution" onclick="window.toggleSolution(\'' + eid + '\')">Voir la solution</button>';
        html += '</div>';

        html += '<div class="exercise-solution" id="' + eid + '-solution">';
        html += '<div class="workshop-code-block">';
        html += '<div class="code-block-header">';
        html += '<span class="code-lang-label">' + (section.language || 'code') + '</span>';
        html += '</div>';
        html += '<pre><code>' + highlighted + '</code></pre>';
        html += '</div>';
        html += '</div>';

        html += '</div>';
        return html;
    }

    // --- Syntax Highlighting (lightweight) ---
    function highlightCode(escaped, language) {
        if (!escaped) return escaped;
        const lang = (language || '').toLowerCase();

        // Comments first (before other replacements)
        if (lang === 'python' || lang === 'bash') {
            escaped = escaped.replace(/(#[^\n]*?)(\n|$)/g, '<span class="hl-comment">$1</span>$2');
        } else if (lang === 'javascript' || lang === 'js') {
            escaped = escaped.replace(/(\/\/[^\n]*?)(\n|$)/g, '<span class="hl-comment">$1</span>$2');
        } else if (lang === 'sql') {
            escaped = escaped.replace(/(--[^\n]*?)(\n|$)/g, '<span class="hl-comment">$1</span>$2');
        } else if (lang === 'html') {
            escaped = escaped.replace(/(&lt;!--.*?--&gt;)/g, '<span class="hl-comment">$1</span>');
        }

        // Strings (double and single quotes, HTML-encoded)
        escaped = escaped.replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/g, '<span class="hl-string">$1</span>');

        // Language-specific processing
        if (lang === 'html') {
            escaped = escaped.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="hl-keyword">$2</span>');
            escaped = escaped.replace(/([\w-]+)(=)/g, '<span class="hl-param">$1</span>$2');
        } else if (lang === 'css') {
            escaped = escaped.replace(/([\w-]+)(\s*:)/g, '<span class="hl-param">$1</span>$2');
        } else {
            // Keywords by language
            let keywords = [];
            if (lang === 'python') {
                keywords = ['def','class','import','from','return','if','elif','else','for','while',
                    'try','except','finally','with','as','in','not','and','or','is',
                    'True','False','None','print','lambda','yield','raise','pass',
                    'break','continue','async','await','self'];
            } else if (lang === 'javascript' || lang === 'js') {
                keywords = ['const','let','var','function','return','if','else','for','while',
                    'class','new','this','import','export','async','await','try','catch',
                    'throw','typeof','instanceof','true','false','null','undefined',
                    'console','document','window'];
            } else if (lang === 'sql') {
                keywords = ['SELECT','FROM','WHERE','INSERT','INTO','VALUES','UPDATE','SET',
                    'DELETE','CREATE','TABLE','DROP','ALTER','JOIN','INNER','LEFT','RIGHT',
                    'ON','AND','OR','NOT','NULL','PRIMARY','KEY','FOREIGN','REFERENCES',
                    'ORDER','BY','GROUP','HAVING','LIMIT','AS','COUNT','SUM','AVG',
                    'MIN','MAX','DISTINCT','INTEGER','TEXT','REAL','BOOLEAN','VARCHAR',
                    'INT','LIKE','IN','BETWEEN','EXISTS','DESC','ASC','AUTO_INCREMENT','DEFAULT'];
            } else if (lang === 'bash') {
                keywords = ['cd','ls','mkdir','touch','cp','mv','rm','cat','echo','git',
                    'npm','pip','python','python3','node','docker','sudo','chmod',
                    'chown','grep','find','curl','wget'];
            }

            if (keywords.length) {
                keywords.forEach(kw => {
                    const flags = lang === 'sql' ? 'gi' : 'g';
                    const regex = new RegExp('\\b(' + kw + ')\\b', flags);
                    escaped = escaped.replace(regex, '<span class="hl-keyword">$1</span>');
                });
            }
        }

        // Numbers
        escaped = escaped.replace(/\b(\d+\.?\d*)\b/g, '<span class="hl-number">$1</span>');

        return escaped;
    }

    // --- Utilities ---
    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function showToast(message, type) {
        type = type || 'info';
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast toast-' + type;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-exit');
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 400);
        }, 3000);
    }

    // --- Navigation ---
    function setupNavigation() {
        // Mobile menu toggle
        const btn = document.getElementById('mobileMenuBtn');
        const navbar = document.getElementById('navbar');
        if (btn && navbar) {
            btn.addEventListener('click', () => navbar.classList.toggle('mobile-open'));
        }

        // Active nav link on scroll
        const sections = ['dashboard', 'roadmap', 'modules', 'ressources'];
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 150;
            sections.forEach(id => {
                const section = document.getElementById(id);
                const link = document.querySelector('.nav-link[href="#' + id + '"]');
                if (section && link) {
                    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                }
            });
        });
    }

    function setupScrollEffects() {
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- SVG Gradient for progress ring ---
    function addSVGGradient() {
        const ring = document.querySelector('.progress-ring');
        if (!ring) return;

        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'progressGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6366f1');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#a855f7');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        ring.insertBefore(defs, ring.firstChild);
    }

    // --- Global Functions ---
    window.showPhase = function(phaseIndex) {
        document.querySelectorAll('.phase-tab').forEach(tab => {
            tab.classList.toggle('active', parseInt(tab.dataset.phase) === phaseIndex);
        });
        renderModuleContent(phaseIndex);
        const modulesSection = document.getElementById('modules');
        if (modulesSection) modulesSection.scrollIntoView({ behavior: 'smooth' });
    };

    window.toggleLesson = function(lessonId) {
        toggleLesson(lessonId);
        const activeTab = document.querySelector('.phase-tab.active');
        if (activeTab) renderModuleContent(parseInt(activeTab.dataset.phase));
        renderRoadmap();
    };

    window.openWorkshop = openWorkshop;

    window.answerQuiz = function(quizIndex, choiceIndex, correctIndex) {
        if (quizStates[quizIndex]) return; // already answered
        quizStates[quizIndex] = true;

        const options = document.querySelectorAll('[data-quiz="' + quizIndex + '"]');
        options.forEach((opt, i) => {
            opt.classList.add('disabled');
            opt.disabled = true;
            if (i === correctIndex) opt.classList.add('correct');
            if (i === choiceIndex && i !== correctIndex) opt.classList.add('incorrect');
        });

        const expl = document.getElementById('quizExpl-' + quizIndex);
        if (expl) expl.classList.add('show');
    };

    window.copyCode = function(btn, encoded) {
        try {
            const code = decodeURIComponent(escape(atob(encoded)));
            navigator.clipboard.writeText(code).then(() => {
                btn.textContent = 'Copié !';
                setTimeout(() => { btn.textContent = 'Copier'; }, 2000);
            }).catch(() => {
                btn.textContent = 'Erreur';
                setTimeout(() => { btn.textContent = 'Copier'; }, 2000);
            });
        } catch (e) {
            btn.textContent = 'Erreur';
            setTimeout(() => { btn.textContent = 'Copier'; }, 2000);
        }
    };

    window.toggleSolution = function(exerciseId) {
        const el = document.getElementById(exerciseId + '-solution');
        if (el) el.classList.toggle('show');
    };

})();
