// ============================================
// DevAI Academy - Donnees du curriculum
// ============================================

const PHASES = [
    // ──────────────────────────────────────────
    // PHASE 0 : Comprendre l'informatique
    // ──────────────────────────────────────────
    {
        id: 0,
        title: "Comprendre l'Informatique",
        subtitle: "Les bases que personne n'explique",
        color: "#10b981",
        icon: "💡",
        description: "Avant de coder, comprends comment un ordinateur fonctionne. Ca change tout pour la suite.",
        duration: "1-2 semaines",
        lessons: [
            {
                id: "0-1",
                title: "Comment fonctionne un ordinateur",
                desc: "CPU, RAM, disque dur, systeme d'exploitation — le minimum vital explique simplement.",
                tags: ["video", "article"],
                links: [
                    { label: "Crash Course CS", url: "https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" },
                    { label: "Khan Academy Computing", url: "https://www.khanacademy.org/computing" }
                ]
            },
            {
                id: "0-2",
                title: "C'est quoi le code ?",
                desc: "Comprendre ce qu'est un programme, un langage de programmation, et pourquoi ca existe.",
                tags: ["video", "article"],
                links: [
                    { label: "Code.org - How computers work", url: "https://www.youtube.com/watch?v=OAx_6-wdslM" },
                    { label: "MDN - Premiers pas", url: "https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web" }
                ]
            },
            {
                id: "0-3",
                title: "Internet : comment ca marche",
                desc: "HTTP, serveurs, navigateurs, DNS — comprendre le web avant d'y coder.",
                tags: ["video", "article"],
                links: [
                    { label: "How the Internet Works (video)", url: "https://www.youtube.com/watch?v=7_LPdttKXPc" },
                    { label: "MDN - Comment marche le web", url: "https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/How_the_Web_works" }
                ]
            },
            {
                id: "0-4",
                title: "Installer ton environnement",
                desc: "VS Code, un navigateur moderne, et ton premier terminal. Ton atelier de travail.",
                tags: ["practice", "tool"],
                links: [
                    { label: "Telecharger VS Code", url: "https://code.visualstudio.com/" },
                    { label: "Guide VS Code debutant", url: "https://code.visualstudio.com/docs/introvideos/basics" }
                ]
            },
            {
                id: "0-5",
                title: "Logique de programmation (sans coder)",
                desc: "Algorithmes du quotidien, pseudo-code, organigrammes. Apprends a penser comme un dev.",
                tags: ["practice", "article"],
                links: [
                    { label: "Scratch (MIT)", url: "https://scratch.mit.edu/" },
                    { label: "Blockly Games", url: "https://blockly.games/" }
                ]
            }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 1 : HTML & CSS
    // ──────────────────────────────────────────
    {
        id: 1,
        title: "HTML & CSS",
        subtitle: "Construire des pages web",
        color: "#f59e0b",
        icon: "🌐",
        description: "Apprends a creer des pages web visuelles. HTML = la structure, CSS = le style.",
        duration: "2-3 semaines",
        lessons: [
            {
                id: "1-1",
                title: "HTML : Les fondations",
                desc: "Balises, structure d'une page, titres, paragraphes, liens, images.",
                tags: ["course", "practice"],
                links: [
                    { label: "freeCodeCamp HTML", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
                    { label: "MDN HTML Basics", url: "https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML" }
                ]
            },
            {
                id: "1-2",
                title: "HTML : Formulaires et tableaux",
                desc: "Creer des formulaires interactifs, des listes et des tableaux de donnees.",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Formulaires", url: "https://developer.mozilla.org/fr/docs/Learn/Forms" },
                    { label: "W3Schools Forms", url: "https://www.w3schools.com/html/html_forms.asp" }
                ]
            },
            {
                id: "1-3",
                title: "CSS : Les bases du style",
                desc: "Couleurs, polices, marges, padding, bordures — rendre ta page jolie.",
                tags: ["course", "practice"],
                links: [
                    { label: "freeCodeCamp CSS", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
                    { label: "CSS Tricks - Guide complet", url: "https://css-tricks.com/guides/" }
                ]
            },
            {
                id: "1-4",
                title: "CSS Flexbox",
                desc: "Le systeme de mise en page moderne. Indispensable pour aligner et distribuer les elements.",
                tags: ["course", "practice"],
                links: [
                    { label: "Flexbox Froggy (jeu)", url: "https://flexboxfroggy.com/" },
                    { label: "CSS Tricks Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
                ]
            },
            {
                id: "1-5",
                title: "CSS Grid",
                desc: "Le deuxieme systeme de layout. Parfait pour les mises en page complexes.",
                tags: ["course", "practice"],
                links: [
                    { label: "Grid Garden (jeu)", url: "https://cssgridgarden.com/" },
                    { label: "CSS Tricks Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }
                ]
            },
            {
                id: "1-6",
                title: "Responsive Design",
                desc: "Faire que ton site s'adapte a tous les ecrans (mobile, tablette, desktop).",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Responsive Design", url: "https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design" },
                    { label: "web.dev Responsive", url: "https://web.dev/learn/design/" }
                ]
            },
            {
                id: "1-7",
                title: "PROJET : Creer ta page perso",
                desc: "Construis ta premiere page web complete — une page portfolio ou CV en ligne.",
                tags: ["project"],
                links: [
                    { label: "Frontend Mentor (designs)", url: "https://www.frontendmentor.io/challenges?type=free" },
                    { label: "Deployer sur GitHub Pages", url: "https://pages.github.com/" }
                ]
            }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 2 : JavaScript
    // ──────────────────────────────────────────
    {
        id: 2,
        title: "JavaScript",
        subtitle: "Rendre les pages interactives",
        color: "#eab308",
        icon: "⚡",
        description: "JavaScript donne vie a tes pages web. C'est aussi la porte d'entree vers la programmation reelle.",
        duration: "3-4 semaines",
        lessons: [
            {
                id: "2-1",
                title: "Variables, types et operateurs",
                desc: "let, const, strings, numbers, booleans — les briques de base de tout programme.",
                tags: ["course", "practice"],
                links: [
                    { label: "freeCodeCamp JS", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/" },
                    { label: "javascript.info", url: "https://fr.javascript.info/first-steps" }
                ]
            },
            {
                id: "2-2",
                title: "Conditions et boucles",
                desc: "if/else, switch, for, while — controler le flux de ton programme.",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Control Flow", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" },
                    { label: "Exercism JavaScript", url: "https://exercism.org/tracks/javascript" }
                ]
            },
            {
                id: "2-3",
                title: "Fonctions",
                desc: "Creer des blocs de code reutilisables. Le concept le plus important en programmation.",
                tags: ["course", "practice"],
                links: [
                    { label: "javascript.info Fonctions", url: "https://fr.javascript.info/function-basics" },
                    { label: "Codewars (exercices)", url: "https://www.codewars.com/" }
                ]
            },
            {
                id: "2-4",
                title: "Tableaux et Objets",
                desc: "Stocker et manipuler des collections de donnees — map, filter, reduce.",
                tags: ["course", "practice"],
                links: [
                    { label: "javascript.info Arrays", url: "https://fr.javascript.info/array" },
                    { label: "javascript.info Objects", url: "https://fr.javascript.info/object" }
                ]
            },
            {
                id: "2-5",
                title: "Le DOM : manipuler la page",
                desc: "Selectionner, modifier, creer des elements HTML depuis JavaScript.",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Introduction au DOM", url: "https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction" },
                    { label: "javascript.info DOM", url: "https://fr.javascript.info/document" }
                ]
            },
            {
                id: "2-6",
                title: "Evenements et interactivite",
                desc: "Click, survol, clavier — reagir aux actions de l'utilisateur.",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Events", url: "https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/Events" },
                    { label: "javascript.info Events", url: "https://fr.javascript.info/events" }
                ]
            },
            {
                id: "2-7",
                title: "LocalStorage et JSON",
                desc: "Sauvegarder des donnees dans le navigateur. C'est ce que ce site utilise pour ta progression !",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Web Storage", url: "https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API" },
                    { label: "javascript.info JSON", url: "https://fr.javascript.info/json" }
                ]
            },
            {
                id: "2-8",
                title: "Async : Promises et Fetch",
                desc: "Appeler des APIs, attendre des reponses — la programmation asynchrone.",
                tags: ["course", "article"],
                links: [
                    { label: "javascript.info Promises", url: "https://fr.javascript.info/promise-basics" },
                    { label: "MDN Fetch API", url: "https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch" }
                ]
            },
            {
                id: "2-9",
                title: "PROJET : App Todo List interactive",
                desc: "Construis une app complete avec ajout, suppression, sauvegarde locale — ton premier vrai projet JS.",
                tags: ["project"],
                links: [
                    { label: "Tutoriel Todo App", url: "https://www.youtube.com/results?search_query=todo+app+javascript+tutorial" }
                ]
            }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 3 : Python
    // ──────────────────────────────────────────
    {
        id: 3,
        title: "Python",
        subtitle: "Le langage de l'IA",
        color: "#3b82f6",
        icon: "🐍",
        description: "Python est LE langage pour l'IA et l'automatisation. Simple a apprendre, surpuissant a maitriser.",
        duration: "3-4 semaines",
        lessons: [
            { id: "3-1", title: "Python : premiers pas", desc: "Installer Python, variables, types, print() — tes premieres lignes de code Python.", tags: ["course", "practice"], links: [{ label: "Python.org Tutorial", url: "https://docs.python.org/fr/3/tutorial/" }, { label: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" }] },
            { id: "3-2", title: "Conditions, boucles, fonctions", desc: "if/elif/else, for, while, def — le controle de flux en Python.", tags: ["course", "practice"], links: [{ label: "Exercism Python", url: "https://exercism.org/tracks/python" }, { label: "Kaggle Learn Python", url: "https://www.kaggle.com/learn/python" }] },
            { id: "3-3", title: "Listes, dictionnaires, tuples", desc: "Les structures de donnees natives de Python — indispensables au quotidien.", tags: ["course", "practice"], links: [{ label: "Real Python - Lists", url: "https://realpython.com/python-lists-tuples/" }, { label: "Python.org Data Structures", url: "https://docs.python.org/fr/3/tutorial/datastructures.html" }] },
            { id: "3-4", title: "Fichiers, modules et pip", desc: "Lire/ecrire des fichiers, importer des modules, installer des packages.", tags: ["course", "practice"], links: [{ label: "Real Python - Files", url: "https://realpython.com/read-write-files-python/" }, { label: "pip documentation", url: "https://pip.pypa.io/en/stable/getting-started/" }] },
            { id: "3-5", title: "POO : Classes et objets", desc: "La programmation orientee objet — organiser son code comme un pro.", tags: ["course", "article"], links: [{ label: "Real Python OOP", url: "https://realpython.com/python3-object-oriented-programming/" }, { label: "Corey Schafer OOP", url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM" }] },
            { id: "3-6", title: "Gestion d'erreurs et debugging", desc: "try/except, lire les erreurs, utiliser le debugger — ne plus avoir peur des bugs.", tags: ["course", "practice"], links: [{ label: "Real Python Exceptions", url: "https://realpython.com/python-exceptions/" }, { label: "VS Code Python Debug", url: "https://code.visualstudio.com/docs/python/debugging" }] },
            { id: "3-7", title: "APIs avec Python (requests)", desc: "Appeler des APIs web depuis Python — recuperer des donnees du monde reel.", tags: ["course", "practice"], links: [{ label: "Real Python - Requests", url: "https://realpython.com/python-requests/" }, { label: "Public APIs List", url: "https://github.com/public-apis/public-apis" }] },
            { id: "3-8", title: "PROJET : Script d'automatisation", desc: "Automatise une tache reelle : renommer des fichiers, scraper un site, organiser tes donnees.", tags: ["project"], links: [{ label: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" }] }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 4 : Git, Terminal & Outils Dev
    // ──────────────────────────────────────────
    {
        id: 4,
        title: "Git, Terminal & Outils",
        subtitle: "Les outils du developpeur",
        color: "#8b5cf6",
        icon: "🔧",
        description: "Maitriser le terminal et Git, c'est comme passer du velo a la moto. Ca change tout.",
        duration: "2 semaines",
        lessons: [
            { id: "4-1", title: "Le Terminal : commandes essentielles", desc: "cd, ls, mkdir, cp, mv, rm — naviguer et manipuler des fichiers en ligne de commande.", tags: ["course", "practice"], links: [{ label: "freeCodeCamp CLI", url: "https://www.freecodecamp.org/news/command-line-for-beginners/" }, { label: "Terminus (jeu)", url: "https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html" }] },
            { id: "4-2", title: "Git : les bases", desc: "init, add, commit, status, log — versionner ton code et ne plus jamais perdre ton travail.", tags: ["course", "practice"], links: [{ label: "Git - the simple guide", url: "https://rogerdudler.github.io/git-guide/index.fr.html" }, { label: "Learn Git Branching (jeu)", url: "https://learngitbranching.js.org/?locale=fr_FR" }] },
            { id: "4-3", title: "GitHub : collaborer en ligne", desc: "Push, pull, fork, pull requests — partager ton code avec le monde.", tags: ["course", "practice"], links: [{ label: "GitHub Skills", url: "https://skills.github.com/" }, { label: "GitHub Docs", url: "https://docs.github.com/fr/get-started" }] },
            { id: "4-4", title: "Git avance : branches et merge", desc: "Travailler en parallele, fusionner des branches, resoudre des conflits.", tags: ["course", "article"], links: [{ label: "Atlassian Git Branching", url: "https://www.atlassian.com/git/tutorials/using-branches" }, { label: "Oh Shit, Git!?!", url: "https://ohshitgit.com/" }] },
            { id: "4-5", title: "VS Code : productivite maximale", desc: "Extensions essentielles, raccourcis, terminal integre, debugger.", tags: ["tool", "article"], links: [{ label: "VS Code Tips", url: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks" }] },
            { id: "4-6", title: "PROJET : Contribuer a l'open source", desc: "Fais ta premiere contribution sur GitHub — meme corriger une typo, ca compte !", tags: ["project"], links: [{ label: "First Contributions", url: "https://github.com/firstcontributions/first-contributions" }, { label: "Good First Issues", url: "https://goodfirstissues.com/" }] }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 5 : Structures de donnees & Algo
    // ──────────────────────────────────────────
    {
        id: 5,
        title: "Structures de Donnees & Algo",
        subtitle: "Penser comme un ingenieur",
        color: "#ef4444",
        icon: "🧮",
        description: "Le coeur de l'informatique. Comprendre les algo, c'est savoir resoudre n'importe quel probleme.",
        duration: "4-6 semaines",
        lessons: [
            { id: "5-1", title: "Complexite algorithmique (Big O)", desc: "Mesurer l'efficacite d'un algorithme — O(n), O(log n), O(n2).", tags: ["course", "article"], links: [{ label: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" }, { label: "Coding Interview University", url: "https://github.com/jwasham/coding-interview-university" }] },
            { id: "5-2", title: "Arrays et Linked Lists", desc: "Les deux structures de base — comprendre quand utiliser l'une ou l'autre.", tags: ["course", "practice"], links: [{ label: "Visualgo", url: "https://visualgo.net/en" }, { label: "LeetCode Arrays", url: "https://leetcode.com/tag/array/" }] },
            { id: "5-3", title: "Stacks, Queues et Hash Tables", desc: "LIFO, FIFO, et la structure la plus utile en programmation.", tags: ["course", "practice"], links: [{ label: "Visualgo", url: "https://visualgo.net/en" }, { label: "HackerRank DS", url: "https://www.hackerrank.com/domains/data-structures" }] },
            { id: "5-4", title: "Arbres et Graphes", desc: "Arbres binaires, BST, graphes — modeliser des relations complexes.", tags: ["course", "article"], links: [{ label: "Visualgo Trees", url: "https://visualgo.net/en/bst" }] },
            { id: "5-5", title: "Tri et Recherche", desc: "Binary search, mergesort, quicksort — les algorithmes classiques.", tags: ["course", "practice"], links: [{ label: "Sorting Visualizer", url: "https://www.sortvisualizer.com/" }] },
            { id: "5-6", title: "Recursion et Prog. dynamique", desc: "Resoudre des problemes complexes en les decomposant — la technique des pros.", tags: ["course", "practice"], links: [{ label: "LeetCode DP", url: "https://leetcode.com/tag/dynamic-programming/" }] },
            { id: "5-7", title: "BFS et DFS", desc: "Breadth-first et depth-first search — parcourir des graphes.", tags: ["course", "practice"], links: [{ label: "Visualgo BFS/DFS", url: "https://visualgo.net/en/dfsbfs" }] },
            { id: "5-8", title: "PROJET : 20 problemes LeetCode", desc: "10 Easy + 10 Medium. Documente tes solutions sur GitHub.", tags: ["project", "practice"], links: [{ label: "LeetCode", url: "https://leetcode.com/" }, { label: "NeetCode Roadmap", url: "https://neetcode.io/roadmap" }] }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 6 : Bases de donnees & APIs
    // ──────────────────────────────────────────
    {
        id: 6,
        title: "Bases de Donnees & APIs",
        subtitle: "Stocker et echanger des donnees",
        color: "#06b6d4",
        icon: "🗄️",
        description: "Comprendre comment les applications stockent et echangent des donnees. Essentiel pour l'IA.",
        duration: "3 semaines",
        lessons: [
            { id: "6-1", title: "SQL : les bases", desc: "SELECT, INSERT, UPDATE, DELETE — interroger une base de donnees relationnelle.", tags: ["course", "practice"], links: [{ label: "SQLBolt (interactif)", url: "https://sqlbolt.com/" }, { label: "Khan Academy SQL", url: "https://www.khanacademy.org/computing/computer-programming/sql" }] },
            { id: "6-2", title: "Concevoir une base de donnees", desc: "Tables, relations, cles primaires/etrangeres — modeliser tes donnees.", tags: ["course", "article"], links: [{ label: "DB Designer", url: "https://www.dbdesigner.net/" }] },
            { id: "6-3", title: "APIs REST : comprendre et consommer", desc: "GET, POST, PUT, DELETE — les verbes HTTP et comment parler a une API.", tags: ["course", "practice"], links: [{ label: "REST API Tutorial", url: "https://restfulapi.net/" }, { label: "Postman Learning", url: "https://learning.postman.com/" }] },
            { id: "6-4", title: "Creer une API avec Flask/FastAPI", desc: "Construis ta propre API en Python — ton premier backend.", tags: ["course", "project"], links: [{ label: "FastAPI Tutorial", url: "https://fastapi.tiangolo.com/tutorial/" }, { label: "Flask Tutorial", url: "https://flask.palletsprojects.com/en/stable/tutorial/" }] },
            { id: "6-5", title: "NoSQL et bases vectorielles", desc: "MongoDB, ChromaDB, Pinecone — les bases de donnees modernes pour l'IA.", tags: ["article", "tool"], links: [{ label: "MongoDB University", url: "https://learn.mongodb.com/" }, { label: "ChromaDB Docs", url: "https://docs.trychroma.com/" }] },
            { id: "6-6", title: "PROJET : API CRUD complete", desc: "Cree une API avec base de donnees — un mini-backend fonctionnel.", tags: ["project"], links: [{ label: "FastAPI Full Stack", url: "https://fastapi.tiangolo.com/tutorial/" }] }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 7 : IA & Machine Learning
    // ──────────────────────────────────────────
    {
        id: 7,
        title: "IA & Machine Learning",
        subtitle: "Comprendre l'intelligence artificielle",
        color: "#ec4899",
        icon: "🧠",
        description: "Les fondamentaux de l'IA et du ML. Comprendre COMMENT ca marche avant de l'utiliser.",
        duration: "4-6 semaines",
        lessons: [
            { id: "7-1", title: "C'est quoi l'IA et le ML ?", desc: "Supervised/unsupervised learning, deep learning — la vue d'ensemble.", tags: ["video", "article"], links: [{ label: "3Blue1Brown Neural Networks", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" }, { label: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" }] },
            { id: "7-2", title: "Python pour la data : NumPy & Pandas", desc: "Manipuler des donnees numeriques et des tableaux — la base de tout en data science.", tags: ["course", "practice"], links: [{ label: "Kaggle Pandas", url: "https://www.kaggle.com/learn/pandas" }, { label: "NumPy Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html" }] },
            { id: "7-3", title: "Visualisation : Matplotlib & Seaborn", desc: "Creer des graphiques pour comprendre tes donnees — histogrammes, scatter plots, heatmaps.", tags: ["course", "practice"], links: [{ label: "Kaggle Data Viz", url: "https://www.kaggle.com/learn/data-visualization" }] },
            { id: "7-4", title: "Premier modele ML avec scikit-learn", desc: "Regression, classification, train/test split — ton premier modele predictif.", tags: ["course", "practice"], links: [{ label: "scikit-learn Tutorial", url: "https://scikit-learn.org/stable/tutorial/" }, { label: "Kaggle Intro ML", url: "https://www.kaggle.com/learn/intro-to-machine-learning" }] },
            { id: "7-5", title: "Deep Learning : reseaux de neurones", desc: "Perceptron, backpropagation, CNN, RNN — comprendre le deep learning.", tags: ["course", "video"], links: [{ label: "fast.ai Course", url: "https://course.fast.ai/" }, { label: "Andrew Ng ML (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-introduction" }] },
            { id: "7-6", title: "PyTorch ou TensorFlow : premier reseau", desc: "Construis et entraine un reseau de neurones — classification d'images, texte.", tags: ["course", "practice"], links: [{ label: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/beginner/basics/intro.html" }, { label: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials" }] },
            { id: "7-7", title: "Evaluation de modeles", desc: "Accuracy, precision, recall, F1, overfitting — savoir si ton modele est bon.", tags: ["course", "article"], links: [{ label: "Kaggle ML Intermediate", url: "https://www.kaggle.com/learn/intermediate-machine-learning" }] },
            { id: "7-8", title: "PROJET : Competition Kaggle", desc: "Participe a une competition Kaggle pour debutants — Titanic ou House Prices.", tags: ["project", "practice"], links: [{ label: "Kaggle Titanic", url: "https://www.kaggle.com/c/titanic" }, { label: "Kaggle House Prices", url: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques" }] }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 8 : LLMs & Prompt Engineering
    // ──────────────────────────────────────────
    {
        id: 8,
        title: "LLMs & Prompt Engineering",
        subtitle: "Maitriser les modeles de langage",
        color: "#f97316",
        icon: "💬",
        description: "Les LLMs (GPT, Claude, Gemini) ont change le monde. Apprends a les comprendre et les piloter.",
        duration: "3-4 semaines",
        lessons: [
            { id: "8-1", title: "Comment fonctionne un LLM", desc: "Transformers, tokens, attention, embeddings — comprendre la magie derriere ChatGPT.", tags: ["video", "article"], links: [{ label: "3Blue1Brown Transformers", url: "https://www.youtube.com/watch?v=wjZofJX0v4M" }, { label: "Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" }] },
            { id: "8-2", title: "Prompt Engineering : les bases", desc: "Zero-shot, few-shot, chain-of-thought — ecrire des prompts qui marchent.", tags: ["course", "practice"], links: [{ label: "Anthropic Prompt Guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering" }, { label: "Learn Prompting", url: "https://learnprompting.org/" }] },
            { id: "8-3", title: "Utiliser les APIs (OpenAI, Claude)", desc: "Appeler un LLM depuis ton code Python — ta premiere app IA.", tags: ["course", "practice"], links: [{ label: "Anthropic API Docs", url: "https://docs.anthropic.com/" }, { label: "Anthropic Cookbook", url: "https://github.com/anthropics/anthropic-cookbook" }] },
            { id: "8-4", title: "RAG : Retrieval-Augmented Generation", desc: "Donner de la memoire a une IA — connecter un LLM a tes propres donnees.", tags: ["course", "article"], links: [{ label: "LangChain RAG Tutorial", url: "https://python.langchain.com/docs/tutorials/rag/" }, { label: "DeepLearning.AI RAG", url: "https://www.deeplearning.ai/short-courses/" }] },
            { id: "8-5", title: "Embeddings et recherche semantique", desc: "Transformer du texte en vecteurs pour chercher par sens, pas par mots-cles.", tags: ["course", "article"], links: [{ label: "OpenAI Embeddings Guide", url: "https://platform.openai.com/docs/guides/embeddings" }, { label: "ChromaDB Tutorial", url: "https://docs.trychroma.com/getting-started" }] },
            { id: "8-6", title: "Function calling et Tool Use", desc: "Permettre a un LLM d'utiliser des outils — la base des agents IA.", tags: ["course", "practice"], links: [{ label: "Anthropic Tool Use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" }, { label: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling" }] },
            { id: "8-7", title: "PROJET : Chatbot RAG personnel", desc: "Construis un chatbot qui repond a des questions sur TES documents.", tags: ["project"], links: [{ label: "LangChain Docs", url: "https://python.langchain.com/docs/" }] }
        ]
    },

    // ──────────────────────────────────────────
    // PHASE 9 : Construire des Agents IA
    // ──────────────────────────────────────────
    {
        id: 9,
        title: "Construire des Agents IA",
        subtitle: "Le niveau expert",
        color: "#a855f7",
        icon: "🤖",
        description: "L'aboutissement du parcours. Creer des agents autonomes qui raisonnent, utilisent des outils et resolvent des problemes.",
        duration: "6+ semaines",
        lessons: [
            { id: "9-1", title: "Architecture d'un agent IA", desc: "Percevoir, raisonner, agir, apprendre — comprendre le cycle d'un agent.", tags: ["course", "article"], links: [{ label: "Hugging Face Agents Course", url: "https://huggingface.co/learn/agents-course/en/unit0/introduction" }, { label: "Microsoft AI Agents for Beginners", url: "https://github.com/microsoft/ai-agents-for-beginners" }] },
            { id: "9-2", title: "LangChain & LangGraph", desc: "Le framework leader pour construire des apps et agents LLM.", tags: ["course", "practice"], links: [{ label: "LangChain Tutorial", url: "https://python.langchain.com/docs/tutorials/" }, { label: "LangGraph Docs", url: "https://langchain-ai.github.io/langgraph/" }] },
            { id: "9-3", title: "Creer un agent simple", desc: "Un agent qui utilise des outils (recherche web, calcul, fichiers) pour resoudre des taches.", tags: ["course", "project"], links: [{ label: "DeepLearning.AI Agents", url: "https://www.deeplearning.ai/short-courses/" }, { label: "LangGraph Agent Tutorial", url: "https://langchain-ai.github.io/langgraph/tutorials/" }] },
            { id: "9-4", title: "Memoire et contexte", desc: "Short-term et long-term memory — faire qu'un agent se souvienne.", tags: ["course", "article"], links: [{ label: "LangChain Memory", url: "https://python.langchain.com/docs/concepts/memory/" }] },
            { id: "9-5", title: "Multi-agents et orchestration", desc: "Faire collaborer plusieurs agents — CrewAI, AutoGen, LangGraph.", tags: ["course", "article"], links: [{ label: "CrewAI Docs", url: "https://docs.crewai.com/" }, { label: "AutoGen (Microsoft)", url: "https://microsoft.github.io/autogen/" }] },
            { id: "9-6", title: "MCP : Model Context Protocol", desc: "Le standard ouvert pour connecter des agents a des outils externes.", tags: ["course", "tool"], links: [{ label: "MCP Specification", url: "https://modelcontextprotocol.io/" }, { label: "Anthropic MCP", url: "https://docs.anthropic.com/en/docs/agents-and-tools/mcp" }] },
            { id: "9-7", title: "Claude Code : l'agent en action", desc: "Etudier comment Claude Code fonctionne — un agent de production reel.", tags: ["tool", "article"], links: [{ label: "Claude Code Docs", url: "https://docs.anthropic.com/en/docs/claude-code" }, { label: "claw-code (reimpl.)", url: "https://github.com/instructkr/claw-code" }] },
            { id: "9-8", title: "Tester et evaluer des agents", desc: "Benchmarks, evaluation humaine, metriques — savoir si ton agent est fiable.", tags: ["course", "article"], links: [{ label: "UC Berkeley LLM Agents", url: "https://rdi.berkeley.edu/llm-agents/f24" }] },
            { id: "9-9", title: "Deployer un agent en production", desc: "Docker, cloud, monitoring, securite — mettre ton agent dans le monde reel.", tags: ["course", "tool"], links: [{ label: "Docker Getting Started", url: "https://docs.docker.com/get-started/" }] },
            { id: "9-10", title: "PROJET FINAL : Ton agent IA complet", desc: "Construis un agent autonome de A a Z — choisis ton domaine, tes outils, et deploie-le.", tags: ["project"], links: [{ label: "AI Agents Roadmap", url: "https://roadmap.sh/ai-agents" }] }
        ]
    }
];

// ============================================
// Ressources recommandees
// ============================================

const RESOURCES = [
    {
        icon: "🎓",
        title: "CS50 par Harvard",
        desc: "LE cours d'intro a l'informatique. Gratuit, legendaire, parfait pour commencer.",
        url: "https://cs50.harvard.edu/",
        level: "beginner"
    },
    {
        icon: "🏕️",
        title: "freeCodeCamp",
        desc: "Curriculum complet et gratuit : web, Python, data science. Avec certifications.",
        url: "https://www.freecodecamp.org/",
        level: "beginner"
    },
    {
        icon: "🗺️",
        title: "The Odin Project",
        desc: "Parcours full-stack complet, open source, base sur des projets concrets.",
        url: "https://www.theodinproject.com/",
        level: "beginner"
    },
    {
        icon: "📚",
        title: "Coding Interview University",
        desc: "Le plan d'etude ultime pour les structures de donnees et algorithmes.",
        url: "https://github.com/jwasham/coding-interview-university",
        level: "intermediate"
    },
    {
        icon: "🤖",
        title: "Hugging Face Agents Course",
        desc: "Cours gratuit et complet pour apprendre a construire des agents IA.",
        url: "https://huggingface.co/learn/agents-course/en/unit0/introduction",
        level: "advanced"
    },
    {
        icon: "🧪",
        title: "DeepLearning.AI",
        desc: "Mini-cours gratuits par Andrew Ng sur le ML, LLMs, RAG et agents.",
        url: "https://www.deeplearning.ai/short-courses/",
        level: "intermediate"
    },
    {
        icon: "📊",
        title: "Kaggle Learn",
        desc: "Micro-cours gratuits sur Python, Pandas, ML. Avec notebooks interactifs.",
        url: "https://www.kaggle.com/learn",
        level: "beginner"
    },
    {
        icon: "🚀",
        title: "fast.ai",
        desc: "Deep learning pratique, approche top-down. Pas besoin de PhD.",
        url: "https://course.fast.ai/",
        level: "intermediate"
    },
    {
        icon: "🔧",
        title: "Anthropic Cookbook",
        desc: "Exemples pratiques pour construire avec Claude : tool use, agents, RAG.",
        url: "https://github.com/anthropics/anthropic-cookbook",
        level: "advanced"
    },
    {
        icon: "🗺️",
        title: "roadmap.sh",
        desc: "Roadmaps visuelles interactives pour chaque domaine du dev et de l'IA.",
        url: "https://roadmap.sh/",
        level: "beginner"
    },
    {
        icon: "🏋️",
        title: "Exercism",
        desc: "Exercices de code dans 70+ langages avec mentorat gratuit.",
        url: "https://exercism.org/",
        level: "beginner"
    },
    {
        icon: "🎯",
        title: "LeetCode + NeetCode",
        desc: "La reference pour pratiquer les algorithmes. NeetCode organise le parcours.",
        url: "https://neetcode.io/roadmap",
        level: "intermediate"
    }
];
