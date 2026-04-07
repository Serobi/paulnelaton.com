import { CV } from "./cv.types";

export const CVData = {
  fr: {
    sec: {
      identity: {
        name: "Paul NELATON",
        role: "Ingénieur SecOps & Spécialiste Technico-Fonctionnel",
        mobility: "Mobilité Montpellier / Toulouse / Besançon",
        summary:
          "Ingénieur SecOps avec une forte approche fonctionnelle, spécialisé dans la sécurisation d'infrastructures critiques et l'industrialisation des processus de sécurité. Mêlant cybersécurité, automatisation et analyse métier avec une capacité à structurer des environnements, améliorer les processus et répondre efficacement aux enjeux opérationnels et organisationnels.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+33 685589364",
          website: "paulnelaton.com",
        },
      },

      stats: [
        { label: "Cybersécurité & SecOps" },
        { label: "Analyse Fonctionnelle & Structuration" },
        { label: "Automatisation & DevOps" },
        { label: "Sécurité des Identités & Infrastructures" },
      ],

      skillTrees: [
        {
          title: "Cybersécurité",
          skills: [
            "Management Vulnérabilités (Qualys, Alsid)",
            "PAM (CyberArk)",
            "SIEM / ELK",
            "Threat Detection & SOC",
            "Incident Response",
            "Security Hardening",
            "Firewalls",
            "Proxy",
          ],
        },
        {
          title: "Systèmes & Infrastructures",
          skills: [
            "Windows Server",
            "Linux",
            "Active Directory",
            "VMware ESXi",
            "IAM",
            "SCCM",
            "High Availability Systems",
          ],
        },
        {
          title: "Automatisation & Fonctionnel",
          skills: [
            "C# / .NET",
            "PowerShell",
            "Python",
            "Ansible",
            "REST APIs",
            "Automatisation & Scripting",
            "Analyse Fonctionnelle",
          ],
        },
      ],

      experience: [
        {
          period: "2024 - 2026",
          company: "Projet Indépendant",
          role: "Ingénieur Logiciel",
          desc: [
            "Conception et développement d'une architecture logicielle modulaire en C# (.NET / .NET Core), orientée performance, maintenabilité et scalabilité.",
            "Gestion du projet en autonomie complète : structuration, planification, priorisation et pilotage de la livraison.",
            "Développement de systèmes complexes (génération procédurale, logique métier, gestion d'états) avec une forte approche algorithmique.",
            "Développement de fonctionnalités full-stack : backend, intégration UI et interface web (React / Next.js).",
            "Mise en œuvre de bonnes pratiques d'architecture logicielle (modularité, séparation des responsabilités, SOLID).",
            "Approche orientée industrialisation : structuration des composants, automatisation et optimisation des performances.",
            "Montée en compétences continue sur les problématiques d'architecture, de performance et de fiabilité des systèmes.",
            "Portfolio : https://braineatersgame.com/",
          ],
        },
        {
          period: "2019 - 2021",
          company: "Vinci Autoroutes",
          role: "Ingénieur SecOps",
          desc: [
            "Automatisation des contrôles de sécurité, reporting et tableaux de bord pour améliorer l'efficacité du MCO.",
            "Conception et industrialisation des processus de patch management et de durcissement des systèmes.",
            "Mise en place d'une solution de collecte et d'analyse des logs (ELK) dans un contexte SOC.",
            "Maintien et sécurisation d'infrastructures critiques à haute disponibilité (Windows, VMware, Solaris).",
            "Pilotage de la sécurité sur des infrastructures sensibles (OIV).",
            "Gestion des vulnérabilités et remédiation (Qualys, Alsid), notamment sur Active Directory.",
            "Administration et sécurisation des accès à privilèges via une solution PAM (CyberArk).",
            "Contribution à la sécurité des identités (IAM / Active Directory) et gestion des droits.",
            "Participation à la mise en place d'un SOC et gestion des incidents de sécurité (N2/N3).",
            "Investigation de menaces réelles (Emotet, CVE-2020-1472 - Netlogon).",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Ingénieur Cybersécurité & DevOps",
          desc: [
            "Automatisation des workflows de détection et d'escalade via intégration d'API.",
            "Interconnexion de plateformes SIEM (RTIR, TheHive, ELK).",
            "Automatisation de la conformité des équipements réseau et sécurité (Ansible).",
            "Contribution à l'intégration de solutions PAM.",
            "Rédaction de documentation technique en environnement international.",
          ],
        },
        {
          period: "2017 - 2018",
          company: "Orange Cyberdefense",
          role: "Ingénieur Sécurité Réseau",
          desc: [
            "Maintien en conditions opérationnelles d'infrastructures de sécurité globales pour Air Liquide (périmètre international).",
            "Administration de solutions de sécurité réseau : firewalls (Checkpoint, Cisco ASA, Fortinet, Palo Alto), proxy Zscaler et DNS sécurisé (F5).",
            "Gestion des incidents et demandes sur un périmètre multi-technologies (N1/N2), avec prise en charge complète jusqu'à résolution.",
            "Analyse des besoins clients et adaptation des solutions de sécurité associées.",
            "Exploitation d'outils de gestion et de supervision (Tufin, ServiceNow, Centreon, IPAM).",
            "Interventions sur un périmètre étendu : firewalls Europe & Amérique, proxy et endpoint protection à l'échelle mondiale.",
          ],
        },
        {
          period: "2016 - 2017",
          company: "5ème Avenue",
          role: "Administrateur Réseaux & VOIP",
          desc: [
            "Déploiement d'infrastructures réseau, sécurité et VOIP auprès de clients PME.",
            "Planification, pilotage et réalisation des interventions techniques.",
            "Interface client pour la définition des besoins et le suivi des projets.",
            "Participation à la conception et au lancement d'une offre de téléphonie IP (XiVO).",
            "Formations internes SFR sur les fondamentaux de gestion de projet en déploiement télécom.",
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
          title: "Ingénieur Réseaux, Systèmes et Sécurité",
          school: "AFTI (Orsay)",
        },
        {
          year: "2015",
          title: "Licence Informatique",
          school: "Université de Franche-Comté",
        },
      ],

      languages: [
        { name: "Français", level: "Langue maternelle" },
        { name: "Anglais", level: "Professionnel" },
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
        role: "Ingénieur Logiciel & Spécialiste Technico-Fonctionnel",
        mobility: "Mobilité Montpellier / Toulouse / Besançon",
        summary:
          "Ingénieur logiciel avec une approche produit et fonctionnelle, spécialisé dans la conception de systèmes scalables de bout en bout. Mêlant développement logiciel, automatisation et sécurité, avec une capacité à structurer des projets, analyser les besoins et livrer des solutions efficaces.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+33 685589364",
          website: "paulnelaton.com",
        },
      },

      stats: [
        { label: "Ingénierie Logicielle" },
        { label: "Analyse Fonctionnelle & Produit" },
        { label: "Automatisation & DevOps" },
        { label: "Sécurité & Infrastructure" },
      ],

      skillTrees: [
        {
          title: "Ingénierie Logicielle",
          skills: [
            "C# / .NET",
            "Node.js",
            "TypeScript",
            "React / Next.js",
            "API REST",
            "SQL",
            "Programmation Orientée Objet",
          ],
        },
        {
          title: "Pratiques d'Ingénierie",
          skills: [
            "Conception de Systèmes",
            "CI/CD",
            "Git",
            "Automatisation & Scripting",
            "Méthodologies Agiles",
            "Systèmes Scalables",
            "Clean Code",
            "Design Patterns",
            "Principes SOLID",
          ],
        },
        {
          title: "Produit & Fonctionnel",
          skills: [
            "Analyse Métier",
            "Analyse Fonctionnelle",
            "Conception de Features",
            "Structuration Produit",
            "Vision Produit",
          ],
        },
      ],

      experience: [
        {
          period: "2025 - 2026",
          company: "Projet Indépendant",
          role: "Développeur Full-Stack",
          desc: [
            "Conception et développement d'une plateforme web personnelle (React / Next.js / Node.js).",
            "Création d'un générateur automatisé de CV et portfolio de compétences optimisé ATS.",
            "Développement d'une interface frontend responsive et centrée utilisateur.",
            "Intégration d'APIs et génération dynamique de PDF via Puppeteer.",
            "Portfolio : https://paulnelaton.com/",
          ],
        },
        {
          period: "2024 - 2025",
          company: "Projet Indépendant",
          role: "Ingénieur Logiciel",
          desc: [
            "Conception et mise en place d'une architecture modulaire en C# (.NET / .NET Core), garantissant scalabilité et maintenabilité.",
            "Gestion du projet en autonomie complète, combinant développement, structuration produit et pilotage de la livraison.",
            "Développement de systèmes et algorithmes (génération procédurale, gestion de ville, logique à états).",
            "Développement de fonctionnalités full-stack : backend, intégration UI et interface web (React / Next.js).",
            "Pilotage du cycle de vie complet : conception, définition des features, implémentation et optimisation.",
            "Structuration du projet avec planification, priorisation et itérations.",
            "Définition de la vision produit, gestion de la roadmap et priorisation selon les objectifs gameplay et UX.",
            "Portfolio : https://braineatersgame.com/",
          ],
        },
        {
          period: "2019 - 2021",
          company: "Vinci Autoroutes",
          role: "Ingénieur SecOps",
          desc: [
            "Automatisation des contrôles de sécurité, reporting et tableaux de bord pour améliorer l'efficacité du MCO.",
            "Conception des processus de patch management et de durcissement des systèmes.",
            "Mise en place d'une solution de collecte et d'analyse des logs (ELK).",
            "Maintien et sécurisation d'infrastructures critiques à haute disponibilité (Windows, VMware, Solaris).",
            "Pilotage de la sécurité sur des infrastructures critiques (OIV).",
            "Gestion des vulnérabilités et remédiation (Qualys, Alsid).",
            "Administration d'une solution PAM (CyberArk).",
            "Participation à la mise en place d'un SOC et gestion des incidents (N2/N3).",
            "Investigation de menaces réelles (Emotet, CVE-2020-1472 - Netlogon).",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Ingénieur DevOps & Automatisation",
          desc: [
            "Automatisation des workflows de détection et d'escalade via intégration d'API REST.",
            "Interconnexion de plateformes SIEM (RTIR, TheHive, ELK).",
            "Automatisation de la conformité réseau via Ansible.",
            "Développement de scripts d'orchestration et d'outils internes.",
            "Rédaction de documentation technique en environnement international.",
          ],
        },
        {
          period: "2017 - 2018",
          company: "Orange Cyberdefense",
          role: "Ingénieur Sécurité Réseau",
          desc: [
            "Maintien en conditions opérationnelles d'infrastructures de sécurité globales pour Air Liquide (périmètre international).",
            "Administration de solutions de sécurité réseau : firewalls (Checkpoint, Cisco ASA, Fortinet, Palo Alto), proxy Zscaler et DNS sécurisé (F5).",
            "Gestion des incidents et demandes sur un périmètre multi-technologies (N1/N2), avec prise en charge complète jusqu'à résolution.",
            "Analyse des besoins clients et adaptation des solutions de sécurité associées.",
            "Exploitation d'outils de gestion et de supervision (Tufin, ServiceNow, Centreon, IPAM).",
            "Interventions sur un périmètre étendu : firewalls Europe & Amérique, proxy et endpoint protection à l'échelle mondiale.",
          ],
        },
        {
          period: "2016 - 2017",
          company: "5ème Avenue",
          role: "Administrateur Réseaux & VOIP",
          desc: [
            "Déploiement d'infrastructures réseau, sécurité et VOIP auprès de clients PME.",
            "Planification, pilotage et réalisation des interventions techniques.",
            "Interface client pour la définition des besoins et le suivi des projets.",
            "Participation à la conception et au lancement d'une offre de téléphonie IP (XiVO).",
            "Formations internes SFR sur les fondamentaux de gestion de projet en déploiement télécom.",
          ],
        },
      ],

      formations: [
        {
          year: "2016",
          title: "Diplôme d'Ingénieur Systèmes, Réseaux et Sécurité",
          school: "AFTI (Orsay)",
        },
        {
          year: "2015",
          title: "Licence Informatique",
          school: "Université de Franche-Comté",
        },
        {
          year: "2014",
          title: "DUT Informatique",
          school: "IUT de Belfort",
        },
      ],

      languages: [
        { name: "Français", level: "Langue maternelle" },
        { name: "Anglais", level: "Courant Professionnel" },
        { name: "Portugais", level: "Courant" },
      ],

      labels: {
        domains: "Domaines d'expertise",
        technicalSkills: "Compétences techniques",
        education: "Formation",
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
        role: "SecOps Engineer & Functional Specialist",
        mobility: "Mobility Montpellier / Toulouse / Besançon",
        summary:
          "SecOps Engineer with a strong functional mindset, specialized in securing critical infrastructures and industrializing security processes. Combines cybersecurity, automation and system analysis with the ability to structure environments, improve processes and deliver efficient solutions to operational and organizational challenges.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+33 685589364",
          website: "paulnelaton.com",
        },
      },

      stats: [
        { label: "Cybersecurity & SecOps" },
        { label: "Functional Analysis & Structuring" },
        { label: "Automation & DevOps" },
        { label: "Identity & Infrastructure Security" },
      ],

      skillTrees: [
        {
          title: "Cybersecurity",
          skills: [
            "Vulnerability Management (Qualys, Alsid)",
            "PAM (CyberArk)",
            "SIEM / ELK",
            "Threat Detection & SOC",
            "Incident Response",
            "Security Hardening",
            "Firewalls",
            "Proxy",
          ],
        },
        {
          title: "Systems & Infrastructure",
          skills: [
            "Windows Server",
            "Linux",
            "Active Directory",
            "VMware ESXi",
            "IAM",
            "SCCM",
          ],
        },
        {
          title: "Automation & Functional",
          skills: [
            "C# / .NET",
            "PowerShell",
            "Python",
            "Ansible",
            "REST APIs",
            "Automation & Scripting",
            "Functional Analysis",
          ],
        },
      ],

      experience: [
        {
          period: "2024 - 2026",
          company: "Independent Project",
          role: "Software Engineer",
          desc: [
            "Designed and developed a modular software architecture in C# (.NET / .NET Core), focused on performance, maintainability and scalability.",
            "Managed the project end-to-end as a solo developer: structuring, planning, prioritization and delivery.",
            "Developed complex systems and algorithms (procedural generation, business logic, state management).",
            "Delivered full-stack features: backend systems, UI integration and web interface (React / Next.js).",
            "Applied software architecture best practices (modularity, separation of concerns, SOLID principles).",
            "Adopted an industrialization approach: component structuring, automation and performance optimization.",
            "Continuously improved skills in system architecture, performance and reliability.",
            "Portfolio: https://braineatersgame.com/",
          ],
        },
        {
          period: "2019 - 2021",
          company: "Vinci Autoroutes",
          role: "SecOps Engineer",
          desc: [
            "Automated security controls, reporting and dashboards to improve operational efficiency (MCO).",
            "Designed and industrialized patch management and system hardening processes.",
            "Implemented centralized log collection and analysis using ELK in a SOC context.",
            "Maintained and secured critical high-availability infrastructures (Windows, VMware, Solaris).",
            "Led security operations on sensitive infrastructures (OIV).",
            "Managed vulnerability assessment and remediation (Qualys, Alsid), including Active Directory.",
            "Administered and secured privileged access using a PAM solution (CyberArk).",
            "Contributed to identity security (IAM / Active Directory) and access management.",
            "Participated in SOC setup and handled security incidents (L2/L3).",
            "Performed threat investigations on real-world attacks (Emotet, Netlogon CVE-2020-1472).",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Cybersecurity & DevOps Engineer",
          desc: [
            "Automated detection and escalation workflows through API integrations.",
            "Integrated and interconnected SIEM platforms (RTIR, TheHive, ELK).",
            "Automated network and security compliance using Ansible.",
            "Contributed to the integration of PAM solutions.",
            "Produced technical documentation in an international environment.",
          ],
        },
        {
          period: "2017 - 2018",
          company: "Orange Cyberdefense",
          role: "Network Security Engineer",
          desc: [
            "Maintained global security infrastructures for Air Liquide (international scope).",
            "Administered network security solutions: firewalls (Checkpoint, Cisco ASA, Fortinet, Palo Alto), proxy (Zscaler) and secure DNS (F5).",
            "Handled incidents and requests across multiple technologies (L1/L2), ensuring full resolution.",
            "Analyzed client needs and adapted security solutions accordingly.",
            "Used monitoring and management tools (Tufin, ServiceNow, Centreon, IPAM).",
            "Operated on a large-scale perimeter: firewalls across Europe & America, global proxy and endpoint protection.",
          ],
        },
        {
          period: "2016 - 2017",
          company: "5ème Avenue",
          role: "Network & VoIP Administrator",
          desc: [
            "Deployed network, security and VoIP infrastructures for SME clients.",
            "Planned, coordinated and executed technical interventions.",
            "Interfaced with clients for requirement gathering and project follow-up.",
            "Contributed to the design and launch of an IP telephony offering (XiVO).",
            "Completed internal SFR training on telecom deployment project management.",
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
        role: "Software Engineer & Functional Specialist",
        mobility: "Mobility Montpellier / Toulouse / Besançon",
        summary:
          "Software Engineer with a strong product and functional mindset, experienced in designing and delivering scalable systems end-to-end. Combines software engineering, automation and security with the ability to structure projects, analyze business needs and deliver efficient solutions.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+33 685589364",
          website: "paulnelaton.com",
        },
      },

      stats: [
        { label: "Software Engineering" },
        { label: "Functional Analysis & Product Thinking" },
        { label: "Automation & DevOps" },
        { label: "Security & Infrastructure" },
      ],

      skillTrees: [
        {
          title: "Software Engineering",
          skills: [
            "C# / .NET",
            "Node.js",
            "TypeScript",
            "React / Next.js",
            "REST APIs",
            "SQL",
            "Object-Oriented Programming",
          ],
        },
        {
          title: "Engineering Practices",
          skills: [
            "System Design",
            "CI/CD",
            "Git",
            "Automation & Scripting",
            "Agile Development",
            "Scalable Systems",
            "Clean Code",
            "Design Patterns",
            "SOLID Principles",
          ],
        },
        {
          title: "Product & Functional",
          skills: [
            "Business Analysis",
            "Functional Analysis",
            "Feature Design",
            "Product Structuring",
            "Product Thinking",
          ],
        },
      ],

      experience: [
        {
          period: "2025 - 2026",
          company: "Independent Project",
          role: "Full-Stack Developer",
          desc: [
            "Designed and developed a personal web platform (React / Next.js / Node.js).",
            "Built an automated CV and skills portfolio generator optimized for ATS.",
            "Developed a responsive and user-friendly frontend interface.",
            "Integrated APIs and implemented dynamic PDF generation using Puppeteer.",
            "Portfolio: https://paulnelaton.com/",
          ],
        },
        {
          period: "2024 - 2025",
          company: "Independent Project",
          role: "Software Engineer",
          desc: [
            "Designed and implemented a modular architecture in C# (.NET / .NET Core), ensuring scalability and maintainability.",
            "Managed project as a solo developer, combining technical execution, product structuring and delivery ownership.",
            "Developed core systems and algorithms, including procedural world generation, city management and state-driven game logic.",
            "Delivered end-to-end features across the full stack: backend systems, UI integration and web interface (React / Next.js).",
            "Led development across the full product lifecycle, from system design and feature definition to implementation and optimization.",
            "Structured project execution with clear planning, prioritization and iterative delivery (roadmap, milestones).",
            "Defined product vision, built and maintained the roadmap, and prioritized features based on gameplay and user experience objectives.",
            "Portfolio: https://braineatersgame.com/",
          ],
        },
        {
          period: "2019 - 2021",
          company: "Vinci Autoroutes",
          role: "SecOps Engineer",
          desc: [
            "Automated security controls, reporting and dashboards to improve MCO efficiency.",
            "Designed patch management and system hardening processes.",
            "Implemented centralized log collection and analysis using ELK stack.",
            "Maintained and secured high-availability infrastructures (Windows, VMware, Solaris).",
            "Led security implementations on critical infrastructures (OIV).",
            "Managed vulnerability assessment and remediation (Qualys, Alsid).",
            "Administered PAM solution (CyberArk) and contributed to identity security.",
            "Contributed to SOC setup and incident response (L2/L3).",
            "Performed threat investigations on real-world attacks (Emotet, Netlogon CVE-2020-1472).",
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
          company: "5ème Avenue",
          role: "Network and VOIP Administrator",
          desc: [
            "Management of infrastructure deployments for clients.",
            "Planning and organization of technical interventions.",
            "Direct client interface for requirement definition and deployment follow-up.",
            "Participation in the design and launch of a new IP telephony offering.",
            "Internal SFR training on project management fundamentals.",
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
