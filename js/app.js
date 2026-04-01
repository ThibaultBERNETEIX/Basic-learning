// ============================================
// DevAI Academy - Application Engine
// ============================================

(function() {
    'use strict';

    // --- State ---
    const STORAGE_KEY = 'devai-academy-progress';
    let completedLessons = loadProgress();

    // --- Init ---
    document.addEventListener('DOMContentLoaded', () => {
        renderRoadmap();
        renderPhaseTabs();
        renderModuleContent(0);
        renderResources();
        updateAllProgress();
        setupNavigation();
        setupScrollEffects();
        addSVGGradient();
    });

    // --- LocalStorage ---
    function loadProgress() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch {
            return {};
        }
    }

    function saveProgress() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
    }

    function toggleLesson(lessonId) {
        if (completedLessons[lessonId]) {
            delete completedLessons[lessonId];
        } else {
            completedLessons[lessonId] = Date.now();
        }
        saveProgress();
        updateAllProgress();
        updateStreak();
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
        if (!phase) return 0;
        const completed = phase.lessons.filter(l => completedLessons[l.id]).length;
        return phase.lessons.length > 0 ? (completed / phase.lessons.length) * 100 : 0;
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

        // Nav progress
        const navFill = document.getElementById('navProgressFill');
        const navText = document.getElementById('navProgressText');
        if (navFill) navFill.style.width = percent + '%';
        if (navText) navText.textContent = percent + '%';

        // Dashboard
        const ring = document.getElementById('progressRing');
        if (ring) {
            const circumference = 2 * Math.PI * 85;
            ring.style.strokeDasharray = circumference;
            ring.style.strokeDashoffset = circumference - (percent / 100) * circumference;
        }

        const pctEl = document.getElementById('progressPercentage');
        if (pctEl) pctEl.textContent = percent + '%';

        const lessonsEl = document.getElementById('lessonsCompleted');
        if (lessonsEl) lessonsEl.textContent = completed;

        const totalEl = document.getElementById('lessonsTotal');
        if (totalEl) totalEl.textContent = total;

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
            item.classList.toggle('completed', progress === 100);
            item.classList.toggle('active', i === getCurrentPhaseIndex());
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
        const dates = Object.values(completedLessons).map(ts => {
            const d = new Date(ts);
            return d.toISOString().split('T')[0];
        });
        const unique = [...new Set(dates)].sort().reverse();
        let streak = 0;
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

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

            return '<div class="roadmap-item ' + (isComplete ? 'completed' : '') + (isCurrent ? ' active' : '') + '" data-phase="' + i + '">' +
                '<div class="roadmap-dot"><span class="roadmap-dot-check">✓</span></div>' +
                '<div class="roadmap-card" onclick="window.showPhase(' + i + ')">' +
                    '<div class="roadmap-phase" style="color: ' + phase.color + '">Phase ' + i + ' ' + phase.icon + '</div>' +
                    '<div class="roadmap-title">' + phase.title + '</div>' +
                    '<div class="roadmap-desc">' + phase.description + '</div>' +
                    '<div class="roadmap-meta">' +
                        '<span>⏱ ' + phase.duration + '</span>' +
                        '<span>📖 ' + completedCount + '/' + phase.lessons.length + ' lecons</span>' +
                    '</div>' +
                    '<div class="roadmap-progress-bar"><div class="roadmap-progress-fill" style="width: ' + progress + '%"></div></div>' +
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
            return '<button class="phase-tab' + (i === 0 ? ' active' : '') + (isComplete ? ' completed' : '') + '" data-phase="' + i + '" onclick="window.showPhase(' + i + ')">' +
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

        container.innerHTML = '<div class="module-header" style="margin-bottom: 24px;">' +
            '<h3 style="font-size: 1.5rem; margin-bottom: 8px;">' + phase.icon + ' Phase ' + phaseIndex + ' : ' + phase.title + '</h3>' +
            '<p style="color: var(--text-secondary);">' + phase.description + '</p>' +
        '</div>' +
        phase.lessons.map(lesson => {
            const isChecked = !!completedLessons[lesson.id];
            const linksHtml = lesson.links ? lesson.links.map(link =>
                '<a href="' + link.url + '" target="_blank" rel="noopener" class="lesson-link">→ ' + link.label + '</a>'
            ).join('') : '';
            const tagsHtml = lesson.tags ? lesson.tags.map(tag =>
                '<span class="lesson-tag tag-' + tag + '">' + tag + '</span>'
            ).join('') : '';

            return '<div class="lesson-card">' +
                '<button class="lesson-checkbox' + (isChecked ? ' checked' : '') + '" data-lesson="' + lesson.id + '" onclick="window.toggleLesson(\'' + lesson.id + '\')">' +
                    (isChecked ? '✓' : '') +
                '</button>' +
                '<div class="lesson-info">' +
                    '<div class="lesson-title">' + lesson.title + '</div>' +
                    '<div class="lesson-desc">' + lesson.desc + '</div>' +
                    '<div class="lesson-tags">' + tagsHtml + '</div>' +
                    (linksHtml ? '<div class="lesson-links">' + linksHtml + '</div>' : '') +
                '</div>' +
            '</div>';
        }).join('');
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

    // --- Navigation ---
    function setupNavigation() {
        // Mobile menu
        const btn = document.getElementById('mobileMenuBtn');
        const navbar = document.getElementById('navbar');
        if (btn && navbar) {
            btn.addEventListener('click', () => {
                navbar.classList.toggle('mobile-open');
            });
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
            if (navbar) {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            }
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
        stop1.setAttribute('stop-color', '#4f7df9');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#8b5cf6');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        ring.insertBefore(defs, ring.firstChild);
    }

    // --- Global functions ---
    window.showPhase = function(phaseIndex) {
        // Update tabs
        document.querySelectorAll('.phase-tab').forEach(tab => {
            tab.classList.toggle('active', parseInt(tab.dataset.phase) === phaseIndex);
        });
        // Render content
        renderModuleContent(phaseIndex);
        // Scroll to modules
        const modulesSection = document.getElementById('modules');
        if (modulesSection) {
            modulesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.toggleLesson = function(lessonId) {
        toggleLesson(lessonId);
        // Re-render current phase
        const activeTab = document.querySelector('.phase-tab.active');
        if (activeTab) {
            renderModuleContent(parseInt(activeTab.dataset.phase));
        }
        renderRoadmap();
    };

})();
