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
                ],
                workshop: {
                    duration: "30 min",
                    difficulty: 1,
                    objectives: ["Comprendre les composants principaux d'un ordinateur", "Savoir ce que font le CPU, la RAM et le stockage", "Comprendre le role du systeme d'exploitation"],
                    sections: [
                        { type: "theory", title: "L'ordinateur : une machine a traiter l'information", content: "Un ordinateur est fondamentalement une machine qui recoit des donnees en entree, les traite, et produit un resultat. Tout ce que tu fais — naviguer sur le web, ecrire du code, regarder une video — se resume a des calculs sur des nombres.\n\nLes 4 composants essentiels :\n- **CPU** (processeur) : le cerveau, il execute les calculs\n- **RAM** (memoire vive) : la memoire a court terme, rapide mais temporaire\n- **Stockage** (SSD/HDD) : la memoire a long terme, persistante\n- **Systeme d'exploitation** : le chef d'orchestre qui gere tout" },
                        { type: "info", variant: "tip", content: "Imagine que tu cuisines : le CPU est le cuisinier, la RAM est le plan de travail (acces rapide mais limite), et le stockage est le frigo (plus lent mais grande capacite)." },
                        { type: "theory", title: "Le CPU : le cerveau de la machine", content: "Le CPU (Central Processing Unit) execute des instructions une par une, extremement vite — des milliards par seconde.\n\nChaque instruction est simple : additionner deux nombres, comparer des valeurs, deplacer des donnees. Mais enchainees, ces instructions simples produisent tout ce que tu vois a l'ecran.\n\nLes processeurs modernes ont plusieurs 'coeurs' — comme avoir plusieurs cuisiniers en parallele." },
                        { type: "code", language: "text", code: "CPU : Execute les instructions\n  ├── Horloge : 3.5 GHz = 3.5 milliards de cycles/seconde\n  ├── Coeurs : 8 coeurs = 8 taches en parallele\n  └── Cache : Memoire ultra-rapide integree\n\nRAM : Memoire temporaire\n  ├── 16 Go typique\n  ├── Acces : ~100 nanosecondes\n  └── Videe quand on eteint le PC\n\nSSD : Stockage persistant\n  ├── 512 Go - 2 To typique\n  ├── Acces : ~100 microsecondes (1000x plus lent que la RAM)\n  └── Garde les donnees meme eteint", explanation: "Cette hierarchie de memoire est fondamentale en informatique. Plus c'est rapide, plus c'est petit et cher." },
                        { type: "theory", title: "Le systeme d'exploitation", content: "Le systeme d'exploitation (Windows, macOS, Linux) est un programme special qui :\n- Gere l'acces au materiel (ecran, clavier, reseau)\n- Permet a plusieurs programmes de tourner en meme temps\n- Fournit une interface utilisateur (bureau, fichiers, fenetres)\n- Gere la securite et les permissions\n\nSans OS, il faudrait programmer directement le materiel — ce que faisaient les premiers informaticiens !" },
                        { type: "quiz", question: "Quelle est la difference principale entre la RAM et le SSD ?", choices: ["La RAM est plus grosse que le SSD", "La RAM perd ses donnees quand on eteint le PC, pas le SSD", "Le SSD est plus rapide que la RAM", "Il n'y a pas de difference"], correct: 1, explanation: "La RAM est une memoire volatile : rapide mais temporaire. Le SSD est persistant : plus lent mais garde les donnees meme sans alimentation." },
                        { type: "quiz", question: "Combien d'operations par seconde un CPU a 3 GHz peut-il theoriquement effectuer ?", choices: ["3 millions", "3 milliards", "3 mille", "3 billions"], correct: 1, explanation: "GHz signifie Giga-Hertz, soit des milliards de cycles par seconde. 3 GHz = 3 milliards de cycles/seconde." }
                    ]
                }
            },
            {
                id: "0-2",
                title: "C'est quoi le code ?",
                desc: "Comprendre ce qu'est un programme, un langage de programmation, et pourquoi ca existe.",
                tags: ["video", "article"],
                links: [
                    { label: "Code.org - How computers work", url: "https://www.youtube.com/watch?v=OAx_6-wdslM" },
                    { label: "MDN - Premiers pas", url: "https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web" }
                ],
                workshop: {
                    duration: "25 min",
                    difficulty: 1,
                    objectives: ["Comprendre ce qu'est un programme informatique", "Savoir pourquoi il existe differents langages", "Ecrire du pseudo-code simple"],
                    sections: [
                        { type: "theory", title: "Un programme, c'est une recette", content: "Un programme informatique est une suite d'instructions que l'ordinateur execute dans l'ordre. C'est exactement comme une recette de cuisine :\n\n1. Prends les ingredients (donnees d'entree)\n2. Suis les etapes (instructions)\n3. Obtiens le plat (resultat)\n\nLa difference : un ordinateur execute les instructions a la lettre, sans interpretation. Si tu ecris 'ajoute du sel', il faut preciser combien de grammes." },
                        { type: "code", language: "text", code: "PROGRAMME : Faire du cafe\n\n1. Remplir le reservoir d'eau (500ml)\n2. Mettre un filtre dans la machine\n3. Ajouter 3 cuilleres de cafe moulu\n4. Appuyer sur le bouton ON\n5. Attendre 5 minutes\n6. Verser dans une tasse\n7. FIN", explanation: "Voila un 'programme' en langage humain. Un vrai programme ressemble a ca, mais ecrit dans un langage que l'ordinateur comprend." },
                        { type: "theory", title: "Pourquoi plusieurs langages ?", content: "Il existe des centaines de langages de programmation. Pourquoi ?\n\nChaque langage est optimise pour un usage :\n- **Python** : IA, data science, scripts — facile a lire\n- **JavaScript** : sites web interactifs — tourne dans le navigateur\n- **C/C++** : jeux video, systemes — tres rapide\n- **SQL** : bases de donnees — interroger des donnees\n\nTous font la meme chose au fond : donner des instructions au CPU. La difference est dans la facilite d'ecriture et les domaines d'application." },
                        { type: "info", variant: "note", content: "Dans ce parcours, tu apprendras JavaScript (pour le web) et Python (pour l'IA). Ces deux langages couvrent 80% des usages modernes." },
                        { type: "quiz", question: "Pourquoi un ordinateur a-t-il besoin d'instructions tres precises ?", choices: ["Parce qu'il est stupide", "Parce qu'il execute les instructions a la lettre, sans interpretation", "Parce qu'il ne comprend que le francais", "Parce qu'il est lent"], correct: 1, explanation: "Un ordinateur n'interprete pas. Il fait exactement ce qu'on lui dit, ni plus ni moins. C'est pourquoi la precision du code est cruciale." },
                        { type: "exercise", title: "Ecris ton premier pseudo-code", instructions: "Ecris un programme en pseudo-code (en francais) qui demande l'age de l'utilisateur et affiche s'il est majeur ou mineur.", starterCode: "PROGRAMME : Verifier l'age\n\n1. Demander a l'utilisateur son age\n2. ...\n3. ...", solution: "PROGRAMME : Verifier l'age\n\n1. Demander a l'utilisateur son age\n2. Stocker la reponse dans AGE\n3. SI AGE >= 18 ALORS\n4.   Afficher \"Vous etes majeur\"\n5. SINON\n6.   Afficher \"Vous etes mineur\"\n7. FIN SI", language: "text" }
                    ]
                }
            },
            {
                id: "0-3",
                title: "Internet : comment ca marche",
                desc: "HTTP, serveurs, navigateurs, DNS — comprendre le web avant d'y coder.",
                tags: ["video", "article"],
                links: [
                    { label: "How the Internet Works (video)", url: "https://www.youtube.com/watch?v=7_LPdttKXPc" },
                    { label: "MDN - Comment marche le web", url: "https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/How_the_Web_works" }
                ],
                workshop: {
                    duration: "30 min",
                    difficulty: 1,
                    objectives: ["Comprendre le modele client-serveur", "Savoir ce que font HTTP et DNS", "Visualiser le parcours d'une requete web"],
                    sections: [
                        { type: "theory", title: "Le modele client-serveur", content: "Quand tu tapes une adresse dans ton navigateur, voila ce qui se passe :\n\n1. **Ton navigateur** (le client) envoie une requete\n2. **Un serveur** quelque part dans le monde recoit la requete\n3. Le serveur traite la requete et renvoie une reponse\n4. Ton navigateur affiche la reponse (la page web)\n\nC'est le modele **client-serveur** : quelqu'un demande, quelqu'un repond." },
                        { type: "theory", title: "DNS : l'annuaire du web", content: "Les ordinateurs communiquent avec des adresses IP (ex: 142.250.74.238). Mais personne ne retient ces numeros !\n\nLe **DNS** (Domain Name System) est l'annuaire qui traduit les noms en adresses IP :\n- google.com → 142.250.74.238\n- github.com → 140.82.121.4\n\nQuand tu tapes 'google.com', ton navigateur demande d'abord au DNS l'adresse IP correspondante." },
                        { type: "code", language: "text", code: "Toi: \"Je veux voir google.com\"\n  │\n  ├──→ DNS: \"google.com = 142.250.74.238\"\n  │\n  ├──→ Requete HTTP GET → Serveur 142.250.74.238\n  │\n  ←──── Reponse: page HTML + CSS + JS\n  │\n  └── Navigateur: affiche la page", explanation: "Chaque visite de site web suit ce schema. Tout se passe en quelques millisecondes." },
                        { type: "theory", title: "HTTP : le langage du web", content: "**HTTP** (HyperText Transfer Protocol) est le protocole de communication du web. C'est un ensemble de regles pour echanger des donnees.\n\nLes methodes principales :\n- **GET** : recuperer des donnees (charger une page)\n- **POST** : envoyer des donnees (soumettre un formulaire)\n- **PUT** : modifier des donnees existantes\n- **DELETE** : supprimer des donnees\n\n**HTTPS** = HTTP + chiffrement (le cadenas dans la barre d'adresse). Toutes les donnees sont cryptees pendant le transport." },
                        { type: "info", variant: "warning", content: "Ne saisis jamais de mot de passe sur un site qui n'a pas HTTPS (pas de cadenas). Les donnees circuleraient en clair sur le reseau." },
                        { type: "quiz", question: "Quel est le role du DNS ?", choices: ["Afficher les pages web", "Traduire les noms de domaine en adresses IP", "Proteger contre les virus", "Stocker les fichiers web"], correct: 1, explanation: "Le DNS est l'annuaire d'Internet. Il traduit les noms de domaine (google.com) en adresses IP (142.250.74.238) pour que les ordinateurs puissent communiquer." },
                        { type: "quiz", question: "Que signifie le 'S' dans HTTPS ?", choices: ["Speed", "Server", "Secure", "Simple"], correct: 2, explanation: "HTTPS = HTTP Secure. Le 'S' signifie que la communication est chiffree entre ton navigateur et le serveur, protegeant tes donnees." }
                    ]
                }
            },
            {
                id: "0-4",
                title: "Installer ton environnement",
                desc: "VS Code, un navigateur moderne, et ton premier terminal. Ton atelier de travail.",
                tags: ["practice", "tool"],
                links: [
                    { label: "Telecharger VS Code", url: "https://code.visualstudio.com/" },
                    { label: "Guide VS Code debutant", url: "https://code.visualstudio.com/docs/introvideos/basics" }
                ],
                workshop: {
                    duration: "35 min",
                    difficulty: 1,
                    objectives: ["Installer VS Code et le configurer", "Ouvrir et utiliser le terminal", "Creer ton premier fichier HTML"],
                    sections: [
                        { type: "theory", title: "Les outils du developpeur", content: "Pour coder, tu as besoin de 3 outils :\n\n1. **Un editeur de code** : VS Code (gratuit, le plus populaire)\n2. **Un navigateur moderne** : Chrome ou Firefox (avec les DevTools)\n3. **Un terminal** : pour executer des commandes (integre dans VS Code)\n\nC'est ton atelier. Pas besoin de plus pour commencer." },
                        { type: "theory", title: "Installer VS Code", content: "1. Va sur code.visualstudio.com\n2. Telecharge la version pour ton OS\n3. Installe-le\n4. Lance-le\n\nExtensions recommandees pour debuter :\n- **Live Server** : actualise ta page web automatiquement\n- **Prettier** : formate ton code proprement\n- **French Language Pack** : interface en francais (optionnel)" },
                        { type: "info", variant: "tip", content: "Raccourci crucial : Ctrl+` (backtick) ouvre le terminal integre dans VS Code. Tu l'utiliseras constamment." },
                        { type: "exercise", title: "Cree ton premier fichier", instructions: "1. Ouvre VS Code\n2. Cree un nouveau dossier 'mon-premier-site'\n3. Ouvre ce dossier dans VS Code (Fichier > Ouvrir le dossier)\n4. Cree un fichier 'index.html'\n5. Tape le code ci-dessous et sauvegarde (Ctrl+S)", starterCode: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Ma premiere page</title>\n</head>\n<body>\n    <h1>Bonjour le monde !</h1>\n    <p>Ma premiere page web.</p>\n</body>\n</html>", solution: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Ma premiere page</title>\n</head>\n<body>\n    <h1>Bonjour le monde !</h1>\n    <p>Ma premiere page web.</p>\n    <p>Ca marche ! Je sais creer un fichier HTML.</p>\n</body>\n</html>", language: "html" },
                        { type: "info", variant: "note", content: "Si tu as installe l'extension Live Server, fais clic-droit sur ton fichier HTML et choisis 'Open with Live Server'. Ta page s'ouvrira dans le navigateur et se mettra a jour automatiquement quand tu modifies le code !" }
                    ]
                }
            },
            {
                id: "0-5",
                title: "Logique de programmation (sans coder)",
                desc: "Algorithmes du quotidien, pseudo-code, organigrammes. Apprends a penser comme un dev.",
                tags: ["practice", "article"],
                links: [
                    { label: "Scratch (MIT)", url: "https://scratch.mit.edu/" },
                    { label: "Blockly Games", url: "https://blockly.games/" }
                ],
                workshop: {
                    duration: "35 min",
                    difficulty: 1,
                    objectives: ["Comprendre ce qu'est un algorithme", "Savoir decomposer un probleme", "Maitriser les 3 structures de controle fondamentales"],
                    sections: [
                        { type: "theory", title: "Un algorithme, c'est une suite d'etapes", content: "Un algorithme est une suite finie d'instructions pour resoudre un probleme. Tu en utilises tous les jours sans le savoir :\n\n- Une recette de cuisine est un algorithme\n- Un itineraire GPS est un algorithme\n- Le tri de tes emails est un algorithme\n\nEn programmation, tout repose sur 3 structures :\n1. **Sequence** : faire les choses dans l'ordre\n2. **Condition** : SI ceci ALORS fais cela\n3. **Boucle** : REPETE tant que..." },
                        { type: "code", language: "text", code: "ALGORITHME : Traverser la rue\n\n1. Aller au passage pieton\n2. Regarder le feu\n3. SI le feu est vert ALORS\n4.   Traverser la rue\n5. SINON\n6.   REPETER\n7.     Attendre 5 secondes\n8.     Regarder le feu\n9.   JUSQU'A ce que le feu soit vert\n10.  Traverser la rue\n11. FIN SI", explanation: "Cet algorithme utilise les 3 structures : sequence (etapes 1-2), condition (SI/SINON), et boucle (REPETER/JUSQU'A)." },
                        { type: "theory", title: "Decomposer un probleme", content: "La competence #1 d'un developpeur est la **decomposition** : prendre un probleme complexe et le diviser en sous-problemes simples.\n\nExemple : 'Creer un jeu de devinette'\n→ Decomposition :\n1. Choisir un nombre aleatoire\n2. Demander une proposition au joueur\n3. Comparer avec le nombre secret\n4. Dire si c'est plus, moins, ou gagne\n5. Recommencer jusqu'a ce qu'il trouve\n\nChaque sous-probleme est simple a resoudre individuellement !" },
                        { type: "exercise", title: "Decompose un probleme", instructions: "Ecris l'algorithme en pseudo-code pour un distributeur automatique de boissons. L'utilisateur insere de l'argent, choisit une boisson, et recoit la boisson + la monnaie.", starterCode: "ALGORITHME : Distributeur de boissons\n\n1. Afficher les boissons disponibles\n2. ...", solution: "ALGORITHME : Distributeur de boissons\n\n1. Afficher les boissons et leurs prix\n2. Attendre que l'utilisateur insere de l'argent\n3. Calculer le montant total insere\n4. Attendre le choix de boisson\n5. SI montant >= prix de la boisson ALORS\n6.   Servir la boisson\n7.   Calculer la monnaie = montant - prix\n8.   SI monnaie > 0 ALORS\n9.     Rendre la monnaie\n10.  FIN SI\n11. SINON\n12.   Afficher \"Montant insuffisant\"\n13.   Rendre l'argent\n14. FIN SI", language: "text" },
                        { type: "quiz", question: "Quelles sont les 3 structures de controle fondamentales en programmation ?", choices: ["Variables, fonctions, classes", "Sequence, condition, boucle", "Input, traitement, output", "HTML, CSS, JavaScript"], correct: 1, explanation: "Tout programme est compose de sequences (instructions dans l'ordre), conditions (SI/SINON), et boucles (REPETER). Ces 3 structures suffisent a exprimer n'importe quel algorithme." }
                    ]
                }
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
                ],
                workshop: {
                    duration: "40 min",
                    difficulty: 1,
                    objectives: ["Comprendre la structure d'une page HTML", "Utiliser les balises principales", "Creer des liens et inserer des images"],
                    sections: [
                        { type: "theory", title: "HTML = la structure de la page", content: "HTML (HyperText Markup Language) est le langage qui structure le contenu d'une page web. Ce n'est pas un langage de programmation — c'est un langage de balisage.\n\nUne balise HTML encadre du contenu :\n- `<h1>Titre</h1>` — un titre\n- `<p>Texte</p>` — un paragraphe\n- `<a href=\"url\">Lien</a>` — un lien\n\nLes balises s'imbriquent comme des boites dans des boites." },
                        { type: "code", language: "html", code: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Ma page</title>\n</head>\n<body>\n    <h1>Bienvenue</h1>\n    <p>Ceci est mon premier paragraphe.</p>\n    <a href=\"https://example.com\">Un lien</a>\n    <img src=\"photo.jpg\" alt=\"Description\">\n</body>\n</html>", explanation: "Toute page HTML a cette structure : <!DOCTYPE html> declare le type, <head> contient les metadonnees, <body> contient le contenu visible." },
                        { type: "theory", title: "Les balises essentielles", content: "**Titres** : `<h1>` a `<h6>` (du plus grand au plus petit)\n**Texte** : `<p>` paragraphe, `<strong>` gras, `<em>` italique\n**Listes** : `<ul>` non ordonnee, `<ol>` ordonnee, `<li>` element\n**Liens** : `<a href=\"url\">texte</a>`\n**Images** : `<img src=\"chemin\" alt=\"description\">`\n**Conteneurs** : `<div>` bloc generique, `<span>` inline generique\n**Semantique** : `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`" },
                        { type: "info", variant: "tip", content: "L'attribut 'alt' sur les images est obligatoire pour l'accessibilite. Il decrit l'image pour les personnes qui ne peuvent pas la voir." },
                        { type: "exercise", title: "Cree une page de presentation", instructions: "Cree une page HTML avec : un titre h1 avec ton nom, un paragraphe de presentation, une liste de 3 hobbies, et un lien vers ton site prefere.", starterCode: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Ma page</title>\n</head>\n<body>\n    <!-- Ecris ton code ici -->\n</body>\n</html>", solution: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Ma page</title>\n</head>\n<body>\n    <h1>Jean Dupont</h1>\n    <p>Salut ! Je suis un apprenti developpeur passionne par le web et l'IA.</p>\n    <h2>Mes hobbies</h2>\n    <ul>\n        <li>Programmation</li>\n        <li>Jeux video</li>\n        <li>Randonnee</li>\n    </ul>\n    <a href=\"https://github.com\">Mon site prefere</a>\n</body>\n</html>", language: "html" },
                        { type: "quiz", question: "Quelle balise utilise-t-on pour creer un lien hypertexte ?", choices: ["<link>", "<a>", "<href>", "<url>"], correct: 1, explanation: "La balise <a> (pour 'anchor') cree un lien. L'attribut href contient l'URL de destination : <a href=\"url\">texte</a>." }
                    ]
                }
            },
            {
                id: "1-2",
                title: "HTML : Formulaires et tableaux",
                desc: "Creer des formulaires interactifs, des listes et des tableaux de donnees.",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Formulaires", url: "https://developer.mozilla.org/fr/docs/Learn/Forms" },
                    { label: "W3Schools Forms", url: "https://www.w3schools.com/html/html_forms.asp" }
                ],
                workshop: {
                    duration: "35 min",
                    difficulty: 1,
                    objectives: ["Creer un formulaire HTML complet", "Utiliser les differents types d'input", "Construire un tableau de donnees"],
                    sections: [
                        { type: "theory", title: "Les formulaires HTML", content: "Les formulaires permettent de collecter des donnees de l'utilisateur. Chaque formulaire est entoure de `<form>` et contient des champs de saisie.\n\nTypes d'input courants :\n- `text` : texte libre\n- `email` : adresse email (validation automatique)\n- `password` : mot de passe (masque)\n- `number` : nombre\n- `checkbox` : case a cocher\n- `radio` : choix unique parmi plusieurs\n- `submit` : bouton d'envoi" },
                        { type: "code", language: "html", code: "<form action=\"/inscription\" method=\"POST\">\n    <label for=\"nom\">Nom :</label>\n    <input type=\"text\" id=\"nom\" name=\"nom\" required>\n\n    <label for=\"email\">Email :</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n\n    <label for=\"age\">Age :</label>\n    <input type=\"number\" id=\"age\" name=\"age\" min=\"1\" max=\"120\">\n\n    <label>\n        <input type=\"checkbox\" name=\"newsletter\">\n        Recevoir la newsletter\n    </label>\n\n    <button type=\"submit\">S'inscrire</button>\n</form>", explanation: "L'attribut 'required' rend le champ obligatoire. 'for' et 'id' lient le label au champ. Le navigateur valide automatiquement les types email et number." },
                        { type: "theory", title: "Les tableaux HTML", content: "Les tableaux organisent les donnees en lignes et colonnes :\n- `<table>` : le tableau\n- `<thead>` : l'en-tete\n- `<tbody>` : le corps\n- `<tr>` : une ligne (table row)\n- `<th>` : une cellule d'en-tete\n- `<td>` : une cellule de donnees" },
                        { type: "code", language: "html", code: "<table>\n    <thead>\n        <tr>\n            <th>Langage</th>\n            <th>Usage</th>\n            <th>Difficulte</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Python</td>\n            <td>IA, scripts</td>\n            <td>Facile</td>\n        </tr>\n        <tr>\n            <td>JavaScript</td>\n            <td>Web</td>\n            <td>Moyen</td>\n        </tr>\n    </tbody>\n</table>", explanation: "Un tableau bien structure utilise thead et tbody pour separer l'en-tete du contenu." },
                        { type: "exercise", title: "Formulaire d'inscription", instructions: "Cree un formulaire d'inscription avec : nom, prenom, email, mot de passe, choix du langage prefere (radio: Python/JavaScript/Autre), et un bouton d'inscription.", starterCode: "<form>\n    <!-- Ecris ton formulaire ici -->\n</form>", solution: "<form action=\"/inscription\" method=\"POST\">\n    <label for=\"nom\">Nom :</label>\n    <input type=\"text\" id=\"nom\" name=\"nom\" required>\n\n    <label for=\"prenom\">Prenom :</label>\n    <input type=\"text\" id=\"prenom\" name=\"prenom\" required>\n\n    <label for=\"email\">Email :</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n\n    <label for=\"password\">Mot de passe :</label>\n    <input type=\"password\" id=\"password\" name=\"password\" required>\n\n    <p>Langage prefere :</p>\n    <label><input type=\"radio\" name=\"langage\" value=\"python\"> Python</label>\n    <label><input type=\"radio\" name=\"langage\" value=\"javascript\"> JavaScript</label>\n    <label><input type=\"radio\" name=\"langage\" value=\"autre\"> Autre</label>\n\n    <button type=\"submit\">S'inscrire</button>\n</form>", language: "html" },
                        { type: "quiz", question: "Quel attribut HTML rend un champ de formulaire obligatoire ?", choices: ["mandatory", "required", "necessary", "must"], correct: 1, explanation: "L'attribut 'required' empeche la soumission du formulaire si le champ est vide. Le navigateur affiche un message d'erreur automatiquement." }
                    ]
                }
            },
            {
                id: "1-3",
                title: "CSS : Les bases du style",
                desc: "Couleurs, polices, marges, padding, bordures — rendre ta page jolie.",
                tags: ["course", "practice"],
                links: [
                    { label: "freeCodeCamp CSS", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
                    { label: "CSS Tricks - Guide complet", url: "https://css-tricks.com/guides/" }
                ],
                workshop: {
                    duration: "40 min",
                    difficulty: 1,
                    objectives: ["Comprendre les selecteurs CSS", "Maitriser le box model", "Appliquer des couleurs, polices et espacements"],
                    sections: [
                        { type: "theory", title: "CSS = le style de la page", content: "CSS (Cascading Style Sheets) controle l'apparence de ta page HTML. HTML = structure, CSS = presentation.\n\nUne regle CSS a 3 parties :\n1. **Selecteur** : quel element cibler\n2. **Propriete** : quoi changer\n3. **Valeur** : comment le changer\n\n```\nselecteur {\n    propriete: valeur;\n}\n```" },
                        { type: "code", language: "css", code: "/* Selecteur d'element */\nh1 {\n    color: #3b82f6;\n    font-size: 2rem;\n}\n\n/* Selecteur de classe */\n.important {\n    font-weight: bold;\n    background-color: #fef3c7;\n    padding: 8px 16px;\n    border-radius: 8px;\n}\n\n/* Selecteur d'ID */\n#header {\n    background: #1a1a2e;\n    color: white;\n}", explanation: "Les selecteurs ciblent les elements HTML. '.' cible une classe (reutilisable), '#' cible un ID (unique)." },
                        { type: "theory", title: "Le Box Model", content: "Chaque element HTML est une boite avec 4 couches :\n\n1. **Content** : le contenu (texte, image)\n2. **Padding** : espace interieur (entre contenu et bordure)\n3. **Border** : la bordure\n4. **Margin** : espace exterieur (entre cet element et les autres)\n\nAstuce : `box-sizing: border-box` fait que la largeur inclut le padding et la bordure. Toujours l'utiliser !" },
                        { type: "code", language: "css", code: "/* Toujours mettre ca en premier */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.card {\n    width: 300px;\n    padding: 24px;        /* Espace interieur */\n    margin: 16px;         /* Espace exterieur */\n    border: 1px solid #ddd; /* Bordure */\n    border-radius: 12px;   /* Coins arrondis */\n    background: white;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* Ombre */\n}", explanation: "Ce reset CSS (l'etoile *) et box-sizing sont la premiere chose a ecrire dans tout projet." },
                        { type: "exercise", title: "Style une carte de profil", instructions: "Ecris le CSS pour styliser une carte de profil avec : fond blanc, ombre portee, coins arrondis, padding de 24px, texte centre, et le nom en bleu.", starterCode: ".profile-card {\n    /* Ecris ton CSS ici */\n}", solution: ".profile-card {\n    background: white;\n    box-shadow: 0 4px 16px rgba(0,0,0,0.1);\n    border-radius: 16px;\n    padding: 24px;\n    text-align: center;\n    max-width: 320px;\n}\n\n.profile-card h2 {\n    color: #3b82f6;\n    margin-bottom: 8px;\n}", language: "css" },
                        { type: "quiz", question: "Dans le box model, que represente le 'padding' ?", choices: ["L'espace entre les elements", "L'espace entre le contenu et la bordure", "La taille de la bordure", "La taille du contenu"], correct: 1, explanation: "Le padding est l'espace interieur, entre le contenu et la bordure. Le margin est l'espace exterieur, entre l'element et ses voisins." }
                    ]
                }
            },
            {
                id: "1-4",
                title: "CSS Flexbox",
                desc: "Le systeme de mise en page moderne. Indispensable pour aligner et distribuer les elements.",
                tags: ["course", "practice"],
                links: [
                    { label: "Flexbox Froggy (jeu)", url: "https://flexboxfroggy.com/" },
                    { label: "CSS Tricks Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
                ],
                workshop: {
                    duration: "45 min",
                    difficulty: 1,
                    objectives: ["Comprendre le concept de flex container et flex items", "Maitriser justify-content et align-items", "Creer des layouts courants avec Flexbox"],
                    sections: [
                        { type: "theory", title: "Flexbox : aligner facilement", content: "Flexbox est un systeme de layout unidimensionnel (ligne OU colonne). Il resout le probleme historique du centrage en CSS.\n\n2 concepts :\n- **Flex container** : l'element parent avec `display: flex`\n- **Flex items** : les enfants directs qui se disposent automatiquement\n\nProprietes du container :\n- `flex-direction` : row (ligne) ou column (colonne)\n- `justify-content` : alignement sur l'axe principal\n- `align-items` : alignement sur l'axe secondaire\n- `gap` : espace entre les items" },
                        { type: "code", language: "css", code: "/* Centrer un element (le Saint Graal du CSS) */\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n/* Navbar classique */\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px 32px;\n}\n\n/* Grille de cartes */\n.cards {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n}\n\n.card {\n    flex: 1 1 300px; /* grow, shrink, basis */\n}", explanation: "justify-content aligne sur l'axe principal (horizontal par defaut). align-items aligne sur l'axe croise (vertical par defaut). gap ajoute de l'espace entre les items." },
                        { type: "info", variant: "tip", content: "La combinaison magique pour centrer : display: flex + justify-content: center + align-items: center. Retiens-la par coeur !" },
                        { type: "exercise", title: "Cree une navbar avec Flexbox", instructions: "Ecris le CSS pour creer une navbar avec le logo a gauche et les liens a droite, centres verticalement, avec 16px d'espace entre les liens.", starterCode: ".navbar {\n    /* Container */\n}\n\n.nav-links {\n    /* Liens a droite */\n}", solution: ".navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px 32px;\n    background: #1a1a2e;\n    color: white;\n}\n\n.nav-links {\n    display: flex;\n    gap: 16px;\n    align-items: center;\n}", language: "css" },
                        { type: "quiz", question: "Quelle propriete CSS centre les elements horizontalement dans un flex container (direction: row) ?", choices: ["align-items: center", "text-align: center", "justify-content: center", "margin: auto"], correct: 2, explanation: "justify-content controle l'alignement sur l'axe principal. En flex-direction: row, l'axe principal est horizontal, donc justify-content: center centre horizontalement." }
                    ]
                }
            },
            {
                id: "1-5",
                title: "CSS Grid",
                desc: "Le deuxieme systeme de layout. Parfait pour les mises en page complexes.",
                tags: ["course", "practice"],
                links: [
                    { label: "Grid Garden (jeu)", url: "https://cssgridgarden.com/" },
                    { label: "CSS Tricks Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }
                ],
                workshop: {
                    duration: "40 min",
                    difficulty: 1,
                    objectives: ["Comprendre la difference entre Flexbox et Grid", "Creer des grilles avec grid-template", "Placer des elements dans une grille"],
                    sections: [
                        { type: "theory", title: "Grid = layout 2D", content: "CSS Grid est un systeme de layout bidimensionnel : il gere lignes ET colonnes en meme temps.\n\n**Flexbox** = 1D (ligne OU colonne)\n**Grid** = 2D (lignes ET colonnes)\n\nUtilise Flexbox pour aligner des elements dans une direction. Utilise Grid pour creer des mises en page complexes avec des zones definies." },
                        { type: "code", language: "css", code: "/* Grille simple : 3 colonnes egales */\n.grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n/* Grille responsive : colonnes auto-adaptatives */\n.grid-auto {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n}\n\n/* Layout de page complet */\n.page {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar main\"\n        \"footer footer\";\n    grid-template-columns: 250px 1fr;\n    min-height: 100vh;\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }", explanation: "'fr' signifie fraction de l'espace disponible. 'auto-fit' avec 'minmax' cree une grille responsive sans media queries !" },
                        { type: "info", variant: "tip", content: "La ligne magique pour une grille responsive : grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)). Elle cree autant de colonnes que possible avec un minimum de 300px chacune." },
                        { type: "exercise", title: "Cree un layout de dashboard", instructions: "Ecris le CSS Grid pour un layout avec : un header en haut (pleine largeur), une sidebar a gauche (250px), le contenu principal a droite, et un footer en bas (pleine largeur).", starterCode: ".dashboard {\n    display: grid;\n    /* Ecris tes proprietes grid ici */\n}", solution: ".dashboard {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar main\"\n        \"footer footer\";\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 60px 1fr 40px;\n    min-height: 100vh;\n    gap: 0;\n}", language: "css" },
                        { type: "quiz", question: "Que signifie '1fr' en CSS Grid ?", choices: ["1 pixel fixe", "1 fraction de l'espace disponible", "1 pourcent de la page", "1 frame d'animation"], correct: 1, explanation: "L'unite 'fr' represente une fraction de l'espace disponible. '1fr 2fr' divise l'espace en 3 parts : 1 pour la premiere colonne, 2 pour la deuxieme." }
                    ]
                }
            },
            {
                id: "1-6",
                title: "Responsive Design",
                desc: "Faire que ton site s'adapte a tous les ecrans (mobile, tablette, desktop).",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Responsive Design", url: "https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design" },
                    { label: "web.dev Responsive", url: "https://web.dev/learn/design/" }
                ],
                workshop: {
                    duration: "40 min",
                    difficulty: 2,
                    objectives: ["Comprendre le viewport et les media queries", "Adopter l'approche mobile-first", "Creer un layout qui s'adapte a toutes les tailles"],
                    sections: [
                        { type: "theory", title: "Responsive = s'adapter a l'ecran", content: "Un site responsive s'adapte automatiquement a la taille de l'ecran : mobile, tablette, desktop.\n\nLes outils :\n1. **Viewport meta tag** : dit au navigateur mobile de respecter la largeur\n2. **Media queries** : applique des styles selon la taille d'ecran\n3. **Unites relatives** : %, rem, vw/vh au lieu de px fixes\n4. **Flexbox/Grid** : layouts naturellement flexibles" },
                        { type: "code", language: "css", code: "/* Mobile first : styles de base pour mobile */\n.container {\n    padding: 16px;\n}\n\n.cards {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n}\n\n/* Tablette : a partir de 768px */\n@media (min-width: 768px) {\n    .container {\n        padding: 24px;\n        max-width: 768px;\n        margin: 0 auto;\n    }\n    .cards {\n        grid-template-columns: 1fr 1fr;\n    }\n}\n\n/* Desktop : a partir de 1024px */\n@media (min-width: 1024px) {\n    .container {\n        max-width: 1200px;\n    }\n    .cards {\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n}", explanation: "L'approche mobile-first : on ecrit d'abord les styles mobiles, puis on ajoute des regles pour les ecrans plus grands avec min-width." },
                        { type: "info", variant: "warning", content: "N'oublie jamais la meta viewport dans le HTML : <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">. Sans elle, le responsive ne fonctionne pas sur mobile." },
                        { type: "exercise", title: "Rends une grille responsive", instructions: "Ecris le CSS pour une grille de cartes qui affiche 1 colonne sur mobile, 2 sur tablette (768px+), et 3 sur desktop (1024px+).", starterCode: ".grid {\n    /* Mobile : 1 colonne */\n}\n\n/* Ajoute les media queries */", solution: ".grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 16px;\n}\n\n@media (min-width: 768px) {\n    .grid {\n        grid-template-columns: 1fr 1fr;\n        gap: 20px;\n    }\n}\n\n@media (min-width: 1024px) {\n    .grid {\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 24px;\n    }\n}", language: "css" },
                        { type: "quiz", question: "Quelle approche est recommandee pour le responsive design ?", choices: ["Desktop-first (ecrire pour desktop, adapter pour mobile)", "Mobile-first (ecrire pour mobile, adapter pour desktop)", "Ecrire un site separe pour chaque taille", "Ne pas s'en occuper"], correct: 1, explanation: "L'approche mobile-first est recommandee car elle force a se concentrer sur l'essentiel d'abord, puis a enrichir progressivement pour les grands ecrans." }
                    ]
                }
            },
            {
                id: "1-7",
                title: "PROJET : Creer ta page perso",
                desc: "Construis ta premiere page web complete — une page portfolio ou CV en ligne.",
                tags: ["project"],
                links: [
                    { label: "Frontend Mentor (designs)", url: "https://www.frontendmentor.io/challenges?type=free" },
                    { label: "Deployer sur GitHub Pages", url: "https://pages.github.com/" }
                ],
                workshop: {
                    duration: "60 min",
                    difficulty: 2,
                    objectives: ["Concevoir et coder une page web complete", "Combiner HTML et CSS pour un resultat professionnel", "Deployer la page en ligne"],
                    sections: [
                        { type: "theory", title: "Ton premier vrai projet", content: "C'est le moment de combiner tout ce que tu as appris ! Tu vas creer une page portfolio/CV avec :\n\n- Un header avec ton nom et une navigation\n- Une section 'A propos'\n- Une section 'Competences'\n- Une section 'Projets' (meme vide pour l'instant)\n- Un footer avec tes liens\n\nConseils :\n- Commence par le HTML complet, puis le CSS\n- Utilise Flexbox et Grid pour la mise en page\n- Rends-le responsive\n- Garde un design simple et propre" },
                        { type: "code", language: "html", code: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Mon Portfolio</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <nav class=\"navbar\">\n        <span class=\"logo\">Mon Nom</span>\n        <div class=\"nav-links\">\n            <a href=\"#about\">A propos</a>\n            <a href=\"#skills\">Competences</a>\n            <a href=\"#projects\">Projets</a>\n        </div>\n    </nav>\n\n    <header class=\"hero\">\n        <h1>Bonjour, je suis <span>Prenom</span></h1>\n        <p>Apprenti developpeur passione</p>\n    </header>\n\n    <section id=\"about\" class=\"section\">\n        <h2>A propos</h2>\n        <p>Ta description ici...</p>\n    </section>\n\n    <footer>\n        <p>&copy; 2024 Mon Nom</p>\n    </footer>\n</body>\n</html>", explanation: "C'est un squelette de depart. A toi de l'enrichir avec tes propres sections et ton propre style !" },
                        { type: "info", variant: "tip", content: "Pour deployer gratuitement : cree un repo GitHub nomme 'ton-username.github.io', pousse ton code, et ta page sera live a https://ton-username.github.io !" },
                        { type: "exercise", title: "Cree ta page", instructions: "En te basant sur le squelette ci-dessus, cree ta page portfolio complete. Ajoute au minimum : une section competences avec une grille, une section projets (meme avec des projets fictifs), et un style CSS complet. Rends le tout responsive.", starterCode: "<!-- Pars du squelette HTML ci-dessus\n     et enrichis-le avec ton contenu ! -->", solution: "/* Pas de solution unique — c'est ton projet creatif !\n   Criteres de reussite :\n   - Au moins 4 sections distinctes\n   - Utilisation de Flexbox OU Grid\n   - Responsive (fonctionne sur mobile)\n   - Un style coherent et propre\n   - Deploye sur GitHub Pages */", language: "text" }
                    ]
                }
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
                ],
                workshop: {
                    duration: "40 min",
                    difficulty: 1,
                    objectives: ["Declarer des variables avec let et const", "Connaitre les types primitifs", "Utiliser les operateurs de base"],
                    sections: [
                        { type: "theory", title: "Variables : stocker des donnees", content: "Une variable est une boite avec un nom qui contient une valeur.\n\n- `let` : variable qui peut changer\n- `const` : constante, ne peut pas etre reassignee\n- `var` : ancien mot-cle, a eviter\n\nRegle : utilise `const` par defaut, `let` uniquement quand la valeur doit changer." },
                        { type: "code", language: "javascript", code: "// Declarer des variables\nconst nom = \"Alice\";\nlet age = 25;\nlet estEtudiant = true;\n\n// Types primitifs\nconsole.log(typeof nom);          // \"string\"\nconsole.log(typeof age);          // \"number\"\nconsole.log(typeof estEtudiant);  // \"boolean\"\nconsole.log(typeof undefined);    // \"undefined\"\nconsole.log(typeof null);         // \"object\" (bug historique !)\n\n// Operateurs\nlet somme = 10 + 5;      // 15\nlet texte = \"Bonjour\" + \" \" + nom; // \"Bonjour Alice\"\nlet egal = (5 === \"5\");   // false (comparaison stricte)\nlet egalLax = (5 == \"5\"); // true (a eviter !)", explanation: "Toujours utiliser === (triple egal) pour les comparaisons, jamais == qui fait des conversions implicites dangereuses." },
                        { type: "info", variant: "warning", content: "Utilise toujours === et !== pour les comparaisons. L'operateur == fait des conversions implicites : 0 == '' est true, ce qui est piege courant." },
                        { type: "exercise", title: "Manipule des variables", instructions: "Declare les variables suivantes : ton prenom (const), ton age (let), si tu aimes coder (const boolean). Puis affiche une phrase complete avec ces variables en utilisant un template literal.", starterCode: "// Declare tes variables ici\n\n// Affiche une phrase avec console.log()", solution: "const prenom = \"Jean\";\nlet age = 22;\nconst aimeCoder = true;\n\nconsole.log(`Je m'appelle ${prenom}, j'ai ${age} ans, et j'aime coder : ${aimeCoder}`);", language: "javascript" },
                        { type: "quiz", question: "Quelle est la difference entre let et const ?", choices: ["let est pour les nombres, const pour les textes", "let peut etre reassigne, const non", "const est plus rapide que let", "Il n'y a aucune difference"], correct: 1, explanation: "const cree une liaison constante : on ne peut pas reassigner la variable (const x = 1; x = 2 → erreur). let permet la reassignation." }
                    ]
                }
            },
            {
                id: "2-2",
                title: "Conditions et boucles",
                desc: "if/else, switch, for, while — controler le flux de ton programme.",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Control Flow", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" },
                    { label: "Exercism JavaScript", url: "https://exercism.org/tracks/javascript" }
                ],
                workshop: {
                    duration: "40 min",
                    difficulty: 1,
                    objectives: ["Ecrire des conditions if/else", "Utiliser les boucles for et while", "Combiner conditions et boucles"],
                    sections: [
                        { type: "theory", title: "Conditions : prendre des decisions", content: "Les conditions permettent d'executer du code seulement si une condition est vraie.\n\n```\nif (condition) {\n    // si vrai\n} else if (autreCondition) {\n    // si la deuxieme est vraie\n} else {\n    // sinon\n}\n```\n\nValeurs 'falsy' en JS : `false`, `0`, `\"\"`, `null`, `undefined`, `NaN`. Tout le reste est 'truthy'." },
                        { type: "code", language: "javascript", code: "// Conditions\nconst age = 17;\n\nif (age >= 18) {\n    console.log(\"Majeur\");\n} else if (age >= 16) {\n    console.log(\"Presque majeur\");\n} else {\n    console.log(\"Mineur\");\n}\n\n// Operateur ternaire (raccourci)\nconst statut = age >= 18 ? \"majeur\" : \"mineur\";\n\n// Boucle for\nfor (let i = 0; i < 5; i++) {\n    console.log(`Tour ${i}`);\n}\n\n// Boucle while\nlet compteur = 0;\nwhile (compteur < 3) {\n    console.log(`Compteur : ${compteur}`);\n    compteur++;\n}", explanation: "La boucle for est parfaite quand on sait combien de tours on veut. La boucle while est pour quand on ne sait pas a l'avance." },
                        { type: "exercise", title: "FizzBuzz", instructions: "Ecris un programme qui affiche les nombres de 1 a 20. Mais : si le nombre est divisible par 3, affiche 'Fizz'. Si divisible par 5, affiche 'Buzz'. Si divisible par les deux, affiche 'FizzBuzz'.", starterCode: "for (let i = 1; i <= 20; i++) {\n    // Ecris ta logique ici\n}", solution: "for (let i = 1; i <= 20; i++) {\n    if (i % 3 === 0 && i % 5 === 0) {\n        console.log(\"FizzBuzz\");\n    } else if (i % 3 === 0) {\n        console.log(\"Fizz\");\n    } else if (i % 5 === 0) {\n        console.log(\"Buzz\");\n    } else {\n        console.log(i);\n    }\n}", language: "javascript" },
                        { type: "quiz", question: "Combien de fois la boucle 'for (let i = 0; i < 5; i++)' s'execute-t-elle ?", choices: ["4 fois", "5 fois", "6 fois", "Indefiniment"], correct: 1, explanation: "i commence a 0 et va jusqu'a 4 (car i < 5, pas i <= 5). Donc : 0, 1, 2, 3, 4 = 5 iterations." }
                    ]
                }
            },
            {
                id: "2-3",
                title: "Fonctions",
                desc: "Creer des blocs de code reutilisables. Le concept le plus important en programmation.",
                tags: ["course", "practice"],
                links: [
                    { label: "javascript.info Fonctions", url: "https://fr.javascript.info/function-basics" },
                    { label: "Codewars (exercices)", url: "https://www.codewars.com/" }
                ],
                workshop: {
                    duration: "45 min",
                    difficulty: 1,
                    objectives: ["Declarer et appeler des fonctions", "Comprendre les parametres et le return", "Utiliser les arrow functions"],
                    sections: [
                        { type: "theory", title: "Fonctions : du code reutilisable", content: "Une fonction est un bloc de code nomme que tu peux appeler autant de fois que tu veux. C'est le concept le plus important en programmation.\n\n3 facons de declarer une fonction en JS :\n1. Declaration classique : `function nom() {}`\n2. Expression : `const nom = function() {}`\n3. Arrow function : `const nom = () => {}`" },
                        { type: "code", language: "javascript", code: "// Declaration classique\nfunction saluer(prenom) {\n    return `Bonjour ${prenom} !`;\n}\n\n// Arrow function (moderne)\nconst multiplier = (a, b) => a * b;\n\n// Fonction avec valeur par defaut\nconst direBonjour = (nom = \"Monde\") => {\n    console.log(`Bonjour ${nom} !`);\n};\n\n// Utilisation\nconsole.log(saluer(\"Alice\")); // \"Bonjour Alice !\"\nconsole.log(multiplier(3, 4)); // 12\ndireBonjour();          // \"Bonjour Monde !\"\ndireBonjour(\"Bob\");     // \"Bonjour Bob !\"", explanation: "Les arrow functions sont plus concises. Si le corps fait une seule expression, les accolades et le return sont implicites." },
                        { type: "exercise", title: "Ecris des fonctions utilitaires", instructions: "Cree 3 fonctions :\n1. `estPair(n)` qui retourne true si n est pair\n2. `crier(texte)` qui retourne le texte en majuscules avec '!!!' a la fin\n3. `tronquer(texte, max)` qui coupe le texte a 'max' caracteres et ajoute '...' si necessaire", starterCode: "const estPair = (n) => {\n    // ...\n};\n\nconst crier = (texte) => {\n    // ...\n};\n\nconst tronquer = (texte, max) => {\n    // ...\n};", solution: "const estPair = (n) => n % 2 === 0;\n\nconst crier = (texte) => texte.toUpperCase() + \"!!!\";\n\nconst tronquer = (texte, max) => {\n    if (texte.length <= max) return texte;\n    return texte.slice(0, max) + \"...\";\n};", language: "javascript" },
                        { type: "quiz", question: "Que retourne une fonction sans instruction 'return' ?", choices: ["null", "0", "undefined", "Une erreur"], correct: 2, explanation: "En JavaScript, une fonction sans return explicite retourne undefined. C'est la valeur par defaut." }
                    ]
                }
            },
            {
                id: "2-4",
                title: "Tableaux et Objets",
                desc: "Stocker et manipuler des collections de donnees — map, filter, reduce.",
                tags: ["course", "practice"],
                links: [
                    { label: "javascript.info Arrays", url: "https://fr.javascript.info/array" },
                    { label: "javascript.info Objects", url: "https://fr.javascript.info/object" }
                ],
                workshop: {
                    duration: "45 min",
                    difficulty: 2,
                    objectives: ["Manipuler des tableaux avec les methodes modernes", "Creer et utiliser des objets", "Maitriser map, filter et reduce"],
                    sections: [
                        { type: "theory", title: "Tableaux : collections ordonnees", content: "Un tableau (array) stocke une liste ordonnee de valeurs.\n\nMethodes essentielles :\n- `push()` / `pop()` : ajouter/retirer a la fin\n- `map()` : transformer chaque element\n- `filter()` : garder les elements qui passent un test\n- `find()` : trouver le premier element qui matche\n- `reduce()` : reduire le tableau a une seule valeur\n- `forEach()` : executer une action pour chaque element" },
                        { type: "code", language: "javascript", code: "const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// map : transformer\nconst doubles = nombres.map(n => n * 2);\n// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n\n// filter : filtrer\nconst pairs = nombres.filter(n => n % 2 === 0);\n// [2, 4, 6, 8, 10]\n\n// reduce : accumuler\nconst somme = nombres.reduce((acc, n) => acc + n, 0);\n// 55\n\n// Chainage\nconst resultat = nombres\n    .filter(n => n % 2 === 0)  // pairs\n    .map(n => n * 10)          // x10\n    .reduce((acc, n) => acc + n, 0); // somme\n// 300", explanation: "Le chainage de methodes est un pattern tres courant en JS. Chaque methode retourne un nouveau tableau, ce qui permet de les enchainer." },
                        { type: "theory", title: "Objets : collections nommees", content: "Un objet stocke des donnees sous forme cle-valeur.\n\n```javascript\nconst personne = {\n    nom: \"Alice\",\n    age: 25,\n    langages: [\"Python\", \"JavaScript\"],\n    saluer() {\n        return `Salut, je suis ${this.nom}`;\n    }\n};\n\nconsole.log(personne.nom);    // \"Alice\"\nconsole.log(personne[\"age\"]); // 25\n```\n\nLa destructuration permet d'extraire des proprietes facilement :\n```javascript\nconst { nom, age } = personne;\n```" },
                        { type: "exercise", title: "Manipule un tableau d'objets", instructions: "Tu as un tableau de produits. Ecris le code pour :\n1. Filtrer les produits de moins de 50 euros\n2. Calculer le prix total de tous les produits\n3. Trouver le produit le plus cher", starterCode: "const produits = [\n    { nom: \"Clavier\", prix: 45 },\n    { nom: \"Souris\", prix: 25 },\n    { nom: \"Ecran\", prix: 300 },\n    { nom: \"Webcam\", prix: 60 },\n    { nom: \"Casque\", prix: 80 }\n];\n\n// 1. Produits < 50 euros\n\n// 2. Prix total\n\n// 3. Produit le plus cher", solution: "const produits = [\n    { nom: \"Clavier\", prix: 45 },\n    { nom: \"Souris\", prix: 25 },\n    { nom: \"Ecran\", prix: 300 },\n    { nom: \"Webcam\", prix: 60 },\n    { nom: \"Casque\", prix: 80 }\n];\n\nconst pasChers = produits.filter(p => p.prix < 50);\nconst total = produits.reduce((acc, p) => acc + p.prix, 0);\nconst plusCher = produits.reduce((max, p) => p.prix > max.prix ? p : max);", language: "javascript" },
                        { type: "quiz", question: "Que fait la methode filter() ?", choices: ["Elle modifie le tableau original", "Elle retourne un nouveau tableau avec les elements qui passent le test", "Elle retourne le premier element trouve", "Elle trie le tableau"], correct: 1, explanation: "filter() cree un NOUVEAU tableau contenant uniquement les elements pour lesquels la fonction de callback retourne true. Le tableau original n'est pas modifie." }
                    ]
                }
            },
            {
                id: "2-5",
                title: "Le DOM : manipuler la page",
                desc: "Selectionner, modifier, creer des elements HTML depuis JavaScript.",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Introduction au DOM", url: "https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction" },
                    { label: "javascript.info DOM", url: "https://fr.javascript.info/document" }
                ],
                workshop: {
                    duration: "45 min",
                    difficulty: 2,
                    objectives: ["Selectionner des elements du DOM", "Modifier le contenu et le style", "Creer et supprimer des elements dynamiquement"],
                    sections: [
                        { type: "theory", title: "Le DOM : la page en memoire", content: "Le DOM (Document Object Model) est la representation en memoire de ta page HTML. JavaScript peut le lire et le modifier en temps reel.\n\nSelectionner des elements :\n- `document.getElementById('id')` : par ID\n- `document.querySelector('.class')` : premier match CSS\n- `document.querySelectorAll('div')` : tous les matchs" },
                        { type: "code", language: "javascript", code: "// Selectionner\nconst titre = document.querySelector('h1');\nconst boutons = document.querySelectorAll('.btn');\n\n// Modifier le contenu\ntitre.textContent = 'Nouveau titre';\ntitre.innerHTML = 'Titre <em>en italique</em>';\n\n// Modifier le style\ntitre.style.color = '#3b82f6';\ntitre.style.fontSize = '2rem';\n\n// Ajouter/retirer des classes\ntitre.classList.add('active');\ntitre.classList.remove('hidden');\ntitre.classList.toggle('visible');\n\n// Creer un element\nconst p = document.createElement('p');\np.textContent = 'Paragraphe cree par JS';\ndocument.body.appendChild(p);\n\n// Supprimer un element\np.remove();", explanation: "querySelector utilise la meme syntaxe que les selecteurs CSS. C'est la methode la plus versatile." },
                        { type: "exercise", title: "Manipule le DOM", instructions: "Ecris un script qui :\n1. Selectionne tous les elements avec la classe 'item'\n2. Change leur couleur de fond en bleu clair\n3. Ajoute un nouveau paragraphe a la fin du body avec le texte 'Ajoute par JavaScript'", starterCode: "// 1. Selectionner les items\n\n// 2. Changer la couleur de fond\n\n// 3. Ajouter un paragraphe", solution: "const items = document.querySelectorAll('.item');\n\nitems.forEach(item => {\n    item.style.backgroundColor = '#dbeafe';\n});\n\nconst p = document.createElement('p');\np.textContent = 'Ajoute par JavaScript';\ndocument.body.appendChild(p);", language: "javascript" },
                        { type: "quiz", question: "Quelle est la difference entre textContent et innerHTML ?", choices: ["Il n'y a pas de difference", "textContent est plus rapide et plus sur, innerHTML peut injecter du HTML", "innerHTML est plus rapide", "textContent peut injecter du HTML"], correct: 1, explanation: "textContent insere du texte brut (securise). innerHTML parse et insere du HTML, ce qui peut etre un risque de securite (XSS) si le contenu vient d'un utilisateur." }
                    ]
                }
            },
            {
                id: "2-6",
                title: "Evenements et interactivite",
                desc: "Click, survol, clavier — reagir aux actions de l'utilisateur.",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Events", url: "https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/Events" },
                    { label: "javascript.info Events", url: "https://fr.javascript.info/events" }
                ],
                workshop: {
                    duration: "40 min",
                    difficulty: 2,
                    objectives: ["Ecouter et reagir aux evenements", "Comprendre la propagation des evenements", "Creer des interactions utilisateur fluides"],
                    sections: [
                        { type: "theory", title: "Les evenements", content: "Les evenements permettent a ton code de reagir aux actions de l'utilisateur.\n\nEvenements courants :\n- `click` : clic de souris\n- `input` : saisie dans un champ\n- `submit` : soumission de formulaire\n- `keydown` / `keyup` : touche clavier\n- `mouseover` / `mouseout` : survol\n- `scroll` : defilement\n- `load` : chargement complete de la page" },
                        { type: "code", language: "javascript", code: "// Ecouter un click\nconst bouton = document.querySelector('#monBouton');\nbouton.addEventListener('click', (event) => {\n    console.log('Bouton clique !', event);\n});\n\n// Ecouter la saisie dans un champ\nconst input = document.querySelector('#recherche');\ninput.addEventListener('input', (e) => {\n    console.log('Valeur :', e.target.value);\n});\n\n// Empecher le comportement par defaut\nconst form = document.querySelector('form');\nform.addEventListener('submit', (e) => {\n    e.preventDefault(); // Empeche le rechargement\n    const data = new FormData(form);\n    console.log('Formulaire soumis :', Object.fromEntries(data));\n});", explanation: "addEventListener est la methode moderne. e.preventDefault() empeche le comportement par defaut (ex: empecher un formulaire de recharger la page)." },
                        { type: "exercise", title: "Compteur interactif", instructions: "Cree un compteur avec 3 boutons : +1, -1, et Reset. Affiche la valeur dans un element. Le compteur ne peut pas descendre en dessous de 0.", starterCode: "// HTML : <span id=\"count\">0</span>\n// <button id=\"plus\">+1</button>\n// <button id=\"minus\">-1</button>\n// <button id=\"reset\">Reset</button>\n\nlet count = 0;\nconst display = document.querySelector('#count');\n\n// Ajoute les event listeners", solution: "let count = 0;\nconst display = document.querySelector('#count');\n\ndocument.querySelector('#plus').addEventListener('click', () => {\n    count++;\n    display.textContent = count;\n});\n\ndocument.querySelector('#minus').addEventListener('click', () => {\n    if (count > 0) count--;\n    display.textContent = count;\n});\n\ndocument.querySelector('#reset').addEventListener('click', () => {\n    count = 0;\n    display.textContent = count;\n});", language: "javascript" },
                        { type: "quiz", question: "A quoi sert e.preventDefault() ?", choices: ["A supprimer l'element clique", "A empecher le comportement par defaut du navigateur", "A arreter la propagation de l'evenement", "A deconnecter l'event listener"], correct: 1, explanation: "preventDefault() empeche le comportement par defaut : un formulaire ne recharge pas la page, un lien ne navigue pas, etc." }
                    ]
                }
            },
            {
                id: "2-7",
                title: "LocalStorage et JSON",
                desc: "Sauvegarder des donnees dans le navigateur. C'est ce que ce site utilise pour ta progression !",
                tags: ["course", "practice"],
                links: [
                    { label: "MDN Web Storage", url: "https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API" },
                    { label: "javascript.info JSON", url: "https://fr.javascript.info/json" }
                ],
                workshop: {
                    duration: "35 min",
                    difficulty: 2,
                    objectives: ["Comprendre JSON et sa syntaxe", "Utiliser localStorage pour persister des donnees", "Serialiser et deserialiser des objets"],
                    sections: [
                        { type: "theory", title: "JSON : le format universel", content: "JSON (JavaScript Object Notation) est le format standard pour echanger des donnees. Il ressemble aux objets JS mais avec quelques differences :\n\n- Les cles DOIVENT etre entre guillemets doubles\n- Pas de fonctions, pas de commentaires\n- Pas de virgule apres le dernier element\n\n`JSON.stringify(obj)` : objet → texte JSON\n`JSON.parse(texte)` : texte JSON → objet" },
                        { type: "code", language: "javascript", code: "// JSON.stringify : objet → texte\nconst user = { nom: \"Alice\", age: 25, langages: [\"JS\", \"Python\"] };\nconst json = JSON.stringify(user);\n// '{\"nom\":\"Alice\",\"age\":25,\"langages\":[\"JS\",\"Python\"]}'\n\n// JSON.parse : texte → objet\nconst parsed = JSON.parse(json);\nconsole.log(parsed.nom); // \"Alice\"\n\n// localStorage : persister dans le navigateur\nlocalStorage.setItem('user', JSON.stringify(user));\n\n// Recuperer plus tard (meme apres refresh)\nconst savedUser = JSON.parse(localStorage.getItem('user'));\nconsole.log(savedUser.nom); // \"Alice\"\n\n// Supprimer\nlocalStorage.removeItem('user');\nlocalStorage.clear(); // tout vider", explanation: "localStorage persiste meme apres fermeture du navigateur. Limite : ~5 Mo par domaine, et ne stocke que des strings (d'ou JSON.stringify)." },
                        { type: "info", variant: "tip", content: "Ce site (DevAI Academy) utilise exactement ce mecanisme pour sauvegarder ta progression ! Regarde dans les DevTools > Application > Local Storage." },
                        { type: "exercise", title: "Cree un systeme de notes", instructions: "Ecris les fonctions pour un systeme de notes qui persiste dans localStorage :\n1. `sauverNote(titre, contenu)` — sauvegarde une note\n2. `chargerNotes()` — retourne toutes les notes\n3. `supprimerNote(titre)` — supprime une note par son titre", starterCode: "function sauverNote(titre, contenu) {\n    // ...\n}\n\nfunction chargerNotes() {\n    // ...\n}\n\nfunction supprimerNote(titre) {\n    // ...\n}", solution: "function sauverNote(titre, contenu) {\n    const notes = chargerNotes();\n    notes.push({ titre, contenu, date: new Date().toISOString() });\n    localStorage.setItem('notes', JSON.stringify(notes));\n}\n\nfunction chargerNotes() {\n    const data = localStorage.getItem('notes');\n    return data ? JSON.parse(data) : [];\n}\n\nfunction supprimerNote(titre) {\n    const notes = chargerNotes().filter(n => n.titre !== titre);\n    localStorage.setItem('notes', JSON.stringify(notes));\n}", language: "javascript" },
                        { type: "quiz", question: "Pourquoi doit-on utiliser JSON.stringify avant de stocker dans localStorage ?", choices: ["Pour compresser les donnees", "Parce que localStorage ne stocke que des strings", "Pour securiser les donnees", "Ce n'est pas necessaire"], correct: 1, explanation: "localStorage ne stocke que des chaines de caracteres. Pour stocker un objet ou un tableau, il faut d'abord le convertir en string avec JSON.stringify, puis le reconvertir avec JSON.parse a la lecture." }
                    ]
                }
            },
            {
                id: "2-8",
                title: "Async : Promises et Fetch",
                desc: "Appeler des APIs, attendre des reponses — la programmation asynchrone.",
                tags: ["course", "article"],
                links: [
                    { label: "javascript.info Promises", url: "https://fr.javascript.info/promise-basics" },
                    { label: "MDN Fetch API", url: "https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch" }
                ],
                workshop: {
                    duration: "45 min",
                    difficulty: 2,
                    objectives: ["Comprendre l'asynchrone en JavaScript", "Utiliser async/await", "Appeler une API avec fetch"],
                    sections: [
                        { type: "theory", title: "Pourquoi l'asynchrone ?", content: "JavaScript est mono-thread : il ne peut faire qu'une chose a la fois. Les operations lentes (reseau, fichiers) bloqueraient tout !\n\nLa solution : les **Promises** — des operations qui se resolvent plus tard.\n\n- `async` : declare une fonction asynchrone\n- `await` : attend le resultat d'une Promise\n- `try/catch` : gere les erreurs asynchrones" },
                        { type: "code", language: "javascript", code: "// Appeler une API avec fetch + async/await\nasync function getUser(id) {\n    try {\n        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);\n\n        if (!response.ok) {\n            throw new Error(`Erreur HTTP : ${response.status}`);\n        }\n\n        const user = await response.json();\n        console.log(user.name); // \"Leanne Graham\"\n        return user;\n    } catch (error) {\n        console.error('Erreur :', error.message);\n    }\n}\n\n// Appel\ngetUser(1);\n\n// Plusieurs requetes en parallele\nconst [user1, user2] = await Promise.all([\n    fetch('/api/users/1').then(r => r.json()),\n    fetch('/api/users/2').then(r => r.json())\n]);", explanation: "await met en pause la fonction (pas le thread !) jusqu'a ce que la Promise se resolve. C'est la facon moderne de gerer l'asynchrone en JS." },
                        { type: "info", variant: "warning", content: "N'oublie jamais le try/catch avec fetch ! Une requete reseau peut echouer (pas de connexion, serveur down, etc.). Gerer les erreurs est obligatoire." },
                        { type: "exercise", title: "Appelle une API", instructions: "Ecris une fonction async qui recupere la liste des posts depuis 'https://jsonplaceholder.typicode.com/posts', filtre ceux de l'utilisateur 1, et retourne leurs titres.", starterCode: "async function getPostsUser1() {\n    // 1. Fetch les posts\n    // 2. Filtrer userId === 1\n    // 3. Retourner les titres\n}", solution: "async function getPostsUser1() {\n    try {\n        const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n        const posts = await response.json();\n        return posts\n            .filter(post => post.userId === 1)\n            .map(post => post.title);\n    } catch (error) {\n        console.error('Erreur :', error.message);\n        return [];\n    }\n}", language: "javascript" },
                        { type: "quiz", question: "Que fait le mot-cle 'await' ?", choices: ["Il arrete completement le programme", "Il met en pause la fonction async jusqu'a ce que la Promise se resolve", "Il cree une nouvelle Promise", "Il lance une requete HTTP"], correct: 1, explanation: "await met en pause uniquement la fonction async dans laquelle il se trouve, pas tout le programme. Le reste du code continue de s'executer." }
                    ]
                }
            },
            {
                id: "2-9",
                title: "PROJET : App Todo List interactive",
                desc: "Construis une app complete avec ajout, suppression, sauvegarde locale — ton premier vrai projet JS.",
                tags: ["project"],
                links: [
                    { label: "Tutoriel Todo App", url: "https://www.youtube.com/results?search_query=todo+app+javascript+tutorial" }
                ],
                workshop: {
                    duration: "60 min",
                    difficulty: 2,
                    objectives: ["Combiner DOM, evenements et localStorage", "Creer une interface interactive complete", "Gerer l'etat d'une application"],
                    sections: [
                        { type: "theory", title: "Architecture d'une Todo App", content: "Ce projet combine tout ce que tu as appris :\n- **HTML** : structure de l'interface\n- **CSS** : design et animations\n- **JS DOM** : afficher les taches dynamiquement\n- **Events** : ajouter, cocher, supprimer\n- **localStorage** : persister les donnees\n\nApproche :\n1. Definis la structure de donnees (tableau d'objets)\n2. Cree les fonctions de rendu\n3. Ajoute les event listeners\n4. Connecte au localStorage" },
                        { type: "code", language: "javascript", code: "// Structure de donnees\nlet todos = JSON.parse(localStorage.getItem('todos')) || [];\n\nfunction saveTodos() {\n    localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nfunction addTodo(text) {\n    todos.push({ id: Date.now(), text, done: false });\n    saveTodos();\n    renderTodos();\n}\n\nfunction toggleTodo(id) {\n    const todo = todos.find(t => t.id === id);\n    if (todo) todo.done = !todo.done;\n    saveTodos();\n    renderTodos();\n}\n\nfunction deleteTodo(id) {\n    todos = todos.filter(t => t.id !== id);\n    saveTodos();\n    renderTodos();\n}\n\nfunction renderTodos() {\n    const list = document.getElementById('todoList');\n    list.innerHTML = todos.map(t => `\n        <li class=\"${t.done ? 'done' : ''}\">\n            <span onclick=\"toggleTodo(${t.id})\">${t.text}</span>\n            <button onclick=\"deleteTodo(${t.id})\">X</button>\n        </li>\n    `).join('');\n}", explanation: "Le pattern CRUD (Create, Read, Update, Delete) est la base de presque toute application. Ici tu l'implementes entierement cote client." },
                        { type: "exercise", title: "Ameliore la Todo App", instructions: "En partant du code ci-dessus, ajoute :\n1. Un compteur qui affiche 'X taches restantes'\n2. Un bouton 'Tout supprimer' pour vider la liste\n3. Un filtre pour afficher toutes / actives / terminees", starterCode: "// Ajoute les fonctions manquantes\n\nfunction getRemaining() {\n    // Retourne le nombre de taches non terminees\n}\n\nfunction clearAll() {\n    // Supprime toutes les taches\n}\n\nfunction filterTodos(filter) {\n    // 'all', 'active', 'done'\n}", solution: "function getRemaining() {\n    return todos.filter(t => !t.done).length;\n}\n\nfunction clearAll() {\n    todos = [];\n    saveTodos();\n    renderTodos();\n}\n\nfunction filterTodos(filter) {\n    const list = document.getElementById('todoList');\n    let filtered = todos;\n    if (filter === 'active') filtered = todos.filter(t => !t.done);\n    if (filter === 'done') filtered = todos.filter(t => t.done);\n    list.innerHTML = filtered.map(t => `\n        <li class=\"${t.done ? 'done' : ''}\">\n            <span onclick=\"toggleTodo(${t.id})\">${t.text}</span>\n            <button onclick=\"deleteTodo(${t.id})\">X</button>\n        </li>\n    `).join('');\n}", language: "javascript" }
                    ]
                }
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
            { id: "3-1", title: "Python : premiers pas", desc: "Installer Python, variables, types, print() — tes premieres lignes de code Python.", tags: ["course", "practice"], links: [{ label: "Python.org Tutorial", url: "https://docs.python.org/fr/3/tutorial/" }, { label: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" }],
                workshop: {
                    duration: "40 min", difficulty: 1,
                    objectives: ["Installer Python et executer du code", "Declarer des variables et utiliser les types de base", "Utiliser print() et input()"],
                    sections: [
                        { type: "theory", title: "Pourquoi Python ?", content: "Python est le langage le plus populaire pour l'IA, la data science et l'automatisation. Sa syntaxe est lisible et proche de l'anglais.\n\nPour l'installer :\n1. Va sur python.org\n2. Telecharge Python 3.x\n3. Coche 'Add to PATH' pendant l'installation\n4. Verifie avec `python --version` dans le terminal" },
                        { type: "code", language: "python", code: "# Variables et types\nnom = \"Alice\"        # str (chaine)\nage = 25             # int (entier)\ntaille = 1.72        # float (decimal)\nest_dev = True       # bool (booleen)\n\n# Afficher\nprint(f\"Je suis {nom}, j'ai {age} ans\")\n\n# Demander a l'utilisateur\nprenom = input(\"Ton prenom ? \")\nprint(f\"Salut {prenom} !\")\n\n# Conversions de types\nnombre = int(\"42\")      # str → int\ntexte = str(42)         # int → str\ndecimal = float(\"3.14\") # str → float", explanation: "Python utilise l'indentation (espaces) au lieu des accolades. Les f-strings (f\"...\") permettent d'inserer des variables dans du texte." },
                        { type: "info", variant: "tip", content: "En Python, pas besoin de declarer le type d'une variable. Python le deduit automatiquement. C'est du 'typage dynamique'." },
                        { type: "exercise", title: "Calculateur d'age", instructions: "Ecris un programme Python qui demande le prenom et l'annee de naissance de l'utilisateur, puis affiche son age approximatif.", starterCode: "# Demande les infos\nprenom = input(\"Ton prenom ? \")\n# ...\n\n# Calcule et affiche l'age", solution: "prenom = input(\"Ton prenom ? \")\nannee = int(input(\"Ton annee de naissance ? \"))\nage = 2026 - annee\nprint(f\"{prenom}, tu as environ {age} ans !\")", language: "python" },
                        { type: "quiz", question: "Quel est le type de la valeur 3.14 en Python ?", choices: ["int", "str", "float", "decimal"], correct: 2, explanation: "Les nombres a virgule sont de type float en Python. int est pour les entiers, str pour les chaines de caracteres." }
                    ]
                }
            },
            { id: "3-2", title: "Conditions, boucles, fonctions", desc: "if/elif/else, for, while, def — le controle de flux en Python.", tags: ["course", "practice"], links: [{ label: "Exercism Python", url: "https://exercism.org/tracks/python" }, { label: "Kaggle Learn Python", url: "https://www.kaggle.com/learn/python" }],
                workshop: {
                    duration: "45 min", difficulty: 1,
                    objectives: ["Ecrire des conditions if/elif/else", "Utiliser les boucles for et while", "Definir et appeler des fonctions"],
                    sections: [
                        { type: "theory", title: "Conditions et boucles en Python", content: "Python utilise l'indentation (4 espaces) pour delimiter les blocs de code — pas d'accolades !\n\nConditions :\n```python\nif condition:\n    ...\nelif autre:\n    ...\nelse:\n    ...\n```\n\nBoucles :\n```python\nfor element in liste:\n    ...\n\nwhile condition:\n    ...\n```" },
                        { type: "code", language: "python", code: "# Conditions\nnote = 15\nif note >= 16:\n    print(\"Tres bien\")\nelif note >= 12:\n    print(\"Bien\")\nelse:\n    print(\"Peut mieux faire\")\n\n# Boucle for avec range\nfor i in range(5):  # 0, 1, 2, 3, 4\n    print(f\"Tour {i}\")\n\n# Boucle sur une liste\nfruits = [\"pomme\", \"banane\", \"cerise\"]\nfor fruit in fruits:\n    print(fruit)\n\n# Fonctions\ndef saluer(nom, enthousiaste=False):\n    if enthousiaste:\n        return f\"SALUT {nom.upper()} !!!\"\n    return f\"Bonjour {nom}\"\n\nprint(saluer(\"Alice\"))              # Bonjour Alice\nprint(saluer(\"Bob\", enthousiaste=True))  # SALUT BOB !!!", explanation: "En Python, l'indentation N'EST PAS optionnelle. Elle definit la structure du code. Utilise toujours 4 espaces." },
                        { type: "exercise", title: "FizzBuzz en Python", instructions: "Ecris la fonction fizzbuzz(n) qui retourne 'Fizz' si n est divisible par 3, 'Buzz' si par 5, 'FizzBuzz' si par les deux, et le nombre sinon.", starterCode: "def fizzbuzz(n):\n    # ...\n    pass\n\n# Test\nfor i in range(1, 21):\n    print(fizzbuzz(i))", solution: "def fizzbuzz(n):\n    if n % 3 == 0 and n % 5 == 0:\n        return \"FizzBuzz\"\n    elif n % 3 == 0:\n        return \"Fizz\"\n    elif n % 5 == 0:\n        return \"Buzz\"\n    return str(n)\n\nfor i in range(1, 21):\n    print(fizzbuzz(i))", language: "python" },
                        { type: "quiz", question: "Comment Python delimite-t-il les blocs de code ?", choices: ["Avec des accolades {}", "Avec des parentheses ()", "Avec l'indentation (espaces)", "Avec des points-virgules ;"], correct: 2, explanation: "Python utilise l'indentation (4 espaces par convention) pour delimiter les blocs. C'est unique a Python et force un code lisible." }
                    ]
                }
            },
            { id: "3-3", title: "Listes, dictionnaires, tuples", desc: "Les structures de donnees natives de Python — indispensables au quotidien.", tags: ["course", "practice"], links: [{ label: "Real Python - Lists", url: "https://realpython.com/python-lists-tuples/" }, { label: "Python.org Data Structures", url: "https://docs.python.org/fr/3/tutorial/datastructures.html" }],
                workshop: {
                    duration: "45 min", difficulty: 2,
                    objectives: ["Maitriser les listes et leurs methodes", "Utiliser les dictionnaires pour des donnees structurees", "Comprendre les list comprehensions"],
                    sections: [
                        { type: "theory", title: "Les structures de donnees Python", content: "Python a 4 structures de donnees integrees :\n\n- **list** `[1, 2, 3]` : ordonnee, modifiable\n- **tuple** `(1, 2, 3)` : ordonnee, non modifiable\n- **dict** `{\"cle\": \"valeur\"}` : paires cle-valeur\n- **set** `{1, 2, 3}` : valeurs uniques, non ordonnee" },
                        { type: "code", language: "python", code: "# Listes\nnombres = [1, 2, 3, 4, 5]\nnombres.append(6)       # Ajouter a la fin\nnombres.insert(0, 0)    # Inserer a l'index 0\nnombres.pop()           # Retirer le dernier\n\n# Slicing\nprint(nombres[1:3])     # [1, 2]\nprint(nombres[-2:])     # [4, 5]\n\n# List comprehension (PUISSANT)\ncarres = [x**2 for x in range(10)]\npairs = [x for x in nombres if x % 2 == 0]\n\n# Dictionnaires\nuser = {\n    \"nom\": \"Alice\",\n    \"age\": 25,\n    \"langages\": [\"Python\", \"JS\"]\n}\nprint(user[\"nom\"])          # Alice\nprint(user.get(\"email\", \"N/A\"))  # N/A (defaut)\n\n# Iterer sur un dict\nfor cle, valeur in user.items():\n    print(f\"{cle}: {valeur}\")", explanation: "Les list comprehensions sont un idiome Python essentiel. Elles remplacent les boucles for + append en une seule ligne lisible." },
                        { type: "exercise", title: "Analyse de donnees", instructions: "Tu as une liste d'etudiants (dictionnaires). Ecris le code pour :\n1. Extraire les noms des etudiants qui ont la moyenne (>= 10)\n2. Calculer la moyenne generale de la classe", starterCode: "etudiants = [\n    {\"nom\": \"Alice\", \"note\": 15},\n    {\"nom\": \"Bob\", \"note\": 8},\n    {\"nom\": \"Charlie\", \"note\": 12},\n    {\"nom\": \"Diana\", \"note\": 6},\n    {\"nom\": \"Eve\", \"note\": 18}\n]\n\n# 1. Noms avec la moyenne\n\n# 2. Moyenne generale", solution: "etudiants = [\n    {\"nom\": \"Alice\", \"note\": 15},\n    {\"nom\": \"Bob\", \"note\": 8},\n    {\"nom\": \"Charlie\", \"note\": 12},\n    {\"nom\": \"Diana\", \"note\": 6},\n    {\"nom\": \"Eve\", \"note\": 18}\n]\n\nreussis = [e[\"nom\"] for e in etudiants if e[\"note\"] >= 10]\nmoyenne = sum(e[\"note\"] for e in etudiants) / len(etudiants)\nprint(f\"Reussis : {reussis}\")\nprint(f\"Moyenne : {moyenne}\")", language: "python" },
                        { type: "quiz", question: "Quelle est la difference entre une liste et un tuple en Python ?", choices: ["Le tuple est plus rapide", "La liste est ordonnee, le tuple non", "Le tuple est non modifiable (immutable), la liste est modifiable", "Il n'y a pas de difference"], correct: 2, explanation: "Un tuple est immutable : une fois cree, on ne peut pas modifier son contenu. Cela le rend utile comme cle de dictionnaire ou pour des donnees qui ne doivent pas changer." }
                    ]
                }
            },
            { id: "3-4", title: "Fichiers, modules et pip", desc: "Lire/ecrire des fichiers, importer des modules, installer des packages.", tags: ["course", "practice"], links: [{ label: "Real Python - Files", url: "https://realpython.com/read-write-files-python/" }, { label: "pip documentation", url: "https://pip.pypa.io/en/stable/getting-started/" }],
                workshop: {
                    duration: "35 min", difficulty: 2,
                    objectives: ["Lire et ecrire des fichiers", "Importer et utiliser des modules", "Installer des packages avec pip"],
                    sections: [
                        { type: "theory", title: "Manipuler des fichiers", content: "Python rend la lecture/ecriture de fichiers tres simple avec le context manager `with`.\n\nModes d'ouverture :\n- `'r'` : lecture (defaut)\n- `'w'` : ecriture (ecrase le fichier)\n- `'a'` : ajout (ajoute a la fin)\n- `'x'` : creation (erreur si existe deja)" },
                        { type: "code", language: "python", code: "# Ecrire dans un fichier\nwith open(\"notes.txt\", \"w\") as f:\n    f.write(\"Premiere ligne\\n\")\n    f.write(\"Deuxieme ligne\\n\")\n\n# Lire un fichier\nwith open(\"notes.txt\", \"r\") as f:\n    contenu = f.read()      # Tout le fichier\n    # ou\n    lignes = f.readlines()  # Liste de lignes\n\n# JSON\nimport json\n\ndata = {\"nom\": \"Alice\", \"scores\": [95, 87, 92]}\nwith open(\"data.json\", \"w\") as f:\n    json.dump(data, f, indent=2)\n\nwith open(\"data.json\", \"r\") as f:\n    loaded = json.load(f)\n\n# Modules et pip\nimport os\nprint(os.getcwd())  # Repertoire courant\n\n# Terminal : pip install requests\nimport requests\nresponse = requests.get(\"https://api.github.com\")\nprint(response.status_code)", explanation: "Le 'with' garantit que le fichier est ferme automatiquement, meme en cas d'erreur. Toujours l'utiliser." },
                        { type: "info", variant: "warning", content: "Utilise toujours 'with open(...)' plutot que 'f = open(...)'. Sans 'with', tu risques d'oublier de fermer le fichier, ce qui peut causer des pertes de donnees." },
                        { type: "exercise", title: "Carnet de contacts", instructions: "Ecris un script qui gere un carnet de contacts en JSON :\n1. Charge les contacts depuis 'contacts.json' (ou cree une liste vide)\n2. Ajoute un contact {nom, email}\n3. Sauvegarde dans 'contacts.json'", starterCode: "import json\n\ndef charger_contacts():\n    # ...\n    pass\n\ndef ajouter_contact(nom, email):\n    # ...\n    pass", solution: "import json\nimport os\n\ndef charger_contacts():\n    if os.path.exists(\"contacts.json\"):\n        with open(\"contacts.json\", \"r\") as f:\n            return json.load(f)\n    return []\n\ndef ajouter_contact(nom, email):\n    contacts = charger_contacts()\n    contacts.append({\"nom\": nom, \"email\": email})\n    with open(\"contacts.json\", \"w\") as f:\n        json.dump(contacts, f, indent=2)\n    print(f\"Contact {nom} ajoute !\")", language: "python" },
                        { type: "quiz", question: "Que fait le 'with' dans 'with open(...) as f' ?", choices: ["Il cree un fichier temporaire", "Il garantit que le fichier sera ferme automatiquement", "Il ouvre le fichier en mode protege", "Il compresse le fichier"], correct: 1, explanation: "Le context manager 'with' garantit que le fichier est proprement ferme a la sortie du bloc, meme si une erreur se produit." }
                    ]
                }
            },
            { id: "3-5", title: "POO : Classes et objets", desc: "La programmation orientee objet — organiser son code comme un pro.", tags: ["course", "article"], links: [{ label: "Real Python OOP", url: "https://realpython.com/python3-object-oriented-programming/" }, { label: "Corey Schafer OOP", url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM" }],
                workshop: {
                    duration: "45 min", difficulty: 2,
                    objectives: ["Comprendre les classes et les instances", "Ecrire des methodes et utiliser self", "Comprendre l'heritage"],
                    sections: [
                        { type: "theory", title: "POO : organiser le code", content: "La Programmation Orientee Objet (POO) permet de regrouper des donnees et des comportements dans des 'objets'.\n\n- **Classe** : le plan/moule (ex: classe Voiture)\n- **Instance** : un objet cree a partir du plan (ex: ma_voiture)\n- **Attribut** : une donnee de l'objet (ex: couleur)\n- **Methode** : une action de l'objet (ex: demarrer())\n- **self** : reference a l'instance courante" },
                        { type: "code", language: "python", code: "class Animal:\n    def __init__(self, nom, espece):\n        self.nom = nom\n        self.espece = espece\n        self.energie = 100\n\n    def manger(self, nourriture):\n        self.energie += 10\n        return f\"{self.nom} mange {nourriture}\"\n\n    def __str__(self):\n        return f\"{self.nom} ({self.espece})\"\n\n# Heritage\nclass Chien(Animal):\n    def __init__(self, nom, race):\n        super().__init__(nom, \"Chien\")\n        self.race = race\n\n    def aboyer(self):\n        return f\"{self.nom} dit : Wouf !\"\n\n# Utilisation\nrex = Chien(\"Rex\", \"Berger Allemand\")\nprint(rex.manger(\"croquettes\"))  # Rex mange croquettes\nprint(rex.aboyer())              # Rex dit : Wouf !", explanation: "__init__ est le constructeur (appele a la creation). __str__ definit l'affichage avec print(). super() appelle le constructeur parent." },
                        { type: "exercise", title: "Classe CompteBancaire", instructions: "Cree une classe CompteBancaire avec :\n- Attributs : titulaire, solde (defaut 0)\n- Methodes : deposer(montant), retirer(montant), afficher_solde()\n- Le retrait ne doit pas permettre un solde negatif", starterCode: "class CompteBancaire:\n    def __init__(self, titulaire, solde=0):\n        # ...\n        pass\n\n    def deposer(self, montant):\n        # ...\n        pass\n\n    def retirer(self, montant):\n        # ...\n        pass", solution: "class CompteBancaire:\n    def __init__(self, titulaire, solde=0):\n        self.titulaire = titulaire\n        self.solde = solde\n\n    def deposer(self, montant):\n        self.solde += montant\n        print(f\"Depot de {montant}e. Solde : {self.solde}e\")\n\n    def retirer(self, montant):\n        if montant > self.solde:\n            print(\"Fonds insuffisants !\")\n            return\n        self.solde -= montant\n        print(f\"Retrait de {montant}e. Solde : {self.solde}e\")\n\n    def afficher_solde(self):\n        print(f\"Compte de {self.titulaire} : {self.solde}e\")", language: "python" },
                        { type: "quiz", question: "A quoi sert 'self' dans une methode Python ?", choices: ["A declarer une variable globale", "A reference l'instance courante de la classe", "A appeler une autre methode", "A creer une nouvelle instance"], correct: 1, explanation: "self est une reference a l'instance sur laquelle la methode est appelee. Il permet d'acceder aux attributs et methodes de cette instance specifique." }
                    ]
                }
            },
            { id: "3-6", title: "Gestion d'erreurs et debugging", desc: "try/except, lire les erreurs, utiliser le debugger — ne plus avoir peur des bugs.", tags: ["course", "practice"], links: [{ label: "Real Python Exceptions", url: "https://realpython.com/python-exceptions/" }, { label: "VS Code Python Debug", url: "https://code.visualstudio.com/docs/python/debugging" }],
                workshop: {
                    duration: "35 min", difficulty: 2,
                    objectives: ["Utiliser try/except pour gerer les erreurs", "Lire et comprendre les tracebacks", "Utiliser le debugger de VS Code"],
                    sections: [
                        { type: "theory", title: "Les erreurs ne sont pas l'ennemi", content: "En Python, les erreurs sont des objets qu'on peut intercepter et gerer.\n\nErreurs courantes :\n- `SyntaxError` : code mal ecrit\n- `TypeError` : mauvais type d'argument\n- `ValueError` : bonne type mais valeur invalide\n- `KeyError` : cle absente dans un dict\n- `IndexError` : index hors limites\n- `FileNotFoundError` : fichier introuvable" },
                        { type: "code", language: "python", code: "# try/except basique\ntry:\n    nombre = int(input(\"Un nombre ? \"))\n    resultat = 100 / nombre\n    print(f\"Resultat : {resultat}\")\nexcept ValueError:\n    print(\"Ce n'est pas un nombre !\")\nexcept ZeroDivisionError:\n    print(\"Division par zero impossible !\")\nexcept Exception as e:\n    print(f\"Erreur inattendue : {e}\")\nfinally:\n    print(\"Termine.\")  # Toujours execute\n\n# Lever ses propres erreurs\ndef diviser(a, b):\n    if b == 0:\n        raise ValueError(\"Le diviseur ne peut pas etre zero\")\n    return a / b", explanation: "try/except intercepte les erreurs. finally s'execute toujours. raise permet de lever ses propres erreurs." },
                        { type: "info", variant: "tip", content: "Quand tu lis un traceback, commence par la DERNIERE ligne — c'est le message d'erreur. Puis remonte pour trouver la ligne de code fautive." },
                        { type: "quiz", question: "Quel bloc s'execute TOUJOURS, qu'il y ait une erreur ou non ?", choices: ["try", "except", "finally", "else"], correct: 2, explanation: "Le bloc 'finally' s'execute toujours, que l'erreur soit capturee ou non. Il sert typiquement a nettoyer des ressources (fermer des fichiers, connexions, etc.)." }
                    ]
                }
            },
            { id: "3-7", title: "APIs avec Python (requests)", desc: "Appeler des APIs web depuis Python — recuperer des donnees du monde reel.", tags: ["course", "practice"], links: [{ label: "Real Python - Requests", url: "https://realpython.com/python-requests/" }, { label: "Public APIs List", url: "https://github.com/public-apis/public-apis" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Installer et utiliser la librairie requests", "Appeler des APIs REST", "Traiter les reponses JSON"],
                    sections: [
                        { type: "theory", title: "Appeler des APIs depuis Python", content: "La librairie `requests` est le standard pour faire des requetes HTTP en Python.\n\nInstallation : `pip install requests`\n\nMethodes principales :\n- `requests.get(url)` : recuperer des donnees\n- `requests.post(url, json=data)` : envoyer des donnees\n- `response.json()` : parser la reponse JSON\n- `response.status_code` : code HTTP (200 = OK)" },
                        { type: "code", language: "python", code: "import requests\n\n# GET : recuperer des donnees\nresponse = requests.get(\"https://jsonplaceholder.typicode.com/users/1\")\n\nif response.status_code == 200:\n    user = response.json()\n    print(f\"Nom : {user['name']}\")\n    print(f\"Email : {user['email']}\")\n\n# GET avec parametres\nparams = {\"userId\": 1, \"_limit\": 5}\nposts = requests.get(\n    \"https://jsonplaceholder.typicode.com/posts\",\n    params=params\n).json()\n\nfor post in posts:\n    print(f\"- {post['title']}\")\n\n# POST : envoyer des donnees\nnew_post = {\n    \"title\": \"Mon article\",\n    \"body\": \"Contenu...\",\n    \"userId\": 1\n}\nresponse = requests.post(\n    \"https://jsonplaceholder.typicode.com/posts\",\n    json=new_post\n)\nprint(response.status_code)  # 201 (Created)", explanation: "jsonplaceholder.typicode.com est une API de test gratuite, parfaite pour s'entrainer. Elle simule un blog avec users, posts et comments." },
                        { type: "exercise", title: "Mini client API", instructions: "Ecris une fonction qui recupere la meteo d'une ville depuis une API publique gratuite (wttr.in) et affiche la temperature.", starterCode: "import requests\n\ndef get_meteo(ville):\n    # Utilise wttr.in : requests.get(f\"https://wttr.in/{ville}?format=j1\")\n    # ...\n    pass\n\nget_meteo(\"Paris\")", solution: "import requests\n\ndef get_meteo(ville):\n    try:\n        response = requests.get(f\"https://wttr.in/{ville}?format=j1\")\n        data = response.json()\n        temp = data[\"current_condition\"][0][\"temp_C\"]\n        desc = data[\"current_condition\"][0][\"weatherDesc\"][0][\"value\"]\n        print(f\"{ville} : {temp}C, {desc}\")\n    except Exception as e:\n        print(f\"Erreur : {e}\")\n\nget_meteo(\"Paris\")", language: "python" },
                        { type: "quiz", question: "Quel code HTTP signifie 'succes' ?", choices: ["100", "200", "404", "500"], correct: 1, explanation: "200 = OK (succes). 201 = Created. 400 = Bad Request. 404 = Not Found. 500 = Internal Server Error." }
                    ]
                }
            },
            { id: "3-8", title: "PROJET : Script d'automatisation", desc: "Automatise une tache reelle : renommer des fichiers, scraper un site, organiser tes donnees.", tags: ["project"], links: [{ label: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" }],
                workshop: {
                    duration: "60 min", difficulty: 2,
                    objectives: ["Identifier une tache automatisable", "Combiner fichiers, APIs et logique", "Creer un script Python reutilisable"],
                    sections: [
                        { type: "theory", title: "Automatiser avec Python", content: "Python excelle pour automatiser des taches repetitives :\n\n- Renommer/organiser des fichiers en masse\n- Scraper des donnees depuis le web\n- Generer des rapports automatiquement\n- Envoyer des emails ou notifications\n- Transformer des formats de donnees (CSV → JSON, etc.)\n\nModules utiles :\n- `os` et `pathlib` : manipulation de fichiers\n- `shutil` : copie/deplacement de fichiers\n- `csv` : lire/ecrire des CSV\n- `requests` + `beautifulsoup4` : web scraping" },
                        { type: "code", language: "python", code: "import os\nfrom pathlib import Path\nimport csv\nimport json\n\n# Exemple : Convertir un CSV en JSON\ndef csv_to_json(csv_path, json_path):\n    with open(csv_path, 'r') as f:\n        reader = csv.DictReader(f)\n        data = list(reader)\n\n    with open(json_path, 'w') as f:\n        json.dump(data, f, indent=2)\n\n    print(f\"Converti {len(data)} lignes\")\n\n# Exemple : Organiser des fichiers par extension\ndef organiser_dossier(dossier):\n    path = Path(dossier)\n    for fichier in path.iterdir():\n        if fichier.is_file():\n            ext = fichier.suffix[1:]  # Sans le point\n            dest = path / ext\n            dest.mkdir(exist_ok=True)\n            fichier.rename(dest / fichier.name)\n            print(f\"{fichier.name} → {ext}/\")", explanation: "pathlib est la facon moderne de manipuler des chemins en Python. Prefere Path a os.path pour un code plus lisible." },
                        { type: "exercise", title: "Ton script d'automatisation", instructions: "Choisis un projet parmi :\n1. Un organiseur de fichiers par date/extension\n2. Un scraper qui recupere les titres d'un site web\n3. Un convertisseur CSV → JSON avec filtrage\n\nEcris le script complet.", starterCode: "# Choisis ton projet et ecris le code complet\n# Utilise les modules vus dans cette phase", solution: "# Exemple : Analyseur de dossier\nfrom pathlib import Path\nfrom collections import Counter\n\ndef analyser_dossier(chemin):\n    path = Path(chemin)\n    extensions = Counter()\n    taille_totale = 0\n\n    for fichier in path.rglob('*'):\n        if fichier.is_file():\n            ext = fichier.suffix or 'sans extension'\n            extensions[ext] += 1\n            taille_totale += fichier.stat().st_size\n\n    print(f\"Dossier : {path}\")\n    print(f\"Fichiers : {sum(extensions.values())}\")\n    print(f\"Taille : {taille_totale / 1024 / 1024:.1f} Mo\")\n    print(\"Extensions :\")\n    for ext, count in extensions.most_common():\n        print(f\"  {ext}: {count}\")\n\nanalyser_dossier('.')", language: "python" }
                    ]
                }
            }
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
            { id: "4-1", title: "Le Terminal : commandes essentielles", desc: "cd, ls, mkdir, cp, mv, rm — naviguer et manipuler des fichiers en ligne de commande.", tags: ["course", "practice"], links: [{ label: "freeCodeCamp CLI", url: "https://www.freecodecamp.org/news/command-line-for-beginners/" }, { label: "Terminus (jeu)", url: "https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html" }],
                workshop: {
                    duration: "35 min", difficulty: 1,
                    objectives: ["Naviguer dans le systeme de fichiers", "Creer, copier et deplacer des fichiers", "Utiliser les commandes de base du terminal"],
                    sections: [
                        { type: "theory", title: "Le terminal : l'outil secret des devs", content: "Le terminal (ou CLI) te permet de controler ton ordinateur avec du texte au lieu de clics. C'est plus rapide et plus puissant qu'une interface graphique.\n\nCommandes essentielles :\n- `pwd` : ou suis-je ?\n- `ls` : lister les fichiers\n- `cd dossier` : aller dans un dossier\n- `cd ..` : remonter d'un niveau\n- `mkdir nom` : creer un dossier\n- `touch fichier` : creer un fichier vide\n- `cp source dest` : copier\n- `mv source dest` : deplacer/renommer\n- `rm fichier` : supprimer (irreversible !)" },
                        { type: "code", language: "bash", code: "# Naviguer\npwd                    # /home/user\ncd projets             # Entrer dans 'projets'\nls -la                 # Lister tout (avec fichiers caches)\n\n# Creer une structure de projet\nmkdir mon-projet\ncd mon-projet\nmkdir src tests docs\ntouch README.md\ntouch src/main.py\n\n# Voir l'arborescence\nls -R                  # Recursif\n# Ou mieux :\ntree                   # Si installe\n\n# Astuce : Tab pour autocompleter !\n# Astuce : fleche haut pour l'historique", explanation: "Ctrl+C annule une commande en cours. Ctrl+L nettoie l'ecran. Tab auto-complete les noms de fichiers." },
                        { type: "exercise", title: "Cree une arborescence projet", instructions: "En utilisant uniquement le terminal, cree cette structure :\n```\nmon-site/\n  ├── index.html\n  ├── css/\n  │   └── style.css\n  ├── js/\n  │   └── app.js\n  └── images/\n```", starterCode: "# Ecris les commandes une par une", solution: "mkdir mon-site\ncd mon-site\ntouch index.html\nmkdir css js images\ntouch css/style.css\ntouch js/app.js", language: "bash" },
                        { type: "quiz", question: "Que fait la commande 'rm -rf dossier' ?", choices: ["Renomme le dossier", "Deplace le dossier", "Supprime le dossier et tout son contenu sans confirmation", "Compresse le dossier"], correct: 2, explanation: "rm -rf supprime recursivement (-r) et sans confirmation (-f). C'est dangereux ! Toujours verifier deux fois avant de l'utiliser." }
                    ]
                }
            },
            { id: "4-2", title: "Git : les bases", desc: "init, add, commit, status, log — versionner ton code et ne plus jamais perdre ton travail.", tags: ["course", "practice"], links: [{ label: "Git - the simple guide", url: "https://rogerdudler.github.io/git-guide/index.fr.html" }, { label: "Learn Git Branching (jeu)", url: "https://learngitbranching.js.org/?locale=fr_FR" }],
                workshop: {
                    duration: "45 min", difficulty: 1,
                    objectives: ["Initialiser un depot Git", "Faire des commits propres", "Comprendre le workflow Git de base"],
                    sections: [
                        { type: "theory", title: "Git : la machine a voyager dans le temps", content: "Git est un systeme de controle de version. Il enregistre l'historique de ton code, permettant de :\n- Revenir a une version precedente\n- Travailler a plusieurs sans se marcher dessus\n- Experimenter sans risque\n\nLe workflow de base :\n1. `git init` : initialiser un depot\n2. Modifier des fichiers\n3. `git add fichier` : preparer les changements\n4. `git commit -m \"message\"` : enregistrer un snapshot\n5. Repeter" },
                        { type: "code", language: "bash", code: "# Initialiser un depot\ngit init\n\n# Voir l'etat\ngit status\n\n# Ajouter des fichiers au staging\ngit add index.html         # Un fichier\ngit add .                  # Tous les fichiers\n\n# Commiter\ngit commit -m \"feat: add homepage\"\n\n# Voir l'historique\ngit log --oneline\n\n# Voir les differences\ngit diff                   # Non-stage\ngit diff --staged          # Stage\n\n# Configuration initiale (une seule fois)\ngit config --global user.name \"Ton Nom\"\ngit config --global user.email \"ton@email.com\"", explanation: "Un commit est un snapshot de ton code a un instant T. Le message doit decrire CE QUE tu as fait, pas COMMENT." },
                        { type: "info", variant: "tip", content: "Convention pour les messages de commit : type(scope): description. Types : feat, fix, refactor, docs, test, chore. Exemple : 'feat(auth): add login form'" },
                        { type: "exercise", title: "Premier depot Git", instructions: "1. Cree un dossier 'mon-projet-git'\n2. Initialise Git\n3. Cree un fichier README.md avec du contenu\n4. Fais ton premier commit\n5. Modifie le README\n6. Fais un deuxieme commit\n7. Verifie l'historique avec git log", starterCode: "# Ecris les commandes Git", solution: "mkdir mon-projet-git\ncd mon-projet-git\ngit init\necho \"# Mon Projet\" > README.md\ngit add README.md\ngit commit -m \"docs: add README\"\necho \"Description du projet\" >> README.md\ngit add README.md\ngit commit -m \"docs: add project description\"\ngit log --oneline", language: "bash" },
                        { type: "quiz", question: "Que fait 'git add' ?", choices: ["Il enregistre les changements definitivement", "Il envoie le code sur GitHub", "Il prepare les fichiers pour le prochain commit (staging)", "Il cree un nouveau fichier"], correct: 2, explanation: "git add deplace les fichiers dans la 'staging area' — une zone de preparation. Le commit enregistre definitivement ce qui est dans le staging." }
                    ]
                }
            },
            { id: "4-3", title: "GitHub : collaborer en ligne", desc: "Push, pull, fork, pull requests — partager ton code avec le monde.", tags: ["course", "practice"], links: [{ label: "GitHub Skills", url: "https://skills.github.com/" }, { label: "GitHub Docs", url: "https://docs.github.com/fr/get-started" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Connecter un depot local a GitHub", "Push et pull des changements", "Comprendre fork et pull requests"],
                    sections: [
                        { type: "theory", title: "GitHub : Git dans le cloud", content: "GitHub heberge tes depots Git en ligne. C'est la plateforme de collaboration #1 pour les developpeurs.\n\nConcepts cles :\n- **Remote** : le depot distant (sur GitHub)\n- **Push** : envoyer tes commits locaux vers le remote\n- **Pull** : recuperer les commits du remote\n- **Fork** : copier le depot de quelqu'un d'autre\n- **Pull Request** : proposer des changements" },
                        { type: "code", language: "bash", code: "# Connecter un depot local a GitHub\ngit remote add origin https://github.com/ton-user/ton-repo.git\n\n# Envoyer ton code\ngit push -u origin main\n\n# Recuperer les changements\ngit pull origin main\n\n# Cloner un depot existant\ngit clone https://github.com/user/repo.git\n\n# Workflow collaboratif\ngit pull origin main          # Toujours pull avant de travailler\n# ... modifier des fichiers ...\ngit add .\ngit commit -m \"feat: add feature\"\ngit push origin main", explanation: "Le -u dans 'git push -u origin main' configure le tracking : apres ca, 'git push' suffit (sans specifier origin main)." },
                        { type: "info", variant: "tip", content: "Cree un README.md dans chaque projet. C'est la premiere chose que les gens voient sur ta page GitHub. Un bon README = plus de credibilite." },
                        { type: "quiz", question: "Que fait un 'fork' sur GitHub ?", choices: ["Il supprime le depot original", "Il cree une copie du depot dans ton compte", "Il fusionne deux depots", "Il telecharge le depot sur ton PC"], correct: 1, explanation: "Un fork cree une copie independante d'un depot dans ton compte GitHub. Tu peux y faire des modifications et proposer des changements via une pull request." }
                    ]
                }
            },
            { id: "4-4", title: "Git avance : branches et merge", desc: "Travailler en parallele, fusionner des branches, resoudre des conflits.", tags: ["course", "article"], links: [{ label: "Atlassian Git Branching", url: "https://www.atlassian.com/git/tutorials/using-branches" }, { label: "Oh Shit, Git!?!", url: "https://ohshitgit.com/" }],
                workshop: {
                    duration: "45 min", difficulty: 2,
                    objectives: ["Creer et gerer des branches", "Fusionner des branches (merge)", "Resoudre des conflits de merge"],
                    sections: [
                        { type: "theory", title: "Les branches : travailler en parallele", content: "Une branche est une ligne de developpement independante. Tu peux experimenter sans affecter le code principal.\n\nWorkflow classique :\n1. Creer une branche pour ta feature\n2. Travailler dessus (commits)\n3. Fusionner (merge) dans main quand c'est pret\n4. Supprimer la branche" },
                        { type: "code", language: "bash", code: "# Creer et basculer sur une branche\ngit checkout -b feat/login-form\n# ou (moderne)\ngit switch -c feat/login-form\n\n# Lister les branches\ngit branch          # Locales\ngit branch -a       # Toutes\n\n# Basculer entre branches\ngit switch main\ngit switch feat/login-form\n\n# Fusionner dans main\ngit switch main\ngit merge feat/login-form\n\n# Supprimer la branche\ngit branch -d feat/login-form\n\n# Resoudre un conflit\n# 1. Git marque les conflits dans les fichiers\n# 2. Edite les fichiers pour choisir la bonne version\n# 3. git add .\n# 4. git commit", explanation: "Nomme tes branches avec un prefixe : feat/, fix/, refactor/, docs/. Ca rend l'historique lisible." },
                        { type: "info", variant: "warning", content: "Toujours pull main avant de creer une branche. Sinon ta branche part d'un etat potentiellement obsolete : git switch main && git pull && git switch -c ma-branche" },
                        { type: "quiz", question: "Que se passe-t-il quand deux branches modifient la meme ligne ?", choices: ["Git choisit automatiquement la meilleure version", "Un conflit de merge se produit et tu dois le resoudre manuellement", "La deuxieme modification ecrase la premiere", "Git refuse le merge"], correct: 1, explanation: "Quand deux branches modifient la meme ligne, Git ne peut pas choisir automatiquement. Il marque le conflit dans le fichier et te laisse decider quelle version garder." }
                    ]
                }
            },
            { id: "4-5", title: "VS Code : productivite maximale", desc: "Extensions essentielles, raccourcis, terminal integre, debugger.", tags: ["tool", "article"], links: [{ label: "VS Code Tips", url: "https://code.visualstudio.com/docs/getstarted/tips-and-tricks" }],
                workshop: {
                    duration: "30 min", difficulty: 1,
                    objectives: ["Maitriser les raccourcis essentiels", "Installer les extensions cles", "Utiliser le terminal et le debugger integres"],
                    sections: [
                        { type: "theory", title: "VS Code : ton atelier optimise", content: "VS Code est l'editeur #1 des developpeurs. Maitriser ses raccourcis te fera gagner des heures.\n\nRaccourcis essentiels :\n- `Ctrl+P` : ouvrir un fichier rapidement\n- `Ctrl+Shift+P` : palette de commandes\n- `Ctrl+D` : selectionner le prochain mot identique\n- `Alt+Up/Down` : deplacer une ligne\n- `Ctrl+/` : commenter/decommenter\n- `Ctrl+` ` : ouvrir le terminal\n- `Ctrl+B` : toggle sidebar" },
                        { type: "code", language: "text", code: "Extensions essentielles :\n\n1. Prettier — formatage automatique du code\n2. ESLint — detection d'erreurs JavaScript\n3. Python — support Python complet\n4. GitLens — visualiser l'historique Git\n5. Live Server — rafraichissement auto pour HTML\n6. Auto Rename Tag — renomme les balises HTML par paire\n7. Error Lens — affiche les erreurs inline\n\nConfig recommandee (settings.json) :\n{\n    \"editor.formatOnSave\": true,\n    \"editor.tabSize\": 4,\n    \"editor.wordWrap\": \"on\",\n    \"files.autoSave\": \"afterDelay\"\n}", explanation: "Active 'Format on Save' pour ne plus jamais te soucier du formatage. Prettier s'en charge automatiquement." },
                        { type: "quiz", question: "Quel raccourci ouvre la palette de commandes dans VS Code ?", choices: ["Ctrl+P", "Ctrl+Shift+P", "Ctrl+O", "F1"], correct: 1, explanation: "Ctrl+Shift+P (ou F1) ouvre la palette de commandes, qui donne acces a TOUTES les fonctionnalites de VS Code. C'est le raccourci le plus important a retenir." }
                    ]
                }
            },
            { id: "4-6", title: "PROJET : Contribuer a l'open source", desc: "Fais ta premiere contribution sur GitHub — meme corriger une typo, ca compte !", tags: ["project"], links: [{ label: "First Contributions", url: "https://github.com/firstcontributions/first-contributions" }, { label: "Good First Issues", url: "https://goodfirstissues.com/" }],
                workshop: {
                    duration: "45 min", difficulty: 2,
                    objectives: ["Trouver un projet open source accueillant", "Forker, cloner et creer une branche", "Soumettre une pull request"],
                    sections: [
                        { type: "theory", title: "L'open source en pratique", content: "Contribuer a l'open source c'est :\n1. Trouver un projet\n2. Fork le repo\n3. Cloner ton fork localement\n4. Creer une branche\n5. Faire tes modifications\n6. Commiter et pousser\n7. Ouvrir une Pull Request\n\nPour debuter, cherche les labels 'good first issue' ou 'beginner friendly'. Meme corriger une typo dans la doc, c'est une contribution valide !" },
                        { type: "code", language: "bash", code: "# 1. Fork le repo sur GitHub (bouton Fork)\n\n# 2. Cloner ton fork\ngit clone https://github.com/TON-USER/repo.git\ncd repo\n\n# 3. Ajouter le repo original comme remote\ngit remote add upstream https://github.com/ORIGINAL/repo.git\n\n# 4. Creer une branche\ngit switch -c fix/typo-readme\n\n# 5. Faire tes modifications\n# ... editer les fichiers ...\n\n# 6. Commiter et pousser\ngit add .\ngit commit -m \"docs: fix typo in README\"\ngit push origin fix/typo-readme\n\n# 7. Ouvrir une PR sur GitHub\n# Va sur ton fork → 'Compare & pull request'", explanation: "Le remote 'upstream' pointe vers le repo original. Ca te permet de recuperer les mises a jour : git pull upstream main" },
                        { type: "info", variant: "tip", content: "Le repo 'first-contributions' est specialement concu pour ta premiere contribution. Suis le guide : tu seras fier de voir ton nom dans la liste des contributeurs !" },
                        { type: "exercise", title: "Ta premiere contribution", instructions: "1. Va sur github.com/firstcontributions/first-contributions\n2. Fork le repo\n3. Clone ton fork\n4. Cree une branche\n5. Ajoute ton nom dans Contributors.md\n6. Commit, push, et ouvre une PR\n\nDocumente les commandes que tu as utilisees.", starterCode: "# Note les commandes que tu utilises ici\n# pour pouvoir les reproduire sur un vrai projet", solution: "git clone https://github.com/MON-USER/first-contributions.git\ncd first-contributions\ngit switch -c add-mon-nom\n# Editer Contributors.md\ngit add Contributors.md\ngit commit -m \"docs: add my name to contributors\"\ngit push origin add-mon-nom\n# Ouvrir une PR sur GitHub", language: "bash" }
                    ]
                }
            }
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
            { id: "5-1", title: "Complexite algorithmique (Big O)", desc: "Mesurer l'efficacite d'un algorithme — O(n), O(log n), O(n2).", tags: ["course", "article"], links: [{ label: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" }, { label: "Coding Interview University", url: "https://github.com/jwasham/coding-interview-university" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Comprendre la notation Big O", "Evaluer la complexite d'un algorithme", "Comparer les performances des algorithmes"],
                    sections: [
                        { type: "theory", title: "Big O : mesurer l'efficacite", content: "La notation Big O decrit comment le temps d'execution croit avec la taille de l'entree.\n\nDu plus rapide au plus lent :\n- **O(1)** : constant — acces direct (dict, tableau par index)\n- **O(log n)** : logarithmique — binary search\n- **O(n)** : lineaire — parcourir une liste\n- **O(n log n)** : linearithmique — tri efficace (mergesort)\n- **O(n²)** : quadratique — boucle imbriquee\n- **O(2ⁿ)** : exponentiel — a eviter !" },
                        { type: "code", language: "python", code: "# O(1) — Constant\ndef get_first(lst):\n    return lst[0]  # Toujours 1 operation\n\n# O(n) — Lineaire\ndef search(lst, target):\n    for item in lst:  # Parcourt tout\n        if item == target:\n            return True\n    return False\n\n# O(n^2) — Quadratique\ndef has_duplicates(lst):\n    for i in range(len(lst)):      # n fois\n        for j in range(i+1, len(lst)):  # n fois\n            if lst[i] == lst[j]:\n                return True\n    return False\n\n# O(n^2) → O(n) avec un set !\ndef has_duplicates_fast(lst):\n    return len(lst) != len(set(lst))  # O(n)", explanation: "Choisir le bon algorithme peut faire passer de minutes a millisecondes. Pour 1 million d'elements : O(n²) = 1 billion d'operations, O(n) = 1 million." },
                        { type: "quiz", question: "Quelle est la complexite de la recherche dans un dictionnaire Python ?", choices: ["O(n)", "O(log n)", "O(1) en moyenne", "O(n²)"], correct: 2, explanation: "Les dictionnaires Python utilisent des hash tables, qui offrent un acces en O(1) en moyenne. C'est pourquoi les dicts sont si rapides pour les recherches." }
                    ]
                }
            },
            { id: "5-2", title: "Arrays et Linked Lists", desc: "Les deux structures de base — comprendre quand utiliser l'une ou l'autre.", tags: ["course", "practice"], links: [{ label: "Visualgo", url: "https://visualgo.net/en" }, { label: "LeetCode Arrays", url: "https://leetcode.com/tag/array/" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Comprendre les tableaux et leur stockage en memoire", "Comprendre les listes chainees", "Savoir quand utiliser l'un ou l'autre"],
                    sections: [
                        { type: "theory", title: "Array vs Linked List", content: "**Array (tableau)** :\n- Stockage contigu en memoire\n- Acces par index : O(1)\n- Insertion/suppression au milieu : O(n)\n- Taille fixe (ou cout de redimensionnement)\n\n**Linked List (liste chainee)** :\n- Noeuds disperses en memoire, relies par des pointeurs\n- Acces par index : O(n)\n- Insertion/suppression en tete : O(1)\n- Taille dynamique naturelle\n\nEn Python : `list` = array dynamique (pas une linked list !)" },
                        { type: "code", language: "python", code: "# Implementation d'une Linked List\nclass Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n\n    def prepend(self, val):  # O(1)\n        node = Node(val)\n        node.next = self.head\n        self.head = node\n\n    def search(self, val):  # O(n)\n        current = self.head\n        while current:\n            if current.val == val:\n                return True\n            current = current.next\n        return False\n\n    def display(self):\n        current = self.head\n        while current:\n            print(current.val, end=\" -> \")\n            current = current.next\n        print(\"None\")\n\nll = LinkedList()\nll.prepend(3)\nll.prepend(2)\nll.prepend(1)\nll.display()  # 1 -> 2 -> 3 -> None", explanation: "En pratique, les arrays (listes Python) sont preferes dans 95% des cas grace au cache CPU. Les linked lists sont surtout utiles pour comprendre les concepts." },
                        { type: "quiz", question: "Quel est l'avantage principal d'une linked list sur un array ?", choices: ["Acces plus rapide par index", "Insertion en tete en O(1)", "Utilise moins de memoire", "Plus facile a trier"], correct: 1, explanation: "L'insertion en tete d'une linked list est O(1) car il suffit de changer un pointeur. Pour un array, il faut decaler tous les elements, ce qui est O(n)." }
                    ]
                }
            },
            { id: "5-3", title: "Stacks, Queues et Hash Tables", desc: "LIFO, FIFO, et la structure la plus utile en programmation.", tags: ["course", "practice"], links: [{ label: "Visualgo", url: "https://visualgo.net/en" }, { label: "HackerRank DS", url: "https://www.hackerrank.com/domains/data-structures" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Implementer une stack et une queue", "Comprendre les hash tables", "Savoir quand utiliser chaque structure"],
                    sections: [
                        { type: "theory", title: "Stack, Queue, Hash Table", content: "**Stack (pile)** — LIFO (Last In, First Out) :\n- push : ajouter au sommet\n- pop : retirer du sommet\n- Usage : historique (undo), appels de fonctions, parsing\n\n**Queue (file)** — FIFO (First In, First Out) :\n- enqueue : ajouter a la fin\n- dequeue : retirer du debut\n- Usage : files d'attente, BFS, scheduling\n\n**Hash Table (dict en Python)** :\n- Acces cle → valeur en O(1) moyen\n- La structure la plus utile au quotidien" },
                        { type: "code", language: "python", code: "# Stack avec une liste Python\nstack = []\nstack.append(\"a\")  # push\nstack.append(\"b\")\nstack.append(\"c\")\nprint(stack.pop())  # \"c\" (LIFO)\n\n# Queue avec collections.deque\nfrom collections import deque\nqueue = deque()\nqueue.append(\"a\")    # enqueue\nqueue.append(\"b\")\nqueue.append(\"c\")\nprint(queue.popleft())  # \"a\" (FIFO)\n\n# Hash Table = dict Python\n# Compter les occurrences (pattern classique)\ndef count_chars(text):\n    counts = {}\n    for char in text:\n        counts[char] = counts.get(char, 0) + 1\n    return counts\n\n# Ou avec Counter (plus elegant)\nfrom collections import Counter\ncounts = Counter(\"abracadabra\")\nprint(counts)  # Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})", explanation: "Le pattern 'compteur avec dict' est partout en algorithmique. Counter de collections le fait en une ligne." },
                        { type: "exercise", title: "Parentheses equilibrees", instructions: "Ecris une fonction qui verifie si une chaine de parentheses est equilibree. Ex: '(()())' → True, '(()' → False, ')(' → False. Utilise une stack.", starterCode: "def is_balanced(s):\n    # Utilise une stack\n    pass\n\nprint(is_balanced(\"(()())\"))  # True\nprint(is_balanced(\"(()\"))     # False", solution: "def is_balanced(s):\n    stack = []\n    for char in s:\n        if char == '(':\n            stack.append(char)\n        elif char == ')':\n            if not stack:\n                return False\n            stack.pop()\n    return len(stack) == 0\n\nprint(is_balanced(\"(()())\"))  # True\nprint(is_balanced(\"(()\"))     # False\nprint(is_balanced(\")(\"))      # False", language: "python" },
                        { type: "quiz", question: "Quelle structure utiliserais-tu pour implementer un systeme 'Undo' (annuler) ?", choices: ["Queue", "Array", "Stack", "Linked List"], correct: 2, explanation: "Un systeme Undo utilise une stack (LIFO) : la derniere action effectuee est la premiere a etre annulee. Push quand on fait une action, pop quand on annule." }
                    ]
                }
            },
            { id: "5-4", title: "Arbres et Graphes", desc: "Arbres binaires, BST, graphes — modeliser des relations complexes.", tags: ["course", "article"], links: [{ label: "Visualgo Trees", url: "https://visualgo.net/en/bst" }],
                workshop: {
                    duration: "45 min", difficulty: 3,
                    objectives: ["Comprendre les arbres binaires et BST", "Modeliser des relations avec des graphes", "Parcourir des arbres (inorder, preorder, postorder)"],
                    sections: [
                        { type: "theory", title: "Arbres et Graphes", content: "**Arbre** : structure hierarchique (un parent, des enfants)\n- Arbre binaire : max 2 enfants par noeud\n- BST (Binary Search Tree) : gauche < parent < droite\n- Recherche dans un BST : O(log n)\n\n**Graphe** : des noeuds connectes par des aretes\n- Dirige ou non dirige\n- Pondere ou non (avec des poids sur les aretes)\n- Exemples : reseau social, carte routiere, web" },
                        { type: "code", language: "python", code: "# Arbre binaire de recherche (BST)\nclass TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\ndef insert(root, val):\n    if not root:\n        return TreeNode(val)\n    if val < root.val:\n        root.left = insert(root.left, val)\n    else:\n        root.right = insert(root.right, val)\n    return root\n\ndef inorder(root):\n    \"\"\"Parcours trie (gauche, racine, droite)\"\"\"\n    if root:\n        inorder(root.left)\n        print(root.val, end=\" \")\n        inorder(root.right)\n\n# Graphe avec dict d'adjacence\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['D', 'E'],\n    'C': ['F'],\n    'D': [], 'E': [], 'F': []\n}", explanation: "Un BST permet de chercher en O(log n) car a chaque etape on elimine la moitie des elements — comme la recherche dichotomique." },
                        { type: "quiz", question: "Dans un BST, ou se trouve le plus petit element ?", choices: ["A la racine", "Au noeud le plus a gauche", "Au noeud le plus a droite", "N'importe ou"], correct: 1, explanation: "Dans un BST, les valeurs plus petites sont toujours a gauche. Le plus petit element est donc le noeud le plus a gauche de l'arbre." }
                    ]
                }
            },
            { id: "5-5", title: "Tri et Recherche", desc: "Binary search, mergesort, quicksort — les algorithmes classiques.", tags: ["course", "practice"], links: [{ label: "Sorting Visualizer", url: "https://www.sortvisualizer.com/" }],
                workshop: {
                    duration: "45 min", difficulty: 2,
                    objectives: ["Implementer la recherche binaire", "Comprendre mergesort et quicksort", "Savoir quand utiliser quel algorithme de tri"],
                    sections: [
                        { type: "theory", title: "Recherche et tri", content: "**Recherche binaire** — O(log n) :\nCherche dans un tableau TRIE en divisant par 2 a chaque etape.\n\n**Algorithmes de tri** :\n- Bubble sort : O(n²) — simple mais lent\n- Merge sort : O(n log n) — stable, garanti\n- Quick sort : O(n log n) moyen — rapide en pratique\n- Python sort : Timsort O(n log n) — hybride optimise\n\nEn pratique, utilise toujours `sorted()` ou `.sort()` en Python. Mais comprendre le fonctionnement est essentiel." },
                        { type: "code", language: "python", code: "# Recherche binaire\ndef binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\n# Merge sort\ndef merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result", explanation: "La recherche binaire ne fonctionne que sur un tableau trie. Elle est la base de nombreux algorithmes plus complexes." },
                        { type: "exercise", title: "Binary search modifie", instructions: "Ecris une fonction qui trouve la premiere position d'insertion pour un element dans un tableau trie (equivalent de bisect_left).", starterCode: "def find_insert_pos(arr, target):\n    # Retourne l'index ou inserer target\n    # pour garder le tableau trie\n    pass\n\nprint(find_insert_pos([1,3,5,7], 4))  # 2\nprint(find_insert_pos([1,3,5,7], 6))  # 3", solution: "def find_insert_pos(arr, target):\n    left, right = 0, len(arr)\n    while left < right:\n        mid = (left + right) // 2\n        if arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid\n    return left\n\nprint(find_insert_pos([1,3,5,7], 4))  # 2\nprint(find_insert_pos([1,3,5,7], 6))  # 3", language: "python" },
                        { type: "quiz", question: "Quelle est la complexite de la recherche binaire ?", choices: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correct: 2, explanation: "A chaque etape, la recherche binaire elimine la moitie des elements. Pour 1 million d'elements, il faut au max ~20 comparaisons (log2(1000000) ≈ 20)." }
                    ]
                }
            },
            { id: "5-6", title: "Recursion et Prog. dynamique", desc: "Resoudre des problemes complexes en les decomposant — la technique des pros.", tags: ["course", "practice"], links: [{ label: "LeetCode DP", url: "https://leetcode.com/tag/dynamic-programming/" }],
                workshop: {
                    duration: "45 min", difficulty: 3,
                    objectives: ["Comprendre la recursion et les cas de base", "Identifier les sous-problemes repetitifs", "Utiliser la memoisation pour optimiser"],
                    sections: [
                        { type: "theory", title: "Recursion et programmation dynamique", content: "**Recursion** : une fonction qui s'appelle elle-meme.\nChaque recursion a :\n1. Un **cas de base** (condition d'arret)\n2. Un **appel recursif** (probleme reduit)\n\n**Programmation dynamique** :\nQuand les sous-problemes se repetent, on stocke les resultats pour ne pas recalculer.\n- Top-down : recursion + memoisation\n- Bottom-up : iteration + tableau" },
                        { type: "code", language: "python", code: "# Fibonacci naif — O(2^n) !\ndef fib_naif(n):\n    if n <= 1:\n        return n\n    return fib_naif(n-1) + fib_naif(n-2)\n\n# Fibonacci avec memoisation — O(n)\nfrom functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib_memo(n):\n    if n <= 1:\n        return n\n    return fib_memo(n-1) + fib_memo(n-2)\n\n# Fibonacci bottom-up — O(n), O(1) espace\ndef fib_dp(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n+1):\n        a, b = b, a + b\n    return b\n\nprint(fib_dp(100))  # Instantane !", explanation: "La memoisation transforme O(2^n) en O(n). Le decorateur @lru_cache de Python le fait automatiquement." },
                        { type: "exercise", title: "Monter un escalier", instructions: "Tu montes un escalier de n marches. A chaque pas, tu peux monter 1 ou 2 marches. Combien de facons differentes peux-tu atteindre le sommet ?", starterCode: "def climb_stairs(n):\n    # Indice : c'est tres similaire a Fibonacci !\n    pass\n\nprint(climb_stairs(4))  # 5", solution: "def climb_stairs(n):\n    if n <= 2:\n        return n\n    a, b = 1, 2\n    for _ in range(3, n+1):\n        a, b = b, a + b\n    return b\n\nprint(climb_stairs(4))  # 5 (1111, 112, 121, 211, 22)", language: "python" },
                        { type: "quiz", question: "Pourquoi Fibonacci naif est-il si lent ?", choices: ["Parce que Python est lent", "Parce qu'il recalcule les memes sous-problemes des milliards de fois", "Parce qu'il utilise trop de memoire", "Parce que les nombres deviennent trop grands"], correct: 1, explanation: "fib(50) appelle fib(49) + fib(48), qui appellent chacun fib(47) + fib(46)... Le meme calcul est repete exponentiellement. La memoisation elimine ces doublons." }
                    ]
                }
            },
            { id: "5-7", title: "BFS et DFS", desc: "Breadth-first et depth-first search — parcourir des graphes.", tags: ["course", "practice"], links: [{ label: "Visualgo BFS/DFS", url: "https://visualgo.net/en/dfsbfs" }],
                workshop: {
                    duration: "40 min", difficulty: 3,
                    objectives: ["Implementer BFS avec une queue", "Implementer DFS avec une stack/recursion", "Savoir quand utiliser BFS vs DFS"],
                    sections: [
                        { type: "theory", title: "Parcourir un graphe", content: "**BFS (Breadth-First Search)** — parcours en largeur :\n- Explore niveau par niveau\n- Utilise une **queue** (FIFO)\n- Trouve le chemin le plus court\n\n**DFS (Depth-First Search)** — parcours en profondeur :\n- Explore le plus loin possible avant de revenir\n- Utilise une **stack** (LIFO) ou la recursion\n- Utile pour detecter des cycles, topological sort" },
                        { type: "code", language: "python", code: "from collections import deque\n\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['D', 'E'],\n    'C': ['F'],\n    'D': [], 'E': ['F'], 'F': []\n}\n\ndef bfs(graph, start):\n    visited = set()\n    queue = deque([start])\n    visited.add(start)\n    while queue:\n        node = queue.popleft()\n        print(node, end=\" \")\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n\ndef dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    print(start, end=\" \")\n    for neighbor in graph[start]:\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n\nprint(\"BFS:\", end=\" \"); bfs(graph, 'A')  # A B C D E F\nprint(\"\\nDFS:\", end=\" \"); dfs(graph, 'A')  # A B D E F C", explanation: "BFS explore par 'vagues' concentriques (niveau par niveau). DFS plonge le plus profondement possible avant de rebrousser chemin." },
                        { type: "quiz", question: "Quel algorithme utiliser pour trouver le chemin le plus court dans un graphe non pondere ?", choices: ["DFS", "BFS", "Binary Search", "Merge Sort"], correct: 1, explanation: "BFS garantit de trouver le chemin le plus court dans un graphe non pondere car il explore tous les noeuds a distance 1, puis 2, puis 3, etc." }
                    ]
                }
            },
            { id: "5-8", title: "PROJET : 20 problemes LeetCode", desc: "10 Easy + 10 Medium. Documente tes solutions sur GitHub.", tags: ["project", "practice"], links: [{ label: "LeetCode", url: "https://leetcode.com/" }, { label: "NeetCode Roadmap", url: "https://neetcode.io/roadmap" }],
                workshop: {
                    duration: "120 min", difficulty: 3,
                    objectives: ["Resoudre des problemes algorithmiques classiques", "Appliquer les structures de donnees apprises", "Documenter tes solutions sur GitHub"],
                    sections: [
                        { type: "theory", title: "Approche systematique", content: "Pour chaque probleme LeetCode :\n\n1. **Comprendre** : lis l'enonce, regarde les exemples\n2. **Planifier** : quel pattern/structure utiliser ?\n3. **Coder** : ecris la solution\n4. **Tester** : verifie avec les cas limites\n5. **Optimiser** : peut-on faire mieux ?\n6. **Documenter** : explique ta demarche\n\nPatterns courants :\n- Two pointers\n- Sliding window\n- Hash map pour O(1) lookup\n- Stack pour les parentheses/matching\n- BFS/DFS pour les arbres/graphes" },
                        { type: "code", language: "python", code: "# Exemple : Two Sum (LeetCode #1)\n# Trouver deux nombres dont la somme = target\n\n# Brute force — O(n^2)\ndef two_sum_brute(nums, target):\n    for i in range(len(nums)):\n        for j in range(i+1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n\n# Optimise avec hash map — O(n)\ndef two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n\nprint(two_sum([2,7,11,15], 9))  # [0, 1]", explanation: "Two Sum est le probleme #1 sur LeetCode. L'astuce du hash map (dictionnaire) transforme O(n²) en O(n)." },
                        { type: "exercise", title: "Ta liste de 20 problemes", instructions: "Commence par ces 10 Easy :\n1. Two Sum, 2. Valid Parentheses, 3. Merge Two Sorted Lists, 4. Best Time to Buy/Sell Stock, 5. Valid Palindrome, 6. Invert Binary Tree, 7. Maximum Subarray, 8. Contains Duplicate, 9. Climbing Stairs, 10. Roman to Integer\n\nPuis 10 Medium :\n1. Add Two Numbers, 2. 3Sum, 3. Container With Most Water, 4. Group Anagrams, 5. Product of Array Except Self, 6. Binary Tree Level Order, 7. Validate BST, 8. Coin Change, 9. Number of Islands, 10. Longest Substring Without Repeating", starterCode: "# Cree un repo GitHub 'leetcode-solutions'\n# Pour chaque probleme, cree un fichier\n# avec l'enonce, ta solution et la complexite", solution: "# Structure recommandee du repo :\n# leetcode-solutions/\n#   easy/\n#     001_two_sum.py\n#     020_valid_parentheses.py\n#     ...\n#   medium/\n#     002_add_two_numbers.py\n#     ...\n#   README.md (avec tableau de progression)", language: "python" }
                    ]
                }
            }
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
            { id: "6-1", title: "SQL : les bases", desc: "SELECT, INSERT, UPDATE, DELETE — interroger une base de donnees relationnelle.", tags: ["course", "practice"], links: [{ label: "SQLBolt (interactif)", url: "https://sqlbolt.com/" }, { label: "Khan Academy SQL", url: "https://www.khanacademy.org/computing/computer-programming/sql" }],
                workshop: {
                    duration: "45 min", difficulty: 2,
                    objectives: ["Ecrire des requetes SELECT avec filtres", "Inserer, modifier et supprimer des donnees", "Utiliser les jointures entre tables"],
                    sections: [
                        { type: "theory", title: "SQL : parler aux bases de donnees", content: "SQL (Structured Query Language) est le langage universel pour interagir avec les bases de donnees relationnelles.\n\nLes 4 operations CRUD :\n- **C**reate : `INSERT INTO`\n- **R**ead : `SELECT`\n- **U**pdate : `UPDATE`\n- **D**elete : `DELETE`" },
                        { type: "code", language: "sql", code: "-- Creer une table\nCREATE TABLE users (\n    id INTEGER PRIMARY KEY,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE,\n    age INTEGER\n);\n\n-- Inserer\nINSERT INTO users (name, email, age)\nVALUES ('Alice', 'alice@mail.com', 25);\n\n-- Lire\nSELECT name, email FROM users WHERE age >= 18;\nSELECT * FROM users ORDER BY name LIMIT 10;\n\n-- Compter et grouper\nSELECT age, COUNT(*) as total\nFROM users\nGROUP BY age\nHAVING total > 1;\n\n-- Jointure\nSELECT users.name, orders.product\nFROM users\nJOIN orders ON users.id = orders.user_id;", explanation: "Les jointures (JOIN) sont la puissance des bases relationnelles : elles permettent de combiner des donnees de plusieurs tables en une seule requete." },
                        { type: "exercise", title: "Requetes SQL", instructions: "Ecris les requetes pour :\n1. Selectionner tous les utilisateurs de plus de 20 ans tries par nom\n2. Compter le nombre d'utilisateurs par tranche d'age (< 18, 18-30, > 30)\n3. Trouver les utilisateurs qui n'ont passe aucune commande", starterCode: "-- 1. Utilisateurs > 20 ans\n\n-- 2. Compter par tranche\n\n-- 3. Utilisateurs sans commande", solution: "-- 1.\nSELECT * FROM users WHERE age > 20 ORDER BY name;\n\n-- 2.\nSELECT\n    CASE\n        WHEN age < 18 THEN 'Mineur'\n        WHEN age <= 30 THEN '18-30'\n        ELSE '30+'\n    END as tranche,\n    COUNT(*) as total\nFROM users GROUP BY tranche;\n\n-- 3.\nSELECT users.*\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id\nWHERE orders.id IS NULL;", language: "sql" },
                        { type: "quiz", question: "Quelle clause SQL filtre les resultats APRES un GROUP BY ?", choices: ["WHERE", "HAVING", "FILTER", "LIMIT"], correct: 1, explanation: "WHERE filtre avant le groupement, HAVING filtre apres. Ex: HAVING COUNT(*) > 5 garde les groupes avec plus de 5 elements." }
                    ]
                }
            },
            { id: "6-2", title: "Concevoir une base de donnees", desc: "Tables, relations, cles primaires/etrangeres — modeliser tes donnees.", tags: ["course", "article"], links: [{ label: "DB Designer", url: "https://www.dbdesigner.net/" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Identifier les entites et relations", "Concevoir un schema normalise", "Utiliser les cles primaires et etrangeres"],
                    sections: [
                        { type: "theory", title: "Modelisation de donnees", content: "Concevoir une base de donnees, c'est identifier :\n1. **Les entites** : quelles choses existent ? (users, products, orders)\n2. **Les attributs** : quelles infos pour chaque entite ? (name, price)\n3. **Les relations** : comment sont-elles liees ?\n   - 1:1 — un user a un profil\n   - 1:N — un user a plusieurs orders\n   - N:N — un student a plusieurs courses ET un course a plusieurs students\n\nRegle d'or : chaque information doit exister en UN seul endroit (normalisation)." },
                        { type: "code", language: "sql", code: "-- Schema pour un blog\nCREATE TABLE authors (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    bio TEXT\n);\n\nCREATE TABLE posts (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    title TEXT NOT NULL,\n    content TEXT,\n    author_id INTEGER,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (author_id) REFERENCES authors(id)\n);\n\nCREATE TABLE tags (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT UNIQUE NOT NULL\n);\n\n-- Table de liaison pour N:N\nCREATE TABLE post_tags (\n    post_id INTEGER,\n    tag_id INTEGER,\n    PRIMARY KEY (post_id, tag_id),\n    FOREIGN KEY (post_id) REFERENCES posts(id),\n    FOREIGN KEY (tag_id) REFERENCES tags(id)\n);", explanation: "La relation N:N (posts ↔ tags) necessite une table de liaison (post_tags). Chaque post peut avoir plusieurs tags, et chaque tag peut etre sur plusieurs posts." },
                        { type: "quiz", question: "Comment modelise-t-on une relation N:N en base de donnees ?", choices: ["Avec une cle etrangere simple", "Avec une table de liaison (junction table)", "C'est impossible en SQL", "Avec un champ JSON"], correct: 1, explanation: "Une relation N:N (many-to-many) necessite une table intermediaire qui contient les cles etrangeres des deux tables liees." }
                    ]
                }
            },
            { id: "6-3", title: "APIs REST : comprendre et consommer", desc: "GET, POST, PUT, DELETE — les verbes HTTP et comment parler a une API.", tags: ["course", "practice"], links: [{ label: "REST API Tutorial", url: "https://restfulapi.net/" }, { label: "Postman Learning", url: "https://learning.postman.com/" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Comprendre l'architecture REST", "Tester des APIs avec curl/Postman", "Gerer l'authentification par token"],
                    sections: [
                        { type: "theory", title: "REST : des conventions pour les APIs", content: "REST est un ensemble de conventions pour structurer les APIs web :\n\n| Methode | Route | Action |\n|---------|-------|--------|\n| GET | /users | Lister tous |\n| GET | /users/1 | Lire un |\n| POST | /users | Creer |\n| PUT | /users/1 | Modifier |\n| DELETE | /users/1 | Supprimer |\n\nCodes de reponse :\n- 200 : OK\n- 201 : Created\n- 400 : Bad Request\n- 401 : Unauthorized\n- 404 : Not Found\n- 500 : Server Error" },
                        { type: "code", language: "python", code: "import requests\n\nBASE = \"https://jsonplaceholder.typicode.com\"\n\n# GET — Lire\nusers = requests.get(f\"{BASE}/users\").json()\nprint(f\"{len(users)} utilisateurs\")\n\n# POST — Creer\nnew_post = {\n    \"title\": \"Mon article\",\n    \"body\": \"Contenu de l'article\",\n    \"userId\": 1\n}\nresp = requests.post(f\"{BASE}/posts\", json=new_post)\nprint(resp.status_code)  # 201\n\n# PUT — Modifier\nupdated = {\"title\": \"Titre modifie\"}\nresp = requests.put(f\"{BASE}/posts/1\", json=updated)\n\n# DELETE — Supprimer\nresp = requests.delete(f\"{BASE}/posts/1\")\nprint(resp.status_code)  # 200\n\n# Avec authentification\nheaders = {\"Authorization\": \"Bearer mon_token_ici\"}\nresp = requests.get(\"https://api.example.com/me\", headers=headers)", explanation: "Le format JSON est le standard pour les echanges API. Le header Authorization est utilise pour s'authentifier." },
                        { type: "quiz", question: "Quel code HTTP indique que la ressource n'a pas ete trouvee ?", choices: ["400", "401", "404", "500"], correct: 2, explanation: "404 Not Found signifie que l'URL demandee n'existe pas. 400 = requete invalide, 401 = non authentifie, 500 = erreur serveur." }
                    ]
                }
            },
            { id: "6-4", title: "Creer une API avec Flask/FastAPI", desc: "Construis ta propre API en Python — ton premier backend.", tags: ["course", "project"], links: [{ label: "FastAPI Tutorial", url: "https://fastapi.tiangolo.com/tutorial/" }, { label: "Flask Tutorial", url: "https://flask.palletsprojects.com/en/stable/tutorial/" }],
                workshop: {
                    duration: "50 min", difficulty: 2,
                    objectives: ["Creer une API REST avec FastAPI", "Definir des routes et des schemas", "Connecter a une base de donnees simple"],
                    sections: [
                        { type: "theory", title: "FastAPI : API rapide en Python", content: "FastAPI est un framework Python moderne pour creer des APIs. Avantages :\n- Tres rapide (performances)\n- Documentation automatique (Swagger UI)\n- Validation des donnees automatique\n- Type hints Python natifs\n\nInstallation : `pip install fastapi uvicorn`" },
                        { type: "code", language: "python", code: "from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\n# \"Base de donnees\" en memoire\ntodos = []\n\nclass Todo(BaseModel):\n    title: str\n    done: bool = False\n\n@app.get(\"/todos\")\ndef list_todos():\n    return todos\n\n@app.post(\"/todos\", status_code=201)\ndef create_todo(todo: Todo):\n    todos.append(todo.dict())\n    return todo\n\n@app.put(\"/todos/{todo_id}\")\ndef update_todo(todo_id: int, todo: Todo):\n    if todo_id >= len(todos):\n        raise HTTPException(404, \"Todo not found\")\n    todos[todo_id] = todo.dict()\n    return todo\n\n@app.delete(\"/todos/{todo_id}\")\ndef delete_todo(todo_id: int):\n    if todo_id >= len(todos):\n        raise HTTPException(404, \"Todo not found\")\n    return todos.pop(todo_id)\n\n# Lancer : uvicorn main:app --reload\n# Docs auto : http://localhost:8000/docs", explanation: "Pydantic (BaseModel) valide automatiquement les donnees entrantes. Si le JSON ne correspond pas au schema, FastAPI renvoie une erreur 422." },
                        { type: "info", variant: "tip", content: "Apres avoir lance ton API, va sur http://localhost:8000/docs pour voir la documentation Swagger interactive. Tu peux tester toutes tes routes directement depuis le navigateur !" },
                        { type: "quiz", question: "Quel decorateur FastAPI utilise-t-on pour une route POST ?", choices: ["@app.get()", "@app.post()", "@app.create()", "@app.send()"], correct: 1, explanation: "@app.post(\"/route\") associe une fonction a une requete HTTP POST sur la route specifiee. Le decorateur correspond au verbe HTTP." }
                    ]
                }
            },
            { id: "6-5", title: "NoSQL et bases vectorielles", desc: "MongoDB, ChromaDB, Pinecone — les bases de donnees modernes pour l'IA.", tags: ["article", "tool"], links: [{ label: "MongoDB University", url: "https://learn.mongodb.com/" }, { label: "ChromaDB Docs", url: "https://docs.trychroma.com/" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Comprendre la difference entre SQL et NoSQL", "Decouvrir les bases vectorielles", "Savoir quand utiliser chaque type"],
                    sections: [
                        { type: "theory", title: "Au-dela du SQL", content: "**NoSQL** = bases de donnees non relationnelles :\n\n- **Document** (MongoDB) : stocke des JSON. Flexible, pas de schema fixe.\n- **Cle-valeur** (Redis) : ultra-rapide, cache.\n- **Graphe** (Neo4j) : relations complexes.\n- **Vectorielle** (ChromaDB, Pinecone) : recherche par similarite.\n\n**Bases vectorielles** : essentielles pour l'IA !\n- Stockent des embeddings (vecteurs numeriques)\n- Permettent la recherche semantique\n- Base du RAG (Retrieval-Augmented Generation)" },
                        { type: "code", language: "python", code: "# ChromaDB — base vectorielle locale\nimport chromadb\n\nclient = chromadb.Client()\ncollection = client.create_collection(\"mes_docs\")\n\n# Ajouter des documents\ncollection.add(\n    documents=[\n        \"Python est un langage de programmation\",\n        \"Les chats sont des animaux domestiques\",\n        \"L'intelligence artificielle utilise des reseaux de neurones\"\n    ],\n    ids=[\"doc1\", \"doc2\", \"doc3\"]\n)\n\n# Recherche semantique !\nresults = collection.query(\n    query_texts=[\"apprentissage automatique\"],\n    n_results=2\n)\nprint(results[\"documents\"])\n# Retourne le doc sur l'IA (semantiquement proche)\n# meme si les mots sont differents !", explanation: "La recherche vectorielle trouve des documents par SENS, pas par mots-cles exacts. C'est la base du RAG pour les agents IA." },
                        { type: "quiz", question: "Quel type de base de donnees est essentiel pour le RAG (Retrieval-Augmented Generation) ?", choices: ["SQL", "Cle-valeur", "Vectorielle", "Graphe"], correct: 2, explanation: "Le RAG utilise des bases vectorielles pour trouver les documents les plus pertinents par recherche semantique, puis les passe au LLM comme contexte." }
                    ]
                }
            },
            { id: "6-6", title: "PROJET : API CRUD complete", desc: "Cree une API avec base de donnees — un mini-backend fonctionnel.", tags: ["project"], links: [{ label: "FastAPI Full Stack", url: "https://fastapi.tiangolo.com/tutorial/" }],
                workshop: {
                    duration: "60 min", difficulty: 2,
                    objectives: ["Creer une API REST complete", "Connecter FastAPI a SQLite", "Tester toutes les routes"],
                    sections: [
                        { type: "theory", title: "API + Base de donnees", content: "Ce projet combine tout ce que tu as appris en Phase 6 :\n- FastAPI pour les routes\n- SQLite pour le stockage\n- Pydantic pour la validation\n- CRUD complet (Create, Read, Update, Delete)\n\nChoisis un domaine : bibliotheque de livres, liste de contacts, gestionnaire de taches, catalogue de recettes..." },
                        { type: "code", language: "python", code: "# Structure du projet\n# my-api/\n#   main.py      — routes FastAPI\n#   database.py  — connexion SQLite\n#   models.py    — schemas Pydantic\n\n# database.py\nimport sqlite3\n\ndef get_db():\n    conn = sqlite3.connect('app.db')\n    conn.row_factory = sqlite3.Row\n    return conn\n\ndef init_db():\n    db = get_db()\n    db.execute('''\n        CREATE TABLE IF NOT EXISTS books (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            title TEXT NOT NULL,\n            author TEXT NOT NULL,\n            year INTEGER\n        )\n    ''')\n    db.commit()\n    db.close()\n\ninit_db()", explanation: "sqlite3.Row permet d'acceder aux colonnes par nom (row['title']) au lieu d'index. SQLite est ideal pour les petits projets — pas de serveur a installer." },
                        { type: "exercise", title: "Ton API CRUD", instructions: "Cree une API complete avec :\n1. POST /items — creer un item\n2. GET /items — lister tous les items\n3. GET /items/{id} — un item par ID\n4. PUT /items/{id} — modifier un item\n5. DELETE /items/{id} — supprimer un item\n\nUtilise FastAPI + SQLite.", starterCode: "# main.py\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\n# Cree tes 5 routes CRUD", solution: "# Le code complet est trop long pour cette solution\n# Criteres de reussite :\n# - 5 routes fonctionnelles\n# - Validation avec Pydantic\n# - Stockage dans SQLite\n# - Gestion d'erreurs (404 si pas trouve)\n# - Documentation Swagger accessible", language: "python" }
                    ]
                }
            }
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
            { id: "7-1", title: "C'est quoi l'IA et le ML ?", desc: "Supervised/unsupervised learning, deep learning — la vue d'ensemble.", tags: ["video", "article"], links: [{ label: "3Blue1Brown Neural Networks", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" }, { label: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" }],
                workshop: {
                    duration: "35 min", difficulty: 2,
                    objectives: ["Comprendre les types d'apprentissage automatique", "Distinguer IA, ML et Deep Learning", "Identifier les cas d'usage courants"],
                    sections: [
                        { type: "theory", title: "IA > ML > Deep Learning", content: "**Intelligence Artificielle** : tout systeme qui imite l'intelligence humaine\n\n**Machine Learning** : l'IA apprend a partir de donnees (au lieu d'etre programmee explicitement)\n- **Supervise** : donnees etiquetees (spam/pas spam)\n- **Non supervise** : trouver des patterns (clustering)\n- **Renforcement** : apprendre par essai-erreur (jeux, robots)\n\n**Deep Learning** : ML avec des reseaux de neurones profonds\n- Images : CNN\n- Texte : Transformers (GPT, Claude)\n- Sequence : RNN, LSTM" },
                        { type: "code", language: "text", code: "Intelligence Artificielle\n├── Machine Learning\n│   ├── Supervise\n│   │   ├── Classification (spam, images)\n│   │   └── Regression (prix, temperature)\n│   ├── Non-supervise\n│   │   ├── Clustering (groupes clients)\n│   │   └── Reduction de dimension (PCA)\n│   └── Renforcement\n│       └── Agents, jeux, robots\n└── Deep Learning\n    ├── CNN (images)\n    ├── RNN/LSTM (sequences)\n    └── Transformers (texte, LLMs)", explanation: "Les Transformers (2017) ont revolutionne l'IA. ChatGPT, Claude, Gemini sont tous bases sur cette architecture." },
                        { type: "quiz", question: "Quel type de ML utilise des donnees etiquetees pour apprendre ?", choices: ["Non-supervise", "Supervise", "Renforcement", "Auto-supervise"], correct: 1, explanation: "L'apprentissage supervise utilise des paires (entree, label). Le modele apprend la relation entre les deux. Ex: (image de chat, 'chat'), (email, 'spam')." }
                    ]
                }
            },
            { id: "7-2", title: "Python pour la data : NumPy & Pandas", desc: "Manipuler des donnees numeriques et des tableaux — la base de tout en data science.", tags: ["course", "practice"], links: [{ label: "Kaggle Pandas", url: "https://www.kaggle.com/learn/pandas" }, { label: "NumPy Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html" }],
                workshop: {
                    duration: "45 min", difficulty: 2,
                    objectives: ["Creer et manipuler des arrays NumPy", "Charger et explorer des donnees avec Pandas", "Filtrer, grouper et agreger des donnees"],
                    sections: [
                        { type: "theory", title: "NumPy et Pandas : les piliers de la data", content: "**NumPy** : calcul numerique rapide\n- Arrays multidimensionnels\n- Operations vectorisees (pas de boucles for !)\n- Base de tout l'ecosysteme data Python\n\n**Pandas** : manipulation de donnees tabulaires\n- DataFrame = tableau avec noms de colonnes\n- Lecture de CSV, Excel, JSON, SQL\n- Filtrage, groupement, agregation" },
                        { type: "code", language: "python", code: "import numpy as np\nimport pandas as pd\n\n# NumPy\narr = np.array([1, 2, 3, 4, 5])\nprint(arr * 2)        # [2, 4, 6, 8, 10]\nprint(arr.mean())     # 3.0\nprint(arr[arr > 3])   # [4, 5]\n\nmatrix = np.random.randn(3, 4)  # Matrice 3x4 aleatoire\n\n# Pandas\ndf = pd.DataFrame({\n    'nom': ['Alice', 'Bob', 'Charlie', 'Diana'],\n    'age': [25, 30, 35, 28],\n    'ville': ['Paris', 'Lyon', 'Paris', 'Lyon'],\n    'salaire': [45000, 52000, 61000, 48000]\n})\n\n# Explorer\nprint(df.describe())          # Stats descriptives\nprint(df[df['age'] > 28])     # Filtrer\n\n# Grouper\nprint(df.groupby('ville')['salaire'].mean())\n# Paris    53000\n# Lyon     50000", explanation: "Pandas est le couteau suisse de la data en Python. 90% du travail de data science commence par charger et nettoyer des donnees avec Pandas." },
                        { type: "exercise", title: "Analyse de donnees", instructions: "Avec le DataFrame ci-dessous, trouve :\n1. L'age moyen par ville\n2. Les personnes avec un salaire au-dessus de la moyenne\n3. Le nombre de personnes par ville", starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'nom': ['Alice','Bob','Charlie','Diana','Eve'],\n    'age': [25, 30, 35, 28, 32],\n    'ville': ['Paris','Lyon','Paris','Lyon','Paris'],\n    'salaire': [45000, 52000, 61000, 48000, 55000]\n})\n\n# Ecris tes analyses", solution: "# 1. Age moyen par ville\nprint(df.groupby('ville')['age'].mean())\n\n# 2. Salaire au-dessus de la moyenne\nmoy = df['salaire'].mean()\nprint(df[df['salaire'] > moy])\n\n# 3. Nombre par ville\nprint(df['ville'].value_counts())", language: "python" },
                        { type: "quiz", question: "Pourquoi NumPy est-il plus rapide que les listes Python pour le calcul ?", choices: ["Il utilise le GPU", "Il stocke les donnees de facon contigue en memoire et utilise des operations vectorisees en C", "Il utilise plusieurs threads", "Il compresse les donnees"], correct: 1, explanation: "NumPy stocke les donnees de facon contigue en memoire (comme un array C), ce qui permet au CPU d'utiliser son cache efficacement. Les operations sont implementees en C, pas en Python." }
                    ]
                }
            },
            { id: "7-3", title: "Visualisation : Matplotlib & Seaborn", desc: "Creer des graphiques pour comprendre tes donnees — histogrammes, scatter plots, heatmaps.", tags: ["course", "practice"], links: [{ label: "Kaggle Data Viz", url: "https://www.kaggle.com/learn/data-visualization" }],
                workshop: {
                    duration: "35 min", difficulty: 2,
                    objectives: ["Creer des graphiques basiques avec Matplotlib", "Utiliser Seaborn pour des visualisations statistiques", "Choisir le bon type de graphique"],
                    sections: [
                        { type: "theory", title: "Visualiser pour comprendre", content: "Un bon graphique vaut mille statistiques. Types courants :\n\n- **Line plot** : evolution dans le temps\n- **Bar chart** : comparaison de categories\n- **Scatter plot** : relation entre 2 variables\n- **Histogram** : distribution d'une variable\n- **Heatmap** : correlations entre variables\n- **Box plot** : distribution + outliers" },
                        { type: "code", language: "python", code: "import matplotlib.pyplot as plt\nimport seaborn as sns\nimport numpy as np\n\n# Line plot\nx = np.linspace(0, 10, 100)\nplt.plot(x, np.sin(x), label='sin')\nplt.plot(x, np.cos(x), label='cos')\nplt.legend()\nplt.title('Fonctions trigonometriques')\nplt.show()\n\n# Seaborn : plus joli par defaut\nimport pandas as pd\ndf = pd.DataFrame({\n    'x': np.random.randn(100),\n    'y': np.random.randn(100),\n    'cat': np.random.choice(['A','B'], 100)\n})\n\nsns.scatterplot(data=df, x='x', y='y', hue='cat')\nplt.title('Scatter plot par categorie')\nplt.show()\n\n# Heatmap de correlation\nsns.heatmap(df[['x','y']].corr(), annot=True, cmap='coolwarm')\nplt.show()", explanation: "Seaborn est construit au-dessus de Matplotlib. Il produit des graphiques plus beaux par defaut et s'integre parfaitement avec Pandas." },
                        { type: "quiz", question: "Quel type de graphique est le plus adapte pour visualiser la correlation entre deux variables numeriques ?", choices: ["Bar chart", "Pie chart", "Scatter plot", "Line plot"], correct: 2, explanation: "Un scatter plot (nuage de points) montre directement la relation entre deux variables. On peut y voir la direction, la force et la forme de la correlation." }
                    ]
                }
            },
            { id: "7-4", title: "Premier modele ML avec scikit-learn", desc: "Regression, classification, train/test split — ton premier modele predictif.", tags: ["course", "practice"], links: [{ label: "scikit-learn Tutorial", url: "https://scikit-learn.org/stable/tutorial/" }, { label: "Kaggle Intro ML", url: "https://www.kaggle.com/learn/intro-to-machine-learning" }],
                workshop: {
                    duration: "50 min", difficulty: 2,
                    objectives: ["Preparer des donnees pour le ML", "Entrainer un modele de classification", "Evaluer les performances du modele"],
                    sections: [
                        { type: "theory", title: "Le workflow ML", content: "1. **Collecter** les donnees\n2. **Explorer** (stats, visualisations)\n3. **Preparer** (nettoyer, normaliser, encoder)\n4. **Splitter** (train/test, generalement 80/20)\n5. **Entrainer** un modele\n6. **Evaluer** (accuracy, precision, recall)\n7. **Ameliorer** (hyperparametres, features)\n\nscikit-learn fournit tout ca dans une API coherente :\n```python\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\n```" },
                        { type: "code", language: "python", code: "from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, classification_report\nfrom sklearn.datasets import load_iris\n\n# 1. Charger les donnees\niris = load_iris()\nX, y = iris.data, iris.target\n\n# 2. Splitter\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\n# 3. Entrainer\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\n\n# 4. Predire\npredictions = model.predict(X_test)\n\n# 5. Evaluer\nprint(f\"Accuracy : {accuracy_score(y_test, predictions):.2%}\")\nprint(classification_report(y_test, predictions,\n      target_names=iris.target_names))", explanation: "Toujours evaluer sur des donnees que le modele n'a JAMAIS vues (test set). Sinon tu mesures la memorisation, pas la generalisation." },
                        { type: "info", variant: "warning", content: "Ne jamais evaluer un modele sur les donnees d'entrainement ! C'est comme donner les reponses a un examen et dire que l'eleve est bon. Le test set doit rester invisible pendant l'entrainement." },
                        { type: "quiz", question: "Pourquoi split-on les donnees en train/test ?", choices: ["Pour accelerer l'entrainement", "Pour avoir plus de donnees", "Pour evaluer la capacite du modele a generaliser sur des donnees inedites", "Parce que scikit-learn l'exige"], correct: 2, explanation: "Le test set simule des donnees du monde reel que le modele n'a jamais vues. Si le modele performe bien sur le test set, il generalisera bien en production." }
                    ]
                }
            },
            { id: "7-5", title: "Deep Learning : reseaux de neurones", desc: "Perceptron, backpropagation, CNN, RNN — comprendre le deep learning.", tags: ["course", "video"], links: [{ label: "fast.ai Course", url: "https://course.fast.ai/" }, { label: "Andrew Ng ML (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-introduction" }],
                workshop: {
                    duration: "45 min", difficulty: 3,
                    objectives: ["Comprendre le fonctionnement d'un neurone artificiel", "Visualiser un reseau de neurones", "Comprendre la backpropagation intuitivement"],
                    sections: [
                        { type: "theory", title: "Reseaux de neurones", content: "Un reseau de neurones est compose de couches de neurones artificiels :\n\n**Neurone** : recoit des entrees, les multiplie par des poids, applique une fonction d'activation, et produit une sortie.\n\n**Couches** :\n- Input layer : recoit les donnees\n- Hidden layers : apprennent des representations\n- Output layer : produit la prediction\n\n**Entrainement** (backpropagation) :\n1. Forward pass : calculer la prediction\n2. Calculer l'erreur (loss)\n3. Backward pass : ajuster les poids pour reduire l'erreur\n4. Repeter des milliers de fois" },
                        { type: "code", language: "python", code: "# Un neurone simple en NumPy\nimport numpy as np\n\ndef sigmoid(x):\n    return 1 / (1 + np.exp(-x))\n\n# Donnees : OR logique\nX = np.array([[0,0], [0,1], [1,0], [1,1]])\ny = np.array([[0], [1], [1], [1]])\n\n# Poids aleatoires\nnp.random.seed(42)\nweights = np.random.randn(2, 1)\nbias = np.random.randn(1)\n\n# Entrainement\nfor epoch in range(10000):\n    # Forward\n    output = sigmoid(X @ weights + bias)\n    # Error\n    error = y - output\n    # Backward (gradient descent)\n    adjustments = error * output * (1 - output)\n    weights += X.T @ adjustments * 0.1\n    bias += np.sum(adjustments) * 0.1\n\nprint(\"Predictions :\")\nprint(np.round(sigmoid(X @ weights + bias), 2))\n# [[0.05], [0.95], [0.95], [1.0]]", explanation: "Ce neurone unique apprend la fonction OR. Les reseaux modernes ont des millions de neurones repartis en dizaines de couches." },
                        { type: "quiz", question: "Qu'est-ce que la backpropagation ?", choices: ["Le processus de collecte des donnees", "L'algorithme qui propage l'erreur en arriere pour ajuster les poids", "La validation du modele", "Le preprocessing des donnees"], correct: 1, explanation: "La backpropagation calcule le gradient de l'erreur par rapport a chaque poids, puis ajuste les poids dans la direction qui reduit l'erreur. C'est le coeur de l'entrainement." }
                    ]
                }
            },
            { id: "7-6", title: "PyTorch ou TensorFlow : premier reseau", desc: "Construis et entraine un reseau de neurones — classification d'images, texte.", tags: ["course", "practice"], links: [{ label: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/beginner/basics/intro.html" }, { label: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials" }],
                workshop: {
                    duration: "50 min", difficulty: 3,
                    objectives: ["Construire un reseau avec PyTorch", "Entrainer sur un dataset reel", "Comprendre le training loop"],
                    sections: [
                        { type: "theory", title: "PyTorch : le framework de Deep Learning", content: "PyTorch est le framework DL le plus populaire (recherche et industrie).\n\nConcepts cles :\n- **Tensor** : equivalent de ndarray NumPy, mais avec GPU\n- **nn.Module** : bloc de construction pour les reseaux\n- **Optimizer** : ajuste les poids (Adam, SGD)\n- **Loss function** : mesure l'erreur (CrossEntropy, MSE)\n- **Training loop** : forward → loss → backward → step" },
                        { type: "code", language: "python", code: "import torch\nimport torch.nn as nn\nfrom torch.utils.data import DataLoader\nfrom torchvision import datasets, transforms\n\n# 1. Donnees (MNIST : chiffres ecrits a la main)\ntransform = transforms.ToTensor()\ntrain_data = datasets.MNIST('data', train=True, download=True, transform=transform)\ntrain_loader = DataLoader(train_data, batch_size=64, shuffle=True)\n\n# 2. Modele\nmodel = nn.Sequential(\n    nn.Flatten(),\n    nn.Linear(784, 128),\n    nn.ReLU(),\n    nn.Linear(128, 10)\n)\n\n# 3. Entrainement\noptimizer = torch.optim.Adam(model.parameters(), lr=0.001)\nloss_fn = nn.CrossEntropyLoss()\n\nfor epoch in range(3):\n    for images, labels in train_loader:\n        predictions = model(images)\n        loss = loss_fn(predictions, labels)\n\n        optimizer.zero_grad()\n        loss.backward()\n        optimizer.step()\n\n    print(f\"Epoch {epoch+1}, Loss: {loss.item():.4f}\")", explanation: "Ce reseau simple atteint ~97% de precision sur MNIST en quelques secondes. Les architectures modernes (ResNet, Transformer) utilisent les memes principes." },
                        { type: "quiz", question: "Quelle est la fonction d'un optimizer en deep learning ?", choices: ["Charger les donnees", "Ajuster les poids du reseau pour minimiser l'erreur", "Evaluer le modele", "Preprocesser les images"], correct: 1, explanation: "L'optimizer (ex: Adam, SGD) met a jour les poids du reseau en utilisant les gradients calcules par la backpropagation, dans le but de minimiser la loss function." }
                    ]
                }
            },
            { id: "7-7", title: "Evaluation de modeles", desc: "Accuracy, precision, recall, F1, overfitting — savoir si ton modele est bon.", tags: ["course", "article"], links: [{ label: "Kaggle ML Intermediate", url: "https://www.kaggle.com/learn/intermediate-machine-learning" }],
                workshop: {
                    duration: "35 min", difficulty: 2,
                    objectives: ["Connaitre les metriques de classification", "Detecter l'overfitting", "Utiliser la cross-validation"],
                    sections: [
                        { type: "theory", title: "Evaluer un modele ML", content: "**Metriques de classification** :\n- **Accuracy** : % de predictions correctes (piege si classes desequilibrees !)\n- **Precision** : parmi les positifs predits, combien sont vrais ?\n- **Recall** : parmi les vrais positifs, combien sont detectes ?\n- **F1** : moyenne harmonique de precision et recall\n\n**Overfitting** : le modele memorise les donnees d'entrainement au lieu d'apprendre des patterns generaux.\nSignes : haute accuracy sur train, basse sur test.\n\n**Solutions** : plus de donnees, regularisation, dropout, early stopping, cross-validation." },
                        { type: "code", language: "python", code: "from sklearn.metrics import (\n    accuracy_score, precision_score,\n    recall_score, f1_score,\n    confusion_matrix, classification_report\n)\nfrom sklearn.model_selection import cross_val_score\n\n# Metriques\ny_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]\ny_pred = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]\n\nprint(f\"Accuracy:  {accuracy_score(y_true, y_pred):.2%}\")\nprint(f\"Precision: {precision_score(y_true, y_pred):.2%}\")\nprint(f\"Recall:    {recall_score(y_true, y_pred):.2%}\")\nprint(f\"F1:        {f1_score(y_true, y_pred):.2%}\")\n\nprint(confusion_matrix(y_true, y_pred))\n\n# Cross-validation (plus fiable que train/test simple)\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nmodel = RandomForestClassifier()\nscores = cross_val_score(model, X, y, cv=5)\nprint(f\"CV Accuracy: {scores.mean():.2%} (+/- {scores.std():.2%})\")", explanation: "La cross-validation divise les donnees en K folds et entraine K modeles differents. C'est plus fiable qu'un seul split train/test." },
                        { type: "quiz", question: "Si ton modele a 99% d'accuracy sur le train set mais 60% sur le test set, quel est le probleme ?", choices: ["Underfitting", "Overfitting", "Les donnees sont mauvaises", "Le modele est trop simple"], correct: 1, explanation: "Un ecart important entre train et test accuracy indique de l'overfitting : le modele a memorise les donnees d'entrainement au lieu d'apprendre des patterns generalisables." }
                    ]
                }
            },
            { id: "7-8", title: "PROJET : Competition Kaggle", desc: "Participe a une competition Kaggle pour debutants — Titanic ou House Prices.", tags: ["project", "practice"], links: [{ label: "Kaggle Titanic", url: "https://www.kaggle.com/c/titanic" }, { label: "Kaggle House Prices", url: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques" }],
                workshop: {
                    duration: "90 min", difficulty: 3,
                    objectives: ["Participer a une competition Kaggle", "Appliquer le workflow ML complet", "Soumettre des predictions et ameliorer ton score"],
                    sections: [
                        { type: "theory", title: "Ta premiere competition Kaggle", content: "Le Titanic challenge est LE classique pour debuter :\n- Donnees : passagers du Titanic\n- Objectif : predire qui a survecu\n- Features : age, sexe, classe, prix du billet...\n\nWorkflow :\n1. Telecharger les donnees\n2. Explorer et visualiser\n3. Nettoyer (valeurs manquantes)\n4. Feature engineering\n5. Entrainer plusieurs modeles\n6. Soumettre les predictions\n7. Ameliorer et recommencer" },
                        { type: "code", language: "python", code: "import pandas as pd\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import cross_val_score\n\n# 1. Charger\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\n\n# 2. Explorer\nprint(train.describe())\nprint(train.isnull().sum())\n\n# 3. Preparer\nfeatures = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare']\ntrain['Sex'] = train['Sex'].map({'male': 0, 'female': 1})\ntrain['Age'].fillna(train['Age'].median(), inplace=True)\n\nX = train[features]\ny = train['Survived']\n\n# 4. Entrainer\nmodel = RandomForestClassifier(n_estimators=100)\nscores = cross_val_score(model, X, y, cv=5)\nprint(f\"CV Score: {scores.mean():.2%}\")\n\n# 5. Predire et soumettre\nmodel.fit(X, y)\ntest['Sex'] = test['Sex'].map({'male': 0, 'female': 1})\ntest['Age'].fillna(test['Age'].median(), inplace=True)\ntest['Fare'].fillna(test['Fare'].median(), inplace=True)\n\npreds = model.predict(test[features])\nsubmission = pd.DataFrame({'PassengerId': test['PassengerId'], 'Survived': preds})\nsubmission.to_csv('submission.csv', index=False)", explanation: "Ce code de base donne ~78% accuracy. Pour ameliorer : ajoute des features (titre extrait du nom, famille), essaie d'autres modeles (XGBoost, LightGBM)." },
                        { type: "exercise", title: "Ameliore ton score", instructions: "En partant du code de base, essaie d'ameliorer ton score :\n1. Extrais le titre du nom (Mr, Mrs, Miss...)\n2. Cree une feature 'taille de famille'\n3. Essaie un GradientBoosting ou XGBoost\n4. Vise > 80% accuracy", starterCode: "# Idees d'amelioration :\n# train['Title'] = train['Name'].str.extract(' ([A-Za-z]+)\\.', expand=False)\n# train['FamilySize'] = train['SibSp'] + train['Parch'] + 1", solution: "# Il n'y a pas une seule bonne reponse !\n# Criteres de reussite :\n# - Au moins 3 features ajoutees\n# - Au moins 2 modeles testes\n# - Score CV > 80%\n# - Soumission faite sur Kaggle", language: "python" }
                    ]
                }
            }
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
            { id: "8-1", title: "Comment fonctionne un LLM", desc: "Transformers, tokens, attention, embeddings — comprendre la magie derriere ChatGPT.", tags: ["video", "article"], links: [{ label: "3Blue1Brown Transformers", url: "https://www.youtube.com/watch?v=wjZofJX0v4M" }, { label: "Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Comprendre l'architecture Transformer", "Savoir ce que sont les tokens et l'attention", "Comprendre comment un LLM genere du texte"],
                    sections: [
                        { type: "theory", title: "Anatomie d'un LLM", content: "Un LLM (Large Language Model) est un reseau de neurones entraine sur d'immenses quantites de texte pour predire le prochain mot.\n\n**Tokenisation** : le texte est decoupe en tokens (sous-mots).\n'Bonjour le monde' → ['Bon', 'jour', ' le', ' monde']\n\n**Attention** : le mecanisme cle des Transformers. Chaque token peut 'regarder' tous les autres tokens pour comprendre le contexte.\n\n**Generation** : le modele predit un token a la fois, de gauche a droite. Chaque nouveau token est ajoute au contexte pour predire le suivant." },
                        { type: "code", language: "text", code: "Input: \"Le chat dort sur le\"\n\nTokenisation:\n  [\"Le\", \" chat\", \" dort\", \" sur\", \" le\"]\n\nAttention (simplifie):\n  \"le\" → regarde \"chat\", \"dort\", \"sur\" pour comprendre le contexte\n\nPrediction du prochain token:\n  \"canape\" (0.35)\n  \"lit\" (0.25)\n  \"tapis\" (0.15)\n  \"sol\" (0.10)\n  ...\n\n→ Le modele choisit \"canape\" (ou echantillonne selon la temperature)\n\nParametres d'un LLM:\n  - GPT-4 : ~1.8 trillion parametres\n  - Claude : non divulgue\n  - Llama 3 : 8B, 70B, 405B parametres\n  - Un parametre = un nombre a virgule (float)", explanation: "La 'temperature' controle la creativite : 0 = deterministe (toujours le mot le plus probable), 1 = creatif (plus d'aleatoire)." },
                        { type: "info", variant: "note", content: "Un LLM ne 'comprend' pas vraiment. Il predit le token le plus probable etant donne le contexte. Mais cette prediction est si bonne qu'elle donne l'illusion de la comprehension." },
                        { type: "quiz", question: "Comment un LLM genere-t-il du texte ?", choices: ["Il cherche la reponse dans une base de donnees", "Il predit un token a la fois en se basant sur le contexte precedent", "Il traduit du code machine en texte", "Il copie du texte depuis internet"], correct: 1, explanation: "Un LLM est fondamentalement un predicteur de prochain token. Il genere du texte un token a la fois, en ajoutant chaque token genere au contexte pour la prediction suivante." }
                    ]
                }
            },
            { id: "8-2", title: "Prompt Engineering : les bases", desc: "Zero-shot, few-shot, chain-of-thought — ecrire des prompts qui marchent.", tags: ["course", "practice"], links: [{ label: "Anthropic Prompt Guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering" }, { label: "Learn Prompting", url: "https://learnprompting.org/" }],
                workshop: {
                    duration: "40 min", difficulty: 2,
                    objectives: ["Ecrire des prompts clairs et efficaces", "Utiliser le few-shot et chain-of-thought", "Structurer des prompts complexes"],
                    sections: [
                        { type: "theory", title: "L'art du prompt", content: "Le prompt engineering est l'art de formuler des instructions pour obtenir le meilleur resultat d'un LLM.\n\n**Techniques** :\n- **Zero-shot** : instruction directe, sans exemple\n- **Few-shot** : donner des exemples avant la question\n- **Chain-of-thought** : demander de raisonner etape par etape\n- **Role prompting** : assigner un role ('Tu es un expert en...')\n\n**Principes** :\n1. Sois precis et specifique\n2. Donne du contexte\n3. Indique le format de sortie attendu\n4. Decompose les taches complexes" },
                        { type: "code", language: "text", code: "=== Zero-shot (basique) ===\nTraduis ce texte en anglais : \"Bonjour le monde\"\n\n=== Few-shot (avec exemples) ===\nClassifie le sentiment de ces phrases :\n\n\"J'adore ce film\" → positif\n\"Service horrible\" → negatif\n\"Le film etait correct\" → neutre\n\n\"Les acteurs sont incroyables\" → ?\n\n=== Chain-of-thought ===\nResous ce probleme etape par etape :\nUn train part de Paris a 14h a 200km/h.\nUn autre part de Lyon (450km) a 15h a 250km/h.\nA quelle heure se croisent-ils ?\n\nRaisonne etape par etape avant de donner la reponse.\n\n=== Prompt structure (XML) ===\n<role>Tu es un data scientist senior</role>\n<context>J'ai un dataset de 10k lignes avec des valeurs manquantes</context>\n<task>Propose une strategie de nettoyage des donnees</task>\n<format>Liste numerotee avec justification pour chaque etape</format>", explanation: "Les prompts structures avec des balises XML fonctionnent tres bien avec Claude. Ils separent clairement les differentes parties de l'instruction." },
                        { type: "exercise", title: "Ecris des prompts efficaces", instructions: "Ecris un prompt pour chaque scenario :\n1. Faire resumer un article de 2000 mots en 3 bullet points\n2. Faire debugger un code Python avec explication\n3. Faire generer un schema SQL a partir d'une description en langage naturel", starterCode: "# Prompt 1 : Resume\n\n# Prompt 2 : Debug\n\n# Prompt 3 : Schema SQL", solution: "# Prompt 1\n# Resume l'article suivant en exactement 3 bullet points.\n# Chaque point doit capturer une idee cle differente.\n# Format : tiret + phrase courte (max 20 mots).\n# <article>...</article>\n\n# Prompt 2\n# Voici du code Python qui produit une erreur.\n# 1. Identifie l'erreur\n# 2. Explique POURQUOI elle se produit\n# 3. Donne le code corrige\n# <code>...</code>\n# <error>...</error>\n\n# Prompt 3\n# A partir de la description suivante, genere un schema SQL.\n# Inclus les cles primaires, etrangeres et les types.\n# Format : instructions CREATE TABLE.\n# <description>Un site e-commerce avec des produits, des clients et des commandes</description>", language: "text" },
                        { type: "quiz", question: "Quelle technique de prompting demande au LLM de raisonner etape par etape ?", choices: ["Zero-shot", "Few-shot", "Chain-of-thought", "Role prompting"], correct: 2, explanation: "Chain-of-thought (chaine de pensee) demande au modele de decomposer son raisonnement en etapes. Ca ameliore significativement les performances sur les problemes de logique et de math." }
                    ]
                }
            },
            { id: "8-3", title: "Utiliser les APIs (OpenAI, Claude)", desc: "Appeler un LLM depuis ton code Python — ta premiere app IA.", tags: ["course", "practice"], links: [{ label: "Anthropic API Docs", url: "https://docs.anthropic.com/" }, { label: "Anthropic Cookbook", url: "https://github.com/anthropics/anthropic-cookbook" }],
                workshop: {
                    duration: "45 min", difficulty: 2,
                    objectives: ["Configurer une cle API", "Appeler Claude depuis Python", "Gerer les messages et le streaming"],
                    sections: [
                        { type: "theory", title: "Appeler un LLM par API", content: "Les LLMs sont accessibles via des APIs REST. Tu envoies un prompt, tu recois une reponse.\n\nInstallation : `pip install anthropic`\n\nConcepts :\n- **Messages** : conversation avec roles (user, assistant)\n- **System prompt** : instructions globales pour le comportement\n- **Temperature** : 0 = deterministe, 1 = creatif\n- **Max tokens** : longueur max de la reponse\n- **Streaming** : recevoir la reponse token par token" },
                        { type: "code", language: "python", code: "import anthropic\n\nclient = anthropic.Anthropic()  # Cle dans ANTHROPIC_API_KEY\n\n# Appel simple\nresponse = client.messages.create(\n    model=\"claude-sonnet-4-6\",\n    max_tokens=1024,\n    system=\"Tu es un assistant Python expert. Reponds de facon concise.\",\n    messages=[\n        {\"role\": \"user\", \"content\": \"Explique les list comprehensions en Python\"}\n    ]\n)\nprint(response.content[0].text)\n\n# Conversation multi-tours\nmessages = [\n    {\"role\": \"user\", \"content\": \"Qu'est-ce qu'une API REST ?\"},\n    {\"role\": \"assistant\", \"content\": \"Une API REST est...\"},\n    {\"role\": \"user\", \"content\": \"Donne-moi un exemple en Python\"}\n]\n\nresponse = client.messages.create(\n    model=\"claude-sonnet-4-6\",\n    max_tokens=1024,\n    messages=messages\n)\n\n# Streaming\nwith client.messages.stream(\n    model=\"claude-sonnet-4-6\",\n    max_tokens=1024,\n    messages=[{\"role\": \"user\", \"content\": \"Raconte une courte histoire\"}]\n) as stream:\n    for text in stream.text_stream:\n        print(text, end=\"\", flush=True)", explanation: "La cle API doit etre dans une variable d'environnement ANTHROPIC_API_KEY, jamais dans le code ! Utilise un fichier .env." },
                        { type: "info", variant: "warning", content: "Ne commite JAMAIS ta cle API dans Git. Utilise des variables d'environnement ou un fichier .env (ajoute dans .gitignore)." },
                        { type: "quiz", question: "Quel parametre controle la creativite de la reponse d'un LLM ?", choices: ["max_tokens", "temperature", "model", "system"], correct: 1, explanation: "La temperature controle l'aleatoire de la generation. 0 = toujours le token le plus probable (deterministe), 1 = plus de variete et creativite." }
                    ]
                }
            },
            { id: "8-4", title: "RAG : Retrieval-Augmented Generation", desc: "Donner de la memoire a une IA — connecter un LLM a tes propres donnees.", tags: ["course", "article"], links: [{ label: "LangChain RAG Tutorial", url: "https://python.langchain.com/docs/tutorials/rag/" }, { label: "DeepLearning.AI RAG", url: "https://www.deeplearning.ai/short-courses/" }],
                workshop: {
                    duration: "45 min", difficulty: 3,
                    objectives: ["Comprendre le pipeline RAG", "Indexer des documents dans une base vectorielle", "Interroger un LLM avec du contexte recupere"],
                    sections: [
                        { type: "theory", title: "RAG : donner de la memoire a l'IA", content: "Les LLMs ont un probleme : ils ne connaissent que leurs donnees d'entrainement. RAG resout ca :\n\n1. **Indexation** (une fois) :\n   - Decoupe tes documents en chunks\n   - Transforme chaque chunk en embedding (vecteur)\n   - Stocke dans une base vectorielle\n\n2. **Requete** (a chaque question) :\n   - Transforme la question en embedding\n   - Cherche les chunks les plus similaires\n   - Passe les chunks au LLM comme contexte\n   - Le LLM repond en se basant sur TES donnees" },
                        { type: "code", language: "python", code: "import chromadb\nimport anthropic\n\n# 1. Indexer des documents\nclient_db = chromadb.Client()\ncollection = client_db.create_collection(\"mes_docs\")\n\ndocs = [\n    \"Python a ete cree par Guido van Rossum en 1991.\",\n    \"FastAPI est un framework web Python rapide et moderne.\",\n    \"Les decorateurs Python utilisent le symbole @.\",\n    \"pip est le gestionnaire de packages de Python.\"\n]\n\ncollection.add(\n    documents=docs,\n    ids=[f\"doc{i}\" for i in range(len(docs))]\n)\n\n# 2. Rechercher + Demander au LLM\ndef ask_rag(question):\n    # Recuperer les docs pertinents\n    results = collection.query(\n        query_texts=[question],\n        n_results=2\n    )\n    context = \"\\n\".join(results[\"documents\"][0])\n\n    # Demander au LLM\n    client = anthropic.Anthropic()\n    response = client.messages.create(\n        model=\"claude-sonnet-4-6\",\n        max_tokens=512,\n        system=\"Reponds en te basant UNIQUEMENT sur le contexte fourni.\",\n        messages=[{\n            \"role\": \"user\",\n            \"content\": f\"Contexte :\\n{context}\\n\\nQuestion : {question}\"\n        }]\n    )\n    return response.content[0].text\n\nprint(ask_rag(\"Qui a cree Python ?\"))", explanation: "RAG permet a un LLM de repondre sur des donnees qu'il n'a jamais vues pendant son entrainement — tes documents internes, tes notes, ta documentation." },
                        { type: "quiz", question: "Quel est l'avantage principal du RAG par rapport au fine-tuning ?", choices: ["Le RAG est plus rapide a entrainer", "Le RAG ne necessite pas de reentrainer le modele et les donnees peuvent etre mises a jour en temps reel", "Le RAG est gratuit", "Le RAG donne toujours de meilleures reponses"], correct: 1, explanation: "Le RAG ne modifie pas le modele. Tu peux ajouter ou mettre a jour des documents a tout moment sans reentrainement. Le fine-tuning necessite de reentrainer le modele a chaque changement." }
                    ]
                }
            },
            { id: "8-5", title: "Embeddings et recherche semantique", desc: "Transformer du texte en vecteurs pour chercher par sens, pas par mots-cles.", tags: ["course", "article"], links: [{ label: "OpenAI Embeddings Guide", url: "https://platform.openai.com/docs/guides/embeddings" }, { label: "ChromaDB Tutorial", url: "https://docs.trychroma.com/getting-started" }],
                workshop: {
                    duration: "35 min", difficulty: 3,
                    objectives: ["Comprendre ce que sont les embeddings", "Calculer la similarite entre textes", "Construire un moteur de recherche semantique"],
                    sections: [
                        { type: "theory", title: "Embeddings : texte → vecteurs", content: "Un embedding est une representation numerique d'un texte sous forme de vecteur (liste de nombres).\n\nProprietes magiques :\n- Textes similaires → vecteurs proches\n- La distance entre vecteurs = distance semantique\n- 'roi - homme + femme ≈ reine'\n\nUsages :\n- Recherche semantique (RAG)\n- Classification de texte\n- Detection de doublons\n- Recommandation de contenu" },
                        { type: "code", language: "python", code: "# Avec Sentence Transformers (local, gratuit)\nfrom sentence_transformers import SentenceTransformer\nimport numpy as np\n\nmodel = SentenceTransformer('all-MiniLM-L6-v2')\n\ntextes = [\n    \"Le chat dort sur le canape\",\n    \"Le felin se repose sur le sofa\",\n    \"Python est un langage de programmation\",\n    \"JavaScript permet de creer des sites web\"\n]\n\n# Encoder\nembeddings = model.encode(textes)\n\n# Similarite cosinus\ndef cosine_sim(a, b):\n    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))\n\n# Le chat/felin sont proches semantiquement\nprint(f\"Chat/Felin : {cosine_sim(embeddings[0], embeddings[1]):.3f}\")  # ~0.85\nprint(f\"Chat/Python : {cosine_sim(embeddings[0], embeddings[2]):.3f}\") # ~0.15\nprint(f\"Python/JS : {cosine_sim(embeddings[2], embeddings[3]):.3f}\")   # ~0.55", explanation: "Meme si les mots sont differents ('chat' vs 'felin', 'canape' vs 'sofa'), les embeddings capturent le SENS et les trouvent similaires." },
                        { type: "quiz", question: "Que mesure la similarite cosinus entre deux embeddings ?", choices: ["La longueur des textes", "La proximite semantique (de sens) entre les textes", "Le nombre de mots en commun", "La langue du texte"], correct: 1, explanation: "La similarite cosinus mesure l'angle entre deux vecteurs. Des textes semantiquement proches ont une similarite proche de 1, des textes differents proche de 0." }
                    ]
                }
            },
            { id: "8-6", title: "Function calling et Tool Use", desc: "Permettre a un LLM d'utiliser des outils — la base des agents IA.", tags: ["course", "practice"], links: [{ label: "Anthropic Tool Use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" }, { label: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling" }],
                workshop: {
                    duration: "45 min", difficulty: 3,
                    objectives: ["Definir des outils pour un LLM", "Implementer le cycle tool_use → tool_result", "Creer un assistant avec des capacites reelles"],
                    sections: [
                        { type: "theory", title: "Tool Use : l'IA qui agit", content: "Le Tool Use permet a un LLM de :\n1. Decider quel outil utiliser\n2. Generer les arguments\n3. Recevoir le resultat\n4. Formuler une reponse\n\nExemples d'outils :\n- Chercher sur le web\n- Calculer une formule\n- Lire un fichier\n- Appeler une API\n- Executer du code\n\nC'est la base des agents IA !" },
                        { type: "code", language: "python", code: "import anthropic\nimport json\n\nclient = anthropic.Anthropic()\n\n# Definir les outils\ntools = [{\n    \"name\": \"get_weather\",\n    \"description\": \"Recupere la meteo d'une ville\",\n    \"input_schema\": {\n        \"type\": \"object\",\n        \"properties\": {\n            \"city\": {\"type\": \"string\", \"description\": \"Nom de la ville\"}\n        },\n        \"required\": [\"city\"]\n    }\n}]\n\n# Fonction reelle\ndef get_weather(city):\n    return {\"city\": city, \"temp\": 22, \"condition\": \"Ensoleille\"}\n\n# Appel avec tools\nresponse = client.messages.create(\n    model=\"claude-sonnet-4-6\",\n    max_tokens=1024,\n    tools=tools,\n    messages=[{\"role\": \"user\", \"content\": \"Quel temps fait-il a Paris ?\"}]\n)\n\n# Verifier si le modele veut utiliser un outil\nfor block in response.content:\n    if block.type == \"tool_use\":\n        result = get_weather(block.input[\"city\"])\n        # Renvoyer le resultat au modele\n        final = client.messages.create(\n            model=\"claude-sonnet-4-6\",\n            max_tokens=1024,\n            tools=tools,\n            messages=[\n                {\"role\": \"user\", \"content\": \"Quel temps fait-il a Paris ?\"},\n                {\"role\": \"assistant\", \"content\": response.content},\n                {\"role\": \"user\", \"content\": [{\n                    \"type\": \"tool_result\",\n                    \"tool_use_id\": block.id,\n                    \"content\": json.dumps(result)\n                }]}\n            ]\n        )\n        print(final.content[0].text)", explanation: "Le cycle tool_use est : 1) Le modele decide d'utiliser un outil, 2) Tu executes l'outil, 3) Tu renvoies le resultat, 4) Le modele formule la reponse finale." },
                        { type: "quiz", question: "Qui decide QUAND utiliser un outil dans le tool use ?", choices: ["Le developpeur dans le code", "Le LLM lui-meme, en fonction de la question", "L'utilisateur", "C'est aleatoire"], correct: 1, explanation: "Le LLM decide de lui-meme s'il a besoin d'un outil et lequel utiliser. Le developpeur definit les outils disponibles, mais c'est le modele qui choisit quand les utiliser." }
                    ]
                }
            },
            { id: "8-7", title: "PROJET : Chatbot RAG personnel", desc: "Construis un chatbot qui repond a des questions sur TES documents.", tags: ["project"], links: [{ label: "LangChain Docs", url: "https://python.langchain.com/docs/" }],
                workshop: {
                    duration: "90 min", difficulty: 3,
                    objectives: ["Construire un pipeline RAG complet", "Indexer des documents reels", "Creer une interface de chat"],
                    sections: [
                        { type: "theory", title: "Ton chatbot RAG", content: "Tu vas construire un chatbot qui repond a des questions sur tes propres documents.\n\nArchitecture :\n1. **Ingestion** : charger et decouper tes documents\n2. **Indexation** : embeddings + base vectorielle\n3. **Retrieval** : trouver les passages pertinents\n4. **Generation** : LLM repond avec le contexte\n5. **Interface** : boucle de chat dans le terminal\n\nChoisis tes documents : notes de cours, documentation d'un projet, articles de blog..." },
                        { type: "code", language: "python", code: "# Architecture simplifiee\nimport chromadb\nimport anthropic\nimport os\n\ndef load_documents(folder):\n    \"\"\"Charge tous les .txt d'un dossier\"\"\"\n    docs = []\n    for f in os.listdir(folder):\n        if f.endswith('.txt'):\n            with open(os.path.join(folder, f)) as file:\n                text = file.read()\n                # Decouper en chunks de ~500 chars\n                for i in range(0, len(text), 500):\n                    chunk = text[i:i+500]\n                    if chunk.strip():\n                        docs.append({\"text\": chunk, \"source\": f})\n    return docs\n\ndef index_documents(docs):\n    \"\"\"Indexe dans ChromaDB\"\"\"\n    client = chromadb.Client()\n    collection = client.get_or_create_collection(\"my_docs\")\n    collection.add(\n        documents=[d[\"text\"] for d in docs],\n        metadatas=[{\"source\": d[\"source\"]} for d in docs],\n        ids=[f\"chunk_{i}\" for i in range(len(docs))]\n    )\n    return collection\n\ndef chat_loop(collection):\n    \"\"\"Boucle de chat RAG\"\"\"\n    client = anthropic.Anthropic()\n    print(\"Chatbot RAG pret ! (tape 'quit' pour quitter)\")\n    while True:\n        question = input(\"\\nToi: \")\n        if question.lower() == 'quit':\n            break\n        results = collection.query(query_texts=[question], n_results=3)\n        context = \"\\n---\\n\".join(results[\"documents\"][0])\n        response = client.messages.create(\n            model=\"claude-sonnet-4-6\",\n            max_tokens=1024,\n            system=\"Reponds en te basant sur le contexte. Si l'info n'est pas dans le contexte, dis-le.\",\n            messages=[{\"role\": \"user\", \"content\": f\"Contexte:\\n{context}\\n\\nQuestion: {question}\"}]\n        )\n        print(f\"\\nBot: {response.content[0].text}\")", explanation: "Ce chatbot peut repondre a des questions sur n'importe quels documents texte. Pour l'ameliorer : meilleur chunking, reranking, historique de conversation." },
                        { type: "exercise", title: "Ameliore ton chatbot", instructions: "En partant du code de base, ajoute :\n1. L'historique de conversation (contexte multi-tours)\n2. L'affichage des sources utilisees\n3. Un meilleur decoupage des documents (par paragraphe)", starterCode: "# Ameliore le chatbot de base", solution: "# Criteres de reussite :\n# - Le chatbot se souvient des questions precedentes\n# - Il cite les sources de ses reponses\n# - Les chunks sont coherents (pas coupes au milieu d'une phrase)\n# - Il fonctionne sur au moins 5 documents", language: "python" }
                    ]
                }
            }
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
            { id: "9-1", title: "Architecture d'un agent IA", desc: "Percevoir, raisonner, agir, apprendre — comprendre le cycle d'un agent.", tags: ["course", "article"], links: [{ label: "Hugging Face Agents Course", url: "https://huggingface.co/learn/agents-course/en/unit0/introduction" }, { label: "Microsoft AI Agents for Beginners", url: "https://github.com/microsoft/ai-agents-for-beginners" }],
                workshop: {
                    duration: "40 min", difficulty: 3,
                    objectives: ["Comprendre le cycle percevoir-raisonner-agir", "Distinguer les types d'agents", "Connaitre les patterns architecturaux"],
                    sections: [
                        { type: "theory", title: "Qu'est-ce qu'un agent IA ?", content: "Un agent IA est un systeme qui :\n1. **Percoit** son environnement (input utilisateur, donnees, capteurs)\n2. **Raisonne** sur ce qu'il faut faire (LLM)\n3. **Agit** en utilisant des outils (APIs, code, fichiers)\n4. **Observe** le resultat et recommence\n\nDifference avec un chatbot :\n- Chatbot : repond a des questions\n- Agent : accomplit des TACHES de bout en bout\n\nPatterns :\n- **ReAct** : Reasoning + Acting (le plus courant)\n- **Plan & Execute** : planifier d'abord, executer ensuite\n- **Reflexion** : l'agent critique ses propres actions" },
                        { type: "code", language: "python", code: "# Pattern ReAct simplifie\nimport anthropic\nimport json\n\ndef agent_loop(task, tools, max_iterations=5):\n    client = anthropic.Anthropic()\n    messages = [{\"role\": \"user\", \"content\": task}]\n\n    for i in range(max_iterations):\n        response = client.messages.create(\n            model=\"claude-sonnet-4-6\",\n            max_tokens=4096,\n            system=\"Tu es un agent. Utilise les outils pour accomplir la tache.\",\n            tools=tools,\n            messages=messages\n        )\n\n        # Verifier si l'agent a termine\n        if response.stop_reason == \"end_turn\":\n            return response.content[0].text\n\n        # Executer les outils demandes\n        messages.append({\"role\": \"assistant\", \"content\": response.content})\n        tool_results = []\n        for block in response.content:\n            if block.type == \"tool_use\":\n                result = execute_tool(block.name, block.input)\n                tool_results.append({\n                    \"type\": \"tool_result\",\n                    \"tool_use_id\": block.id,\n                    \"content\": json.dumps(result)\n                })\n        messages.append({\"role\": \"user\", \"content\": tool_results})\n\n    return \"Max iterations atteint\"", explanation: "La boucle agent est simple : envoyer un message, verifier si l'agent veut utiliser un outil, executer l'outil, renvoyer le resultat, recommencer." },
                        { type: "quiz", question: "Quelle est la difference fondamentale entre un chatbot et un agent IA ?", choices: ["L'agent utilise un meilleur modele", "L'agent peut utiliser des outils et accomplir des taches autonomement", "L'agent est plus rapide", "Il n'y a pas de difference"], correct: 1, explanation: "Un chatbot repond a des questions. Un agent peut raisonner, planifier et executer des actions en utilisant des outils pour accomplir des taches complexes de bout en bout." }
                    ]
                }
            },
            { id: "9-2", title: "LangChain & LangGraph", desc: "Le framework leader pour construire des apps et agents LLM.", tags: ["course", "practice"], links: [{ label: "LangChain Tutorial", url: "https://python.langchain.com/docs/tutorials/" }, { label: "LangGraph Docs", url: "https://langchain-ai.github.io/langgraph/" }],
                workshop: {
                    duration: "45 min", difficulty: 3,
                    objectives: ["Comprendre l'ecosysteme LangChain", "Construire une chaine simple", "Creer un graphe d'agent avec LangGraph"],
                    sections: [
                        { type: "theory", title: "LangChain et LangGraph", content: "**LangChain** : framework pour construire des apps LLM\n- Chains : enchainer des etapes (prompt → LLM → parser)\n- Integrations : 100+ LLMs, bases vectorielles, outils\n\n**LangGraph** : construire des agents comme des graphes\n- Noeuds : les etapes (LLM, outils, logique)\n- Aretes : les transitions entre etapes\n- State : l'etat partage entre les noeuds\n- Ideal pour les agents complexes et multi-etapes\n\nInstallation : `pip install langchain langgraph langchain-anthropic`" },
                        { type: "code", language: "python", code: "from langgraph.graph import StateGraph, MessagesState, START, END\nfrom langchain_anthropic import ChatAnthropic\nfrom langchain_core.tools import tool\n\n# Definir un outil\n@tool\ndef calculate(expression: str) -> str:\n    \"\"\"Calcule une expression mathematique\"\"\"\n    return str(eval(expression))\n\n# Modele avec outils\nllm = ChatAnthropic(model=\"claude-sonnet-4-6\")\nllm_with_tools = llm.bind_tools([calculate])\n\n# Noeuds du graphe\ndef agent(state: MessagesState):\n    return {\"messages\": [llm_with_tools.invoke(state[\"messages\"])]}\n\ndef tool_executor(state: MessagesState):\n    # Executer les outils demandes\n    results = []\n    for msg in state[\"messages\"]:\n        if hasattr(msg, 'tool_calls'):\n            for tc in msg.tool_calls:\n                result = calculate.invoke(tc[\"args\"])\n                results.append(result)\n    return {\"messages\": results}\n\n# Construire le graphe\ngraph = StateGraph(MessagesState)\ngraph.add_node(\"agent\", agent)\ngraph.add_node(\"tools\", tool_executor)\ngraph.add_edge(START, \"agent\")\n# Logique de routage (simplifie)\ngraph.add_edge(\"agent\", END)\n\napp = graph.compile()", explanation: "LangGraph modelise l'agent comme un graphe oriente. Chaque noeud est une etape, chaque arete une transition. Le state est partage entre tous les noeuds." },
                        { type: "quiz", question: "Quelle est la difference entre LangChain et LangGraph ?", choices: ["LangChain est plus recent", "LangChain est pour les chaines lineaires, LangGraph pour les agents avec des cycles et branchements", "LangGraph remplace completement LangChain", "Ils font exactement la meme chose"], correct: 1, explanation: "LangChain est concu pour des pipelines lineaires (A → B → C). LangGraph ajoute la possibilite de creer des cycles et des branchements, essentiels pour les agents qui iterent et prennent des decisions." }
                    ]
                }
            },
            { id: "9-3", title: "Creer un agent simple", desc: "Un agent qui utilise des outils (recherche web, calcul, fichiers) pour resoudre des taches.", tags: ["course", "project"], links: [{ label: "DeepLearning.AI Agents", url: "https://www.deeplearning.ai/short-courses/" }, { label: "LangGraph Agent Tutorial", url: "https://langchain-ai.github.io/langgraph/tutorials/" }],
                workshop: {
                    duration: "50 min", difficulty: 3,
                    objectives: ["Construire un agent avec plusieurs outils", "Implementer la boucle ReAct", "Gerer les erreurs et les cas limites"],
                    sections: [
                        { type: "theory", title: "Un agent avec des outils", content: "Un bon agent a besoin de :\n1. **Des outils bien definis** : descriptions claires pour que le LLM sache quand les utiliser\n2. **Une boucle de controle** : iterer tant que la tache n'est pas finie\n3. **Des garde-fous** : limiter les iterations, valider les actions\n4. **La gestion d'erreurs** : si un outil echoue, l'agent doit s'adapter" },
                        { type: "code", language: "python", code: "import anthropic\nimport json\nimport subprocess\n\nclient = anthropic.Anthropic()\n\n# Outils\ndef read_file(path):\n    with open(path) as f:\n        return f.read()\n\ndef write_file(path, content):\n    with open(path, 'w') as f:\n        f.write(content)\n    return f\"Fichier {path} ecrit\"\n\ndef run_python(code):\n    result = subprocess.run(['python', '-c', code],\n        capture_output=True, text=True, timeout=10)\n    return result.stdout or result.stderr\n\ntools = [\n    {\"name\": \"read_file\", \"description\": \"Lit le contenu d'un fichier\",\n     \"input_schema\": {\"type\": \"object\", \"properties\": {\"path\": {\"type\": \"string\"}}, \"required\": [\"path\"]}},\n    {\"name\": \"write_file\", \"description\": \"Ecrit du contenu dans un fichier\",\n     \"input_schema\": {\"type\": \"object\", \"properties\": {\"path\": {\"type\": \"string\"}, \"content\": {\"type\": \"string\"}}, \"required\": [\"path\", \"content\"]}},\n    {\"name\": \"run_python\", \"description\": \"Execute du code Python\",\n     \"input_schema\": {\"type\": \"object\", \"properties\": {\"code\": {\"type\": \"string\"}}, \"required\": [\"code\"]}}\n]\n\ntool_handlers = {\"read_file\": lambda args: read_file(args[\"path\"]),\n                 \"write_file\": lambda args: write_file(args[\"path\"], args[\"content\"]),\n                 \"run_python\": lambda args: run_python(args[\"code\"])}", explanation: "Cet agent peut lire/ecrire des fichiers et executer du Python. C'est un mini Claude Code ! En production, il faudrait sandboxer l'execution de code." },
                        { type: "info", variant: "warning", content: "Ne jamais laisser un agent executer du code arbitraire sans sandbox en production ! Utilise Docker ou des environnements isoles pour limiter les degats potentiels." },
                        { type: "quiz", question: "Pourquoi est-il important de limiter le nombre d'iterations d'un agent ?", choices: ["Pour economiser de l'argent", "Pour eviter les boucles infinies ou le modele tourne en rond", "Pour aller plus vite", "Ce n'est pas important"], correct: 1, explanation: "Sans limite, un agent pourrait entrer dans une boucle infinie : utiliser un outil, ne pas aimer le resultat, recommencer indefiniment. Une limite d'iterations est un garde-fou essentiel." }
                    ]
                }
            },
            { id: "9-4", title: "Memoire et contexte", desc: "Short-term et long-term memory — faire qu'un agent se souvienne.", tags: ["course", "article"], links: [{ label: "LangChain Memory", url: "https://python.langchain.com/docs/concepts/memory/" }],
                workshop: {
                    duration: "35 min", difficulty: 3,
                    objectives: ["Distinguer memoire court-terme et long-terme", "Implementer un historique de conversation", "Utiliser une base vectorielle comme memoire long-terme"],
                    sections: [
                        { type: "theory", title: "La memoire d'un agent", content: "**Memoire court-terme** :\n- L'historique de la conversation courante\n- Limitee par la fenetre de contexte du LLM\n- Strategies : resumer, compresser, fenetre glissante\n\n**Memoire long-terme** :\n- Persiste entre les sessions\n- Stockee dans une base de donnees ou vectorielle\n- L'agent peut chercher dans ses souvenirs\n\n**Memoire de travail** :\n- Notes/scratchpad pendant l'execution\n- Plans, resultats intermediaires" },
                        { type: "code", language: "python", code: "# Memoire simple avec resumes\ndef summarize_if_needed(messages, max_messages=20):\n    \"\"\"Resume l'historique si trop long\"\"\"\n    if len(messages) <= max_messages:\n        return messages\n\n    # Garder le system + les 10 derniers messages\n    old = messages[1:-10]\n    recent = messages[-10:]\n\n    # Resumer les anciens messages\n    summary = client.messages.create(\n        model=\"claude-haiku-4-5-20251001\",\n        max_tokens=500,\n        messages=[{\n            \"role\": \"user\",\n            \"content\": f\"Resume cette conversation en 3-5 points cles :\\n{json.dumps(old)}\"\n        }]\n    ).content[0].text\n\n    return [\n        messages[0],  # System\n        {\"role\": \"user\", \"content\": f\"[Resume de la conversation precedente : {summary}]\"},\n        {\"role\": \"assistant\", \"content\": \"Compris, je me souviens du contexte.\"},\n        *recent\n    ]\n\n# Memoire long-terme avec ChromaDB\ndef save_memory(collection, text, metadata):\n    collection.add(\n        documents=[text],\n        metadatas=[metadata],\n        ids=[f\"mem_{hash(text)}\"]\n    )\n\ndef recall(collection, query, n=3):\n    return collection.query(query_texts=[query], n_results=n)", explanation: "La combinaison memoire court-terme (historique) + long-terme (base vectorielle) donne a l'agent une 'conscience' persistent." },
                        { type: "quiz", question: "Pourquoi ne peut-on pas simplement garder tous les messages dans l'historique ?", choices: ["Ca coute trop cher", "La fenetre de contexte du LLM est limitee", "Les vieux messages deviennent incorrects", "Ce serait trop lent"], correct: 1, explanation: "Chaque LLM a une fenetre de contexte limitee (ex: 200K tokens pour Claude). Au-dela, il faut resumer ou tronquer l'historique pour que les nouveaux messages puissent etre traites." }
                    ]
                }
            },
            { id: "9-5", title: "Multi-agents et orchestration", desc: "Faire collaborer plusieurs agents — CrewAI, AutoGen, LangGraph.", tags: ["course", "article"], links: [{ label: "CrewAI Docs", url: "https://docs.crewai.com/" }, { label: "AutoGen (Microsoft)", url: "https://microsoft.github.io/autogen/" }],
                workshop: {
                    duration: "40 min", difficulty: 3,
                    objectives: ["Comprendre les patterns multi-agents", "Concevoir un systeme avec des agents specialises", "Gerer la communication inter-agents"],
                    sections: [
                        { type: "theory", title: "Plusieurs agents, une mission", content: "Patterns multi-agents :\n\n- **Hierarchique** : un chef d'orchestre delegue aux agents specialises\n- **Collaboratif** : les agents discutent entre eux\n- **Pipeline** : chaque agent traite une etape (A → B → C)\n- **Debate** : les agents argumentent pour arriver a la meilleure reponse\n\nAvantages :\n- Specialisation : chaque agent excelle dans son domaine\n- Parallelisme : plusieurs agents travaillent en meme temps\n- Verification : un agent peut verifier le travail d'un autre" },
                        { type: "code", language: "python", code: "# Pattern hierarchique simplifie\ndef orchestrator(task):\n    \"\"\"Agent principal qui delegue\"\"\"\n    plan = call_llm(\n        system=\"Tu es un chef de projet. Decompose la tache en sous-taches.\",\n        user=task\n    )\n\n    results = {}\n    for subtask in plan[\"subtasks\"]:\n        if subtask[\"type\"] == \"research\":\n            results[subtask[\"id\"]] = research_agent(subtask[\"query\"])\n        elif subtask[\"type\"] == \"code\":\n            results[subtask[\"id\"]] = coding_agent(subtask[\"spec\"])\n        elif subtask[\"type\"] == \"review\":\n            results[subtask[\"id\"]] = review_agent(results[subtask[\"input\"]])\n\n    # Synthetiser les resultats\n    return call_llm(\n        system=\"Synthetise ces resultats en un livrable final.\",\n        user=json.dumps(results)\n    )\n\ndef research_agent(query):\n    \"\"\"Agent specialise en recherche\"\"\"\n    return call_llm(\n        system=\"Tu es un chercheur. Trouve des informations fiables.\",\n        user=query,\n        tools=[web_search, read_document]\n    )\n\ndef coding_agent(spec):\n    \"\"\"Agent specialise en code\"\"\"\n    return call_llm(\n        system=\"Tu es un dev senior. Ecris du code propre et teste.\",\n        user=spec,\n        tools=[write_file, run_python, run_tests]\n    )", explanation: "Ce pattern est celui utilise par Claude Code : un agent principal orchestre des sous-agents specialises (debug, code, review, tests)." },
                        { type: "quiz", question: "Quel est l'avantage principal d'un systeme multi-agents ?", choices: ["C'est moins cher", "Chaque agent peut etre specialise dans un domaine, ce qui ameliore la qualite globale", "Ca utilise moins de tokens", "C'est plus simple a developper"], correct: 1, explanation: "La specialisation permet a chaque agent d'avoir un system prompt optimise pour sa tache. Un agent 'reviewer' sera meilleur pour trouver des bugs qu'un agent generaliste." }
                    ]
                }
            },
            { id: "9-6", title: "MCP : Model Context Protocol", desc: "Le standard ouvert pour connecter des agents a des outils externes.", tags: ["course", "tool"], links: [{ label: "MCP Specification", url: "https://modelcontextprotocol.io/" }, { label: "Anthropic MCP", url: "https://docs.anthropic.com/en/docs/agents-and-tools/mcp" }],
                workshop: {
                    duration: "40 min", difficulty: 3,
                    objectives: ["Comprendre le protocole MCP", "Savoir ce qu'est un serveur MCP", "Utiliser des serveurs MCP existants"],
                    sections: [
                        { type: "theory", title: "MCP : connecter l'IA au monde", content: "MCP (Model Context Protocol) est un standard ouvert cree par Anthropic pour connecter les agents IA a des outils externes.\n\nAnalogie : MCP est au LLM ce que USB est a l'ordinateur — un standard universel de connexion.\n\n**Architecture** :\n- **Client MCP** : l'agent (Claude Code, une app)\n- **Serveur MCP** : fournit des outils (GitHub, Slack, BDD...)\n- **Protocole** : JSON-RPC pour la communication\n\n**Capacites d'un serveur MCP** :\n- **Tools** : actions que le LLM peut executer\n- **Resources** : donnees que le LLM peut lire\n- **Prompts** : templates de prompts predefinies" },
                        { type: "code", language: "python", code: "# Serveur MCP simple avec le SDK Python\nfrom mcp.server import Server\nfrom mcp.types import Tool, TextContent\nimport mcp.server.stdio\n\nserver = Server(\"mon-serveur\")\n\n@server.list_tools()\nasync def list_tools():\n    return [\n        Tool(\n            name=\"get_time\",\n            description=\"Retourne l'heure actuelle\",\n            inputSchema={\n                \"type\": \"object\",\n                \"properties\": {},\n                \"required\": []\n            }\n        )\n    ]\n\n@server.call_tool()\nasync def call_tool(name, arguments):\n    if name == \"get_time\":\n        from datetime import datetime\n        return [TextContent(\n            type=\"text\",\n            text=datetime.now().isoformat()\n        )]\n\n# Lancer\nasync def main():\n    async with mcp.server.stdio.stdio_server() as (read, write):\n        await server.run(read, write, server.create_initialization_options())", explanation: "Un serveur MCP est un programme qui expose des outils via un protocole standard. N'importe quel client MCP (Claude Code, Cursor, etc.) peut s'y connecter." },
                        { type: "info", variant: "tip", content: "Tu peux utiliser des serveurs MCP existants sans en creer : GitHub, Slack, bases de donnees, APIs... Consulte le registre sur modelcontextprotocol.io" },
                        { type: "quiz", question: "A quoi compare-t-on souvent MCP ?", choices: ["A une base de donnees", "A USB — un standard universel de connexion", "A un langage de programmation", "A un systeme d'exploitation"], correct: 1, explanation: "Comme USB standardise la connexion de peripheriques a un ordinateur, MCP standardise la connexion d'outils a un agent IA. Un seul protocole pour tous les outils." }
                    ]
                }
            },
            { id: "9-7", title: "Claude Code : l'agent en action", desc: "Etudier comment Claude Code fonctionne — un agent de production reel.", tags: ["tool", "article"], links: [{ label: "Claude Code Docs", url: "https://docs.anthropic.com/en/docs/claude-code" }, { label: "claw-code (reimpl.)", url: "https://github.com/instructkr/claw-code" }],
                workshop: {
                    duration: "35 min", difficulty: 2,
                    objectives: ["Comprendre l'architecture de Claude Code", "Identifier les patterns reutilisables", "Configurer Claude Code pour ses projets"],
                    sections: [
                        { type: "theory", title: "Claude Code : un agent de production", content: "Claude Code est un agent IA de production qui :\n- Lit et edite des fichiers\n- Execute des commandes terminal\n- Utilise des outils (grep, glob, etc.)\n- Se souvient du contexte (CLAUDE.md, memoire)\n- Supporte les hooks et les subagents\n\nC'est un exemple concret de tout ce que tu as appris !\n\nArchitecture :\n1. **System prompt** : regles et contexte\n2. **Boucle agent** : percevoir → raisonner → agir\n3. **Outils** : Read, Edit, Write, Bash, Glob, Grep\n4. **Subagents** : agents specialises lances en parallele\n5. **Memoire** : CLAUDE.md + memory system" },
                        { type: "code", language: "text", code: "# CLAUDE.md — Configuration de Claude Code\n# Place ce fichier a la racine de ton projet\n\n## Regles du projet\n- Utiliser Python 3.12+\n- Tests avec pytest\n- Format : black + isort\n- Pas de print() en production, utiliser logging\n\n## Architecture\n- src/ : code source\n- tests/ : tests\n- docs/ : documentation\n\n## Conventions\n- Commits : type(scope): description\n- Branches : feat/, fix/, refactor/\n\n## Commandes utiles\n- pytest : lancer les tests\n- black . : formater le code\n- mypy src/ : verifier les types", explanation: "CLAUDE.md est comme un briefing pour Claude Code. Il le lit au debut de chaque session et adapte son comportement en consequence." },
                        { type: "quiz", question: "Quel fichier configure le comportement de Claude Code pour un projet ?", choices: [".env", "package.json", "CLAUDE.md", "config.yaml"], correct: 2, explanation: "CLAUDE.md est lu par Claude Code au debut de chaque session. Il contient les regles, conventions et contexte specifiques a ton projet." }
                    ]
                }
            },
            { id: "9-8", title: "Tester et evaluer des agents", desc: "Benchmarks, evaluation humaine, metriques — savoir si ton agent est fiable.", tags: ["course", "article"], links: [{ label: "UC Berkeley LLM Agents", url: "https://rdi.berkeley.edu/llm-agents/f24" }],
                workshop: {
                    duration: "35 min", difficulty: 3,
                    objectives: ["Definir des criteres d'evaluation pour un agent", "Creer des test cases reproductibles", "Mesurer la fiabilite et la qualite"],
                    sections: [
                        { type: "theory", title: "Evaluer un agent IA", content: "Evaluer un agent est plus complexe qu'evaluer un modele ML classique :\n\n**Metriques quantitatives** :\n- Taux de succes : % de taches completees correctement\n- Nombre d'etapes : efficacite de l'agent\n- Cout en tokens : efficience\n- Temps d'execution\n\n**Metriques qualitatives** :\n- Qualite du raisonnement\n- Robustesse aux erreurs\n- Comportement sur les cas limites\n\n**Methodes** :\n- Test suites automatisees\n- Evaluation humaine (LLM-as-judge)\n- A/B testing en production\n- Benchmarks standardises (SWE-bench, WebArena)" },
                        { type: "code", language: "python", code: "# Framework d'evaluation simple\nimport json\nimport time\n\ndef evaluate_agent(agent_fn, test_cases):\n    results = []\n    for test in test_cases:\n        start = time.time()\n        try:\n            output = agent_fn(test[\"input\"])\n            success = test[\"validator\"](output)\n            duration = time.time() - start\n            results.append({\n                \"test\": test[\"name\"],\n                \"success\": success,\n                \"duration\": duration,\n                \"output\": output\n            })\n        except Exception as e:\n            results.append({\n                \"test\": test[\"name\"],\n                \"success\": False,\n                \"error\": str(e)\n            })\n\n    # Rapport\n    total = len(results)\n    passed = sum(1 for r in results if r[\"success\"])\n    print(f\"Resultats : {passed}/{total} ({passed/total:.0%})\")\n    return results\n\n# Exemple de test cases\ntest_cases = [\n    {\n        \"name\": \"Addition simple\",\n        \"input\": \"Combien font 2 + 3 ?\",\n        \"validator\": lambda out: \"5\" in out\n    },\n    {\n        \"name\": \"Lecture fichier\",\n        \"input\": \"Lis le fichier README.md et resume-le\",\n        \"validator\": lambda out: len(out) > 50\n    }\n]", explanation: "Les test cases doivent couvrir les cas normaux ET les cas limites (erreurs, inputs invalides, timeout). Un agent fiable doit gerer gracieusement les echecs." },
                        { type: "quiz", question: "Pourquoi le taux de succes seul ne suffit pas pour evaluer un agent ?", choices: ["Parce qu'il est toujours de 100%", "Parce qu'il ne mesure pas l'efficience (cout, temps) ni la qualite du raisonnement", "Parce qu'il est difficile a calculer", "Parce que les agents ne font jamais d'erreurs"], correct: 1, explanation: "Un agent peut reussir une tache en 50 etapes ou en 3. Le taux de succes ne capture pas l'efficience, la qualite du raisonnement, ni la robustesse aux cas limites." }
                    ]
                }
            },
            { id: "9-9", title: "Deployer un agent en production", desc: "Docker, cloud, monitoring, securite — mettre ton agent dans le monde reel.", tags: ["course", "tool"], links: [{ label: "Docker Getting Started", url: "https://docs.docker.com/get-started/" }],
                workshop: {
                    duration: "40 min", difficulty: 3,
                    objectives: ["Containeriser un agent avec Docker", "Mettre en place du monitoring", "Securiser un agent en production"],
                    sections: [
                        { type: "theory", title: "De la demo a la production", content: "Un agent en production doit :\n\n**Fiabilite** :\n- Retry automatique sur les erreurs temporaires\n- Timeout sur les outils et les requetes LLM\n- Fallback si un service est indisponible\n\n**Securite** :\n- Sandboxer l'execution de code\n- Limiter les permissions des outils\n- Valider les inputs/outputs\n- Rate limiting\n\n**Observabilite** :\n- Logger chaque etape de l'agent\n- Tracer les couts en tokens\n- Alerter sur les erreurs et anomalies\n\n**Deploiement** :\n- Docker pour la reproductibilite\n- Variables d'environnement pour les secrets\n- Health checks" },
                        { type: "code", language: "dockerfile", code: "# Dockerfile pour un agent Python\nFROM python:3.12-slim\n\nWORKDIR /app\n\n# Copier les dependances\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Copier le code\nCOPY src/ ./src/\n\n# Variables d'environnement (jamais de secrets ici !)\nENV PYTHONUNBUFFERED=1\n\n# Health check\nHEALTHCHECK --interval=30s --timeout=10s \\\n    CMD curl -f http://localhost:8000/health || exit 1\n\n# Lancer\nCMD [\"python\", \"-m\", \"src.main\"]", explanation: "Docker garantit que ton agent fonctionne de la meme facon partout. Les secrets (API keys) sont passes via des variables d'environnement au runtime, jamais dans l'image." },
                        { type: "info", variant: "warning", content: "En production, TOUJOURS sandboxer l'execution de code par l'agent. Un agent mal configure avec acces au shell pourrait causer des degats serieux." },
                        { type: "quiz", question: "Pourquoi utilise-t-on Docker pour deployer un agent ?", choices: ["Pour que ca aille plus vite", "Pour garantir que l'agent fonctionne de la meme facon partout (reproductibilite)", "Pour economiser de la memoire", "Pour avoir une meilleure IA"], correct: 1, explanation: "Docker encapsule l'application avec toutes ses dependances dans un container. Fini les 'ca marche sur ma machine' — l'agent se comporte identiquement en dev, test et production." }
                    ]
                }
            },
            { id: "9-10", title: "PROJET FINAL : Ton agent IA complet", desc: "Construis un agent autonome de A a Z — choisis ton domaine, tes outils, et deploie-le.", tags: ["project"], links: [{ label: "AI Agents Roadmap", url: "https://roadmap.sh/ai-agents" }],
                workshop: {
                    duration: "120 min", difficulty: 3,
                    objectives: ["Concevoir l'architecture d'un agent complet", "Implementer les outils et la boucle agent", "Tester, documenter et deployer"],
                    sections: [
                        { type: "theory", title: "Ton projet final", content: "C'est le moment de tout combiner ! Construis un agent complet de A a Z.\n\nIdees de projets :\n- **Agent de recherche** : cherche sur le web, synthetise, produit un rapport\n- **Agent DevOps** : monitore des services, alerte, propose des fixes\n- **Agent de support** : repond aux questions clients a partir d'une FAQ (RAG)\n- **Agent d'analyse** : charge des CSV, analyse, produit des graphiques\n- **Agent de code review** : lit des PRs, commente, suggere des ameliorations\n\nChecklist :\n- [ ] Architecture documentee\n- [ ] Au moins 3 outils\n- [ ] Gestion de la memoire\n- [ ] Tests automatises\n- [ ] Gestion d'erreurs robuste\n- [ ] README complet\n- [ ] Docker (bonus)" },
                        { type: "code", language: "python", code: "# Structure recommandee du projet\n# mon-agent/\n#   README.md\n#   requirements.txt\n#   Dockerfile\n#   .env.example\n#   src/\n#     __init__.py\n#     agent.py         # Boucle agent principale\n#     tools/\n#       __init__.py\n#       search.py      # Outil de recherche\n#       file_ops.py    # Operations fichiers\n#       calculator.py  # Calculs\n#     memory/\n#       __init__.py\n#       short_term.py  # Historique conversation\n#       long_term.py   # Base vectorielle\n#     config.py        # Configuration\n#   tests/\n#     test_agent.py\n#     test_tools.py\n#     test_cases.json  # Scenarios de test\n\n# agent.py — Squelette\nclass Agent:\n    def __init__(self, tools, memory):\n        self.tools = tools\n        self.memory = memory\n        self.client = anthropic.Anthropic()\n\n    def run(self, task, max_steps=10):\n        \"\"\"Boucle agent principale\"\"\"\n        messages = [{\"role\": \"user\", \"content\": task}]\n        for step in range(max_steps):\n            response = self._think(messages)\n            if self._is_done(response):\n                return self._extract_result(response)\n            tool_results = self._act(response)\n            messages = self._update_messages(messages, response, tool_results)\n        return \"Tache non completee dans le nombre d'etapes limite\"\n\n    def _think(self, messages):\n        return self.client.messages.create(\n            model=\"claude-sonnet-4-6\",\n            max_tokens=4096,\n            system=self._get_system_prompt(),\n            tools=self._get_tool_schemas(),\n            messages=messages\n        )", explanation: "Ce squelette suit le pattern ReAct : think → act → observe → repeat. A toi de le remplir avec TES outils et TA logique !" },
                        { type: "exercise", title: "Lance-toi !", instructions: "1. Choisis un domaine qui te passionne\n2. Definis 3-5 outils necessaires\n3. Dessine l'architecture (meme sur papier)\n4. Implemente la v1 minimale\n5. Teste avec 5 scenarios\n6. Ameliore et itere\n7. Documente et partage sur GitHub !", starterCode: "# Ton agent commence ici.\n# Choisis ton aventure !", solution: "# Criteres de reussite :\n# - L'agent accomplit au moins 3 types de taches differents\n# - Il gere les erreurs gracieusement\n# - Il a des tests automatises\n# - Le code est propre et documente\n# - Un README explique comment l'utiliser\n# - Deploye sur GitHub\n#\n# FELICITATIONS ! Tu es passe de 'je ne sais pas coder'\n# a 'je construis des agents IA'. Le voyage continue !", language: "python" }
                    ]
                }
            }
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
