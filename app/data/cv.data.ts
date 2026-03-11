import { CV } from "./cv.types";

export const CVData = {
  fr: {
    sec: {
      identity: {
        name: "Paul NELATON",
        role: "Ingénieur SecOps",
        mobility: "Mobilité Toulouse / Montpellier",
        summary:
          "Ingénieur cybersécurité spécialisé dans la sécurisation d'infrastructures critiques, avec plus de six ans d'expérience en environnements à fortes contraintes de disponibilité.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+55 48 988117655",
          website: "paulnelaton.com",
        },
      },
      stats: [
        { label: "Sécurité Systèmes & Réseaux", value: 90, color: "#00005c" },
        { label: "Automatisation & DevOps", value: 88, color: "#21219b" },
        {
          label: "Architecture & Industrialisation",
          value: 85,
          color: "#3b82f6",
        },
        { label: "Ingénierie Logicielle", value: 80, color: "#60a5fa" },
      ],
      skillTrees: [
        {
          title: "Cybersécurité",
          skills: [
            "CyberArk PAM",
            "Qualys",
            "Firewalls",
            "ELK",
            "Threat detection & SOC",
            "McAfee EDR",
            "Proxy & Web Filtering",
            "DNS Security",
          ],
        },
        {
          title: "Systèmes & Infrastructures",
          skills: [
            "Windows Server",
            "Linux",
            "Windows",
            "Active Directory",
            "VMware ESXi",
            "SCCM",
            "IAM",
          ],
        },
        {
          title: "DevOps & Automatisation",
          skills: [
            "C# / .NET",
            "PowerShell",
            "Python",
            "Ansible",
            "REST APIs",
            "Git",
            "CI/CD Automation",
          ],
        },
      ],
      experience: [
        {
          period: "2024 - Présent",
          company: "Projet Indépendant",
          role: "Ingénieur logiciel",
          desc: [
            "Conception et développement d'une architecture logicielle modulaire en C# (.NET / Unity).",
            "Développement d'un moteur de génération procédurale multi-couches paramétrable (règles, contraintes, priorités).",
            "Implémentation d'algorithmes de distribution et de logique événementielle complexe.",
            "Optimisation des performances et gestion des dépendances systèmes.",
            "Structuration complète de l'architecture.",
            "Développement d'une interface web fullstack (React / Next.js) intégrée à l'écosystème du projet.",
          ],
        },
        {
          period: "2019 - 2024",
          company: "Vinci Autoroutes",
          role: "Ingénieur SecOps",
          desc: [
            "MCO d'infrastructures critiques (OIV).",
            "Rémédiation et investigation des vulnérabilités (Qualys).",
            "Durcissement Windows Server, Windows 10 et ESXi.",
            "Remédiation AD (ALSID) et gestion du patching via SCCM.",
            "Déploiement et administration PAM (CyberArk).",
            "Centralisation et exploitation des logs via ELK (SOC).",
            "Automatisation des contrôles de sécurité et reporting MCO.",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Ingénieur Cybersécurité & DevOps",
          desc: [
            "Automatisation des flux de détection et d'escalade via intégration API.",
            "Intégration SIEM et interconnexion entre RTIR, TheHive et ELK pour réponse à incidents et ticketing.",
            "Automatisation de compliance des équipements sécurité et réseau avec Ansible.",
            "Étude et intégration de solution PAM.",
            "Réalisation de maquettes techniques et rédaction de documentation en anglais.",
          ],
        },
        {
          period: "2017 - 2018",
          company: "Orange Cyberdefense",
          role: "Ingénieur Sécurité Réseau",
          desc: [
            "MCO sur le périmètre mondial de Air Liquide incluant :",
            "Administration firewalls (Checkpoint, Cisco ASA, Fortinet, Palo Alto).",
            "Gestion proxy (Zscaler) et solutions DNS / sécurité F5.",
            "Gestion d'incidents N1/N2 en environnement multi-sites mondial.",
          ],
        },
      ],
      formations: [
        {
          year: "2019–2020",
          title: "Certifications",
          school: "Zscaler ZCCA / ZCCP",
        },
        {
          year: "2016",
          title: "Ingénieur Systèmes, réseaux et sécurité",
          school: "AFTI (Orsay)",
        },
        {
          year: "2015",
          title: "Licence Informatique",
          school: "Univ. Franche-Comté",
        },
      ],
      languages: [
        { name: "Français", level: "Langue maternelle" },
        { name: "Anglais", level: "Courant professionnel" },
        { name: "Portugais", level: "Courant" },
      ],
      labels: {
        domains: "Domaines d'expertise",
        technicalSkills: "Compétences techniques",
        education: "Formation & certifications",
        languages: "Langues",
        experience: "Expérience professionnelle",
      },
    },
    dev: {
      identity: {
        name: "Paul NELATON",
        role: "Ingénieur Logiciel & FullStack Développeur",
        mobility: "Mobilité Toulouse / Montpellier",
        summary:
          "Développeur FullStack concevant et livrant des applications web et logicielles complètes, avec une forte sensibilité à l'expérience utilisateur et aux architectures modulaires, performantes et scalables. Capable de transformer rapidement une idée produit en solution fonctionnelle.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+55 48 988117655",
          website: "paulnelaton.com",
        },
      },
      stats: [
        { label: "Ingénierie Logicielle", value: 90, color: "#1e40af" },
        { label: "FullStack Web", value: 80, color: "#3b82f6" },
        { label: "Automatisation", value: 85, color: "#2563eb" },
        { label: "Sécurité & Infrastructure", value: 90, color: "#1e40af" },
      ],
      skillTrees: [
        {
          title: "Développement Frontend",
          skills: [
            "React",
            "Next.js",
            "Angular",
            "Vue.js",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Responsive UI",
            "Frontend API Integration",
          ],
        },
        {
          title: "Développement Backend",
          skills: [
            "C#",
            ".NET",
            ".NET Core",
            "ASP.NET",
            "Node.js",
            "REST APIs",
            "SQL",
            "OOP",
            "SOLID Principles",
            "Algorithm Design",
            "IA Generative",
          ],
        },
        {
          title: "DevOps & Automatisation",
          skills: [
            "PowerShell",
            "Python",
            "Ansible",
            "Git",
            "CI/CD Pipelines",
            "Automation & Scripting",
            "REST APIs",
          ],
        },
      ],

      experience: [
        {
          period: "2025 - Présent",
          company: "Projet Indépendant",
          role: "FullStack Developer / Product Builder",
          desc: [
            "Développement d'une plateforme web personnelle (React / Next.js / Node.js).",
            "Création d'un générateur automatisé de CV et dossiers de compétences optimisés ATS.",
            "Développement d'une interface frontend responsive et simple d'utilisation.",
            "Intégration API et génération dynamique de PDF via Puppeteer.",
            "Portfolio : https://paulnelaton.com/",
          ],
        },
        {
          period: "2024 - Présent",
          company: "Projet Indépendant",
          role: "Software Engineer",
          desc: [
            "Conception et développement d'une architecture backend modulaire en C# (.NET / .NET Core).",
            "Développement d'un moteur de génération procédurale paramétrable (gestion de règles, contraintes et priorités).",
            "Implémentation d'algorithmes de simulation, logique événementielle et gestion d'états complexes.",
            "Optimisation des performances mémoire et CPU.",
            "Structuration d'une architecture logicielle maintenable (SOLID, modularité, séparation des responsabilités).",
            "Développement d'une interface web fullstack pour la présentation du projet (React / Next.js).",
            "Gestion complète du projet : conception produit, développement, tests et itérations.",
            "Portfolio : https://braineatersgame.com/",
          ],
        },
        {
          period: "2019 - 2024",
          company: "Vinci Autoroutes",
          role: "Ingénieur SecOps",
          desc: [
            "Automatisation des contrôles de sécurité et reporting via scripts PowerShell.",
            "Industrialisation du patch management et du durcissement système.",
            "Développement d'outils internes pour remédiation et suivi de conformité.",
            "Collection et exploitation de données via ELK.",
            "MCO sur périmètre critique à haute disponibilité.",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Ingénieur DevOps & Automatisation",
          desc: [
            "Automatisation des flux de détection et d'escalade via intégration d'API REST.",
            "Interconnexion et intégration SIEM (RTIR, TheHive, ELK).",
            "Automatisation de la compliance réseau avec Ansible.",
            "Développement de scripts d'orchestration et outils internes.",
            "Rédaction technique en environnement international.",
          ],
        },
      ],
      formations: [
        {
          year: "2016",
          title: "Ingénieur Systèmes, réseaux et sécurité",
          school: "AFTI (Orsay)",
        },
        {
          year: "2015",
          title: "Licence Informatique",
          school: "Univ. Franche-Comté",
        },
        { year: "2014", title: "DUT Informatique", school: "IUT de Belfort" },
      ],
      languages: [
        { name: "Français", level: "Langue maternelle" },
        { name: "Anglais", level: "Courant professionnel" },
        { name: "Portugais", level: "Courant" },
      ],
      labels: {
        domains: "Domaines d'expertise",
        technicalSkills: "Compétences techniques",
        education: "Formation & certifications",
        languages: "Langues",
        experience: "Expérience professionnelle",
      },
    },
    product: {
      identity: {
        name: "Paul NELATON",
        role: "Ingénieur Logiciel & Technical Product Owner",
        mobility: "Mobilité Toulouse / Montpellier",
        summary:
          "Ingénieur logiciel et cybersécurité avec 9 ans d'expérience dans la conception d'outils techniques et l'automatisation de plateformes internes. Habitué à structurer des solutions et à travailler à l'interface entre enjeux techniques et besoins opérationnels.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+55 48 988117655",
          website: "paulnelaton.com",
        },
      },
      stats: [
        {
          label: "Architecture & conception de solutions",
          value: 90,
          color: "#00005c",
        },
        {
          label: "Ingénierie logicielle",
          value: 88,
          color: "#21219b",
        },
        {
          label: "Automatisation & industrialisation",
          value: 86,
          color: "#3b82f6",
        },
        {
          label: "Pilotage technique & coordination",
          value: 85,
          color: "#60a5fa",
        },
      ],
      skillTrees: [
        {
          title: "Produit & Plateforme",
          skills: [
            "Vision produit",
            "Roadmap technique",
            "Automatisation des outils",
            "Jira / Confluence",
            "Documentation technique",
            "Méthodes agiles",
          ],
        },
        {
          title: "Développement logiciel",
          skills: [
            "C# / .NET",
            "Typescript",
            "React",
            "Next.js",
            "API REST",
            "UI/UX",
            "Git",
          ],
        },
        {
          title: "Automatisation & DevOps",
          skills: [
            "Python",
            "PowerShell",
            "Pipelines CI/CD",
            "Automatisation de workflows",
            "Intégrations API",
          ],
        },
      ],
      experience: [
        {
          period: "2024 - Présent",
          company: "Projet indépendant",
          role: "Ingénieur logiciel & Product Owner",
          desc: [
            "Conception et développement d'un projet logiciel complet (C# / Unity).",
            "Conception des systèmes et de l'architecture technique globale.",
            "Pilotage de la roadmap technique et structuration du projet.",
            "Amélioration continue du projet par itérations.",
            "Définition de la vision produit et prise en compte de l'expérience utilisateur dans les choix de conception.",
            "Optimisation de l'UX et de la lisibilité des fonctionnalités.",
            "Développement d'une interface web fullstack (React / Next.js).",
          ],
        },
        {
          period: "2019 - 2024",
          company: "Vinci Autoroutes",
          role: "Ingénieur SecOps",
          desc: [
            "Pilotage technique d'implémentations de sécurité sur des infrastructures critiques (OIV).",
            "Analyse des besoins sécurité et définition des plans de remédiation.",
            "Coordination avec les équipes systèmes et réseaux pour déploiement des solutions.",
            "Industrialisation et automatisation de contrôles de sécurité.",
            "Centralisation et exploitation des logs via ELK pour amélioration de la détection.",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Ingénieur Cybersécurité & DevOps",
          desc: [
            "Automatisation des flux de détection et d'escalade via intégration API.",
            "Intégration de plateformes SIEM et outils SOC (RTIR, TheHive, ELK).",
            "Automatisation de compliance des équipements sécurité et réseau avec Ansible.",
            "Réalisation de maquettes techniques et contribution aux choix d'architecture.",
          ],
        },
        {
          period: "2017 - 2018",
          company: "Orange Cyberdefense",
          role: "Ingénieur Sécurité Réseau",
          desc: [
            "MCO sur le périmètre mondial de Air Liquide incluant :",
            "Administration firewalls (Checkpoint, Cisco ASA, Fortinet, Palo Alto).",
            "Gestion proxy (Zscaler) et solutions DNS / sécurité F5.",
            "Gestion d'incidents N1/N2 en environnement multi-sites mondial.",
          ],
        },
        {
          period: "2016 - 2017",
          company: "Cinquième Avenue",
          role: "Ingénieur réseau & chef de projet junior",
          desc: [
            "Gestion des déploiements d'infrastructures et solutions télécom chez les clients.",
            "Organisation et planification des interventions techniques.",
            "Interface directe avec les clients pour cadrage des besoins et suivi des déploiements.",
            "Participation à la conception et au lancement d'une nouvelle offre de téléphonie IP.",
            "Formation interne SFR : fondamentaux de la gestion de projet.",
          ],
        },
      ],

      formations: [
        {
          year: "2016-2017",
          title: "Formation",
          school: "Chef de projet déploiement téléphonie SFR",
        },
        {
          year: "2016",
          title: "Ingénieur Systèmes, réseaux et sécurité",
          school: "AFTI (Orsay)",
        },
        {
          year: "2015",
          title: "Licence Informatique",
          school: "Univ. Franche-Comté",
        },
      ],
      languages: [
        { name: "Français", level: "Langue maternelle" },
        { name: "Anglais", level: "Courant professionnel" },
        { name: "Portugais", level: "Courant" },
      ],
      labels: {
        domains: "Domaines d'expertise",
        technicalSkills: "Compétences techniques",
        education: "Formation & certifications",
        languages: "Langues",
        experience: "Expérience professionnelle",
      },
    },
  },
  en: {
    sec: {
      identity: {
        name: "Paul NELATON",
        role: "SecOps Engineer",
        mobility: "Open to opportunities in Toulouse / Montpellier",
        summary:
          "SecOps engineer with over six years of experience securing critical infrastructures. Strong background in automation, software engineering, and high-availability environments.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+55 48 988117655",
          website: "paulnelaton.com",
        },
      },

      stats: [
        { label: "Systems & Network Security", value: 90, color: "#00005c" },
        { label: "Automation & DevOps", value: 88, color: "#21219b" },
        {
          label: "Architecture & Industrialization",
          value: 85,
          color: "#3b82f6",
        },
        { label: "Software Engineering", value: 80, color: "#60a5fa" },
      ],

      skillTrees: [
        {
          title: "Cybersecurity",
          skills: [
            "CyberArk PAM",
            "Qualys",
            "Firewalls",
            "ELK",
            "Threat detection & SOC",
            "McAfee EDR",
            "Proxy & Web Filtering",
            "DNS Security",
          ],
        },
        {
          title: "Systems & Infrastructures",
          skills: [
            "Windows Server",
            "Linux",
            "Windows",
            "Active Directory",
            "VMware ESXi",
            "SCCM",
            "IAM",
          ],
        },
        {
          title: "DevOps & Automation",
          skills: [
            "C# / .NET",
            "PowerShell",
            "Python",
            "Ansible",
            "REST APIs",
            "Git",
            "CI/CD Automation",
          ],
        },
      ],

      experience: [
        {
          period: "2024 - Present",
          company: "Independent Project",
          role: "Software Engineer",
          desc: [
            "Designed and developed a modular software architecture using C# (.NET / Unity).",
            "Built a multi-layer procedural generation engine with configurable rules and constraints.",
            "Implemented complex distribution algorithms and event-driven logic.",
            "Optimized performance and managed system dependencies.",
            "Structured the full project architecture.",
            "Developed a full-stack web interface (React / Next.js) integrated into the ecosystem.",
          ],
        },
        {
          period: "2019 - 2024",
          company: "Vinci Autoroutes",
          role: "SecOps Engineer",
          desc: [
            "Maintained and secured critical infrastructure environments.",
            "Vulnerability remediation and investigation using Qualys.",
            "Hardening of Windows Server, Windows 10 and VMware ESXi.",
            "Active Directory remediation and patch management via SCCM.",
            "Deployment and administration of PAM solution (CyberArk).",
            "Centralized logging and SOC monitoring via ELK.",
            "Security automation and operational reporting.",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Cybersecurity Engineer",
          desc: [
            "Automated detection and escalation workflows via API integrations.",
            "Integrated SIEM ecosystem (RTIR, TheHive, ELK) for incident response.",
            "Security and network compliance automation using Ansible.",
            "PAM solution evaluation and integration.",
            "Delivered technical documentation in English.",
          ],
        },
        {
          period: "2017 - 2018",
          company: "Orange Cyberdefense",
          role: "Network Security Engineer",
          desc: [
            "Operational support for Air Liquide's global perimeter.",
            "Firewall administration (Checkpoint, Cisco ASA, Fortinet, Palo Alto).",
            "Proxy (Zscaler) and DNS security management.",
            "Incident handling in multi-site international environments.",
          ],
        },
      ],

      formations: [
        {
          year: "2019-2020",
          title: "Certifications",
          school: "Zscaler ZCCA / ZCCP",
        },
        {
          year: "2016",
          title: "Engineering Degree in Networks, Systems and Security",
          school: "AFTI (Orsay)",
        },
        {
          year: "2015",
          title: "Bachelor's Degree in Computer Science",
          school: "University of Franche-Comté",
        },
      ],

      languages: [
        { name: "French", level: "Native" },
        { name: "English", level: "Professional proficiency" },
        { name: "Portuguese", level: "Fluent" },
      ],
      labels: {
        domains: "Areas of Expertise",
        technicalSkills: "Technical Skills",
        education: "Education & Certifications",
        languages: "Languages",
        experience: "Professional Experience",
      },
    },
    dev: {
      identity: {
        name: "Paul NELATON",
        role: "Software Engineer & FullStack Web Developer",
        mobility: "Open to opportunities in Toulouse / Montpellier",
        summary:
          "Software engineer with over six years of experience, focused on automation, security, and application development, with a strong emphasis on modular, high-performance, and scalable architectures.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+55 48 988117655",
          website: "paulnelaton.com",
        },
      },

      stats: [
        { label: "Software Engineering", value: 90, color: "#1e40af" },
        { label: "Fullstack Web Development", value: 80, color: "#3b82f6" },
        { label: "Automation & DevOps", value: 85, color: "#2563eb" },
        { label: "Security & Infrastructure", value: 90, color: "#1e40af" },
      ],

      skillTrees: [
        {
          title: "Backend Development",
          skills: [
            "C#",
            ".NET",
            ".NET Core",
            "ASP.NET",
            "Node.js",
            "REST APIs",
            "SQL",
            "OOP",
            "SOLID Principles",
            "Algorithm Design",
          ],
        },
        {
          title: "Frontend Development",
          skills: [
            "React",
            "Next.js",
            "Vue.js",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Responsive UI",
            "Frontend API Integration",
          ],
        },
        {
          title: "DevOps & Automation",
          skills: [
            "PowerShell",
            "Python",
            "Ansible",
            "Git",
            "CI/CD Pipelines",
            "Automation & Scripting",
            "REST APIs",
          ],
        },
      ],

      experience: [
        {
          period: "2024 - Present",
          company: "Independent Project",
          role: "Software Engineer",
          desc: [
            "Designed and developed a modular backend architecture using C# (.NET / .NET Core).",
            "Developed a configurable procedural generation engine (rules, constraints, priorities).",
            "Implemented distribution algorithms, event-driven logic, and complex state management.",
            "Optimized memory usage and CPU performance.",
            "Structured the overall project architecture (separation of concerns, modularity, maintainability).",
            "Developed a full-stack web interface using React / Next.js.",
            "Portfolio: https://braineatersgame.com/",
          ],
        },
        {
          period: "2019 - 2024",
          company: "Vinci Autoroutes",
          role: "Automation & SecOps Engineer",
          desc: [
            "Automated security controls and reporting using PowerShell scripts.",
            "Industrialized patch management and system hardening processes.",
            "Developed internal tools for remediation and compliance tracking.",
            "Collected and analyzed data using ELK stack.",
            "Maintained critical high-availability environments.",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "DevOps & Automation Engineer",
          desc: [
            "Automated detection and escalation workflows via REST API integrations.",
            "Integrated and interconnected SIEM platforms (RTIR, TheHive, ELK).",
            "Automated network compliance using Ansible.",
            "Developed orchestration scripts and internal tooling.",
            "Produced technical documentation in an international environment.",
          ],
        },
      ],

      formations: [
        {
          year: "2016",
          title: "Engineering Degree in Networks, Systems and Security",
          school: "AFTI (Orsay)",
        },
        {
          year: "2015",
          title: "Bachelor's Degree in Computer Science",
          school: "University of Franche-Comté",
        },
        {
          year: "2014",
          title: "DUT Computer Science",
          school: "IUT of Belfort",
        },
      ],

      languages: [
        { name: "French", level: "Native" },
        { name: "English", level: "Professional proficiency" },
        { name: "Portuguese", level: "Fluent" },
      ],

      labels: {
        domains: "Areas of Expertise",
        technicalSkills: "Technical Skills",
        education: "Education & Certifications",
        languages: "Languages",
        experience: "Professional Experience",
      },
    },
    product: {
      identity: {
        name: "Paul NELATON",
        role: "Software Engineer & Technical Product Owner",
        mobility: "Open to opportunities in Toulouse / Montpellier",
        summary:
          "Software and cybersecurity engineer with 9 years of experience designing technical tools and automating internal platforms. Used to structuring solutions and working at the intersection of technical challenges and operational needs.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+55 48 988117655",
          website: "paulnelaton.com",
        },
      },

      stats: [
        {
          label: "Solution Architecture & Design",
          value: 90,
          color: "#00005c",
        },
        {
          label: "Software Engineering",
          value: 88,
          color: "#21219b",
        },
        {
          label: "Automation & Industrialization",
          value: 86,
          color: "#3b82f6",
        },
        {
          label: "Technical Leadership & Coordination",
          value: 85,
          color: "#60a5fa",
        },
      ],

      skillTrees: [
        {
          title: "Product & Platform",
          skills: [
            "Product vision",
            "Technical roadmap",
            "Tooling automation",
            "Jira / Confluence",
            "Technical documentation",
            "Agile methodologies",
          ],
        },
        {
          title: "Software Development",
          skills: [
            "C# / .NET",
            "Typescript",
            "React",
            "Next.js",
            "REST APIs",
            "UI/UX",
            "Git",
          ],
        },
        {
          title: "Automation & DevOps",
          skills: [
            "Python",
            "PowerShell",
            "CI/CD pipelines",
            "Workflow automation",
            "API integrations",
          ],
        },
      ],

      experience: [
        {
          period: "2024 - Present",
          company: "Independent Project",
          role: "Software Engineer & Product Owner",
          desc: [
            "Design and development of a complete software project (C# / Unity).",
            "Design of core systems and overall technical architecture.",
            "Ownership of the technical roadmap and project structuring.",
            "Continuous improvement through iterative development.",
            "Definition of product vision with strong focus on user experience.",
            "UX optimization and feature clarity improvements.",
            "Development of a fullstack web interface (React / Next.js).",
          ],
        },
        {
          period: "2019 - 2024",
          company: "Vinci Autoroutes",
          role: "SecOps Engineer",
          desc: [
            "Technical leadership for security implementations on critical infrastructures (OIV).",
            "Security needs analysis and definition of remediation strategies.",
            "Coordination with system and network teams for solution deployment.",
            "Industrialization and automation of security controls.",
            "Centralization and analysis of logs using ELK to improve detection capabilities.",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Cybersecurity & DevOps Engineer",
          desc: [
            "Automation of detection and escalation workflows through API integrations.",
            "Integration of SIEM platforms and SOC tools (RTIR, TheHive, ELK).",
            "Automation of network and security equipment compliance using Ansible.",
            "Technical prototyping and contribution to architectural decisions.",
          ],
        },
        {
          period: "2017 - 2018",
          company: "Orange Cyberdefense",
          role: "Network Security Engineer",
          desc: [
            "Operational maintenance for Air Liquide's global security infrastructure.",
            "Firewall administration (Checkpoint, Cisco ASA, Fortinet, Palo Alto).",
            "Proxy management (Zscaler) and DNS security solutions (F5).",
            "N1/N2 incident management in a global multi-site environment.",
          ],
        },
        {
          period: "2016 - 2017",
          company: "Cinquième Avenue",
          role: "Network Engineer & Junior Project Manager",
          desc: [
            "Management of telecom infrastructure deployments for clients.",
            "Planning and organization of technical interventions.",
            "Direct client interface for requirement definition and deployment follow-up.",
            "Participation in the design and launch of a new IP telephony offering.",
            "Internal SFR training on project management fundamentals.",
          ],
        },
      ],

      formations: [
        {
          year: "2016-2017",
          title: "Training",
          school: "SFR - Telecom Deployment Project Manager",
        },
        {
          year: "2016",
          title: "Engineering Degree - Systems, Networks & Security",
          school: "AFTI (Orsay)",
        },
        {
          year: "2015",
          title: "Bachelor's Degree - Computer Science",
          school: "University of Franche-Comté",
        },
      ],

      languages: [
        { name: "French", level: "Native" },
        { name: "English", level: "Professional proficiency" },
        { name: "Portuguese", level: "Fluent" },
      ],

      labels: {
        domains: "Areas of Expertise",
        technicalSkills: "Technical Skills",
        education: "Education & Certifications",
        languages: "Languages",
        experience: "Professional Experience",
      },
    },
  },
};
