import { CV } from "./cv.types";

export const CVData = {
  fr: {
    // sec: {
    //   identity: {
    //     name: "Paul NELATON",
    //     role: "Ingénieur SecOps & Spécialiste Technico-Fonctionnel",
    //     mobility: "Mobilité Montpellier / Toulouse / Besançon",
    //     summary:
    //       "Ingénieur SecOps avec une forte approche fonctionnelle, spécialisé dans la sécurisation d'infrastructures critiques et l'industrialisation des processus de sécurité. Mêlant cybersécurité, automatisation et analyse métier avec une capacité à structurer des environnements, améliorer les processus et répondre efficacement aux enjeux opérationnels et organisationnels.",
    //     contact: {
    //       email: "paul.nelaton@gmail.com",
    //       phone: "+33 6 85 58 93 64",
    //       website: "paulnelaton.com",
    //     },
    //   },

    //   stats: [
    //     { label: "Cybersécurité & SecOps" },
    //     { label: "Analyse Fonctionnelle & Structuration" },
    //     { label: "Automatisation & DevOps" },
    //     { label: "Sécurité des Identités & Infrastructures" },
    //   ],

    //   skillTrees: [
    //     {
    //       title: "Cybersécurité",
    //       skills: [
    //         "Management Vulnérabilités (Qualys, Alsid)",
    //         "PAM (CyberArk)",
    //         "SIEM / ELK",
    //         "Threat Detection & SOC",
    //         "Incident Response",
    //         "Security Hardening",
    //         "Firewalls",
    //         "Proxy",
    //       ],
    //     },
    //     {
    //       title: "Systèmes & Infrastructures",
    //       skills: [
    //         "Windows Server",
    //         "Linux",
    //         "Active Directory",
    //         "VMware ESXi",
    //         "IAM",
    //         "SCCM",
    //         "High Availability Systems",
    //       ],
    //     },
    //     {
    //       title: "Automatisation & Fonctionnel",
    //       skills: [
    //         "C# / .NET",
    //         "PowerShell",
    //         "Python",
    //         "Ansible",
    //         "REST APIs",
    //         "Automatisation & Scripting",
    //         "Analyse Fonctionnelle",
    //       ],
    //     },
    //   ],

    //   experience: [
    //     {
    //       period: "2024 - 2026",
    //       company: "Projet Indépendant",
    //       role: "Ingénieur Logiciel",
    //       desc: [
    //         "Conception et développement d'une architecture logicielle modulaire en C# (.NET / .NET Core), orientée performance, maintenabilité et scalabilité.",
    //         "Gestion du projet en autonomie complète : structuration, planification, priorisation et pilotage de la livraison.",
    //         "Développement de systèmes complexes (génération procédurale, logique métier, gestion d'états) avec une forte approche algorithmique.",
    //         "Développement de fonctionnalités full-stack : backend, intégration UI et interface web (React / Next.js).",
    //         "Mise en œuvre de bonnes pratiques d'architecture logicielle (modularité, séparation des responsabilités, SOLID).",
    //         "Approche orientée industrialisation : structuration des composants, automatisation et optimisation des performances.",
    //         "Montée en compétences continue sur les problématiques d'architecture, de performance et de fiabilité des systèmes.",
    //         "Portfolio : https://braineatersgame.com/",
    //       ],
    //     },
    //     {
    //       period: "2019 - 2021",
    //       company: "Vinci Autoroutes",
    //       role: "Ingénieur SecOps",
    //       desc: [
    //         "Automatisation des contrôles de sécurité, reporting et tableaux de bord pour améliorer l'efficacité du MCO.",
    //         "Conception et industrialisation des processus de patch management et de durcissement des systèmes.",
    //         "Mise en place d'une solution de collecte et d'analyse des logs (ELK) dans un contexte SOC.",
    //         "Maintien et sécurisation d'infrastructures critiques à haute disponibilité (Windows, VMware, Solaris).",
    //         "Pilotage de la sécurité sur des infrastructures sensibles (OIV).",
    //         "Gestion des vulnérabilités et remédiation (Qualys, Alsid), notamment sur Active Directory.",
    //         "Administration et sécurisation des accès à privilèges via une solution PAM (CyberArk).",
    //         "Contribution à la sécurité des identités (IAM / Active Directory) et gestion des droits.",
    //         "Participation à la mise en place d'un SOC et gestion des incidents de sécurité (N2/N3).",
    //         "Investigation de menaces réelles (Emotet, CVE-2020-1472 - Netlogon).",
    //       ],
    //     },
    //     {
    //       period: "2018 - 2019",
    //       company: "British Telecom",
    //       role: "Ingénieur Cybersécurité & DevOps",
    //       desc: [
    //         "Automatisation des workflows de détection et d'escalade via intégration d'API.",
    //         "Interconnexion de plateformes SIEM (RTIR, TheHive, ELK).",
    //         "Automatisation de la conformité des équipements réseau et sécurité (Ansible).",
    //         "Contribution à l'intégration de solutions PAM.",
    //         "Rédaction de documentation technique en environnement international.",
    //       ],
    //     },
    //     {
    //       period: "2017 - 2018",
    //       company: "Orange Cyberdefense",
    //       role: "Ingénieur Sécurité Réseau",
    //       desc: [
    //         "Maintien en conditions opérationnelles d'infrastructures de sécurité globales pour Air Liquide (périmètre international).",
    //         "Administration de solutions de sécurité réseau : firewalls (Checkpoint, Cisco ASA, Fortinet, Palo Alto), proxy Zscaler et DNS sécurisé (F5).",
    //         "Gestion des incidents et demandes sur un périmètre multi-technologies (N1/N2), avec prise en charge complète jusqu'à résolution.",
    //         "Analyse des besoins clients et adaptation des solutions de sécurité associées.",
    //         "Exploitation d'outils de gestion et de supervision (Tufin, ServiceNow, Centreon, IPAM).",
    //         "Interventions sur un périmètre étendu : firewalls Europe & Amérique, proxy et endpoint protection à l'échelle mondiale.",
    //       ],
    //     },
    //     {
    //       period: "2016 - 2017",
    //       company: "5ème Avenue",
    //       role: "Administrateur Réseaux & VOIP",
    //       desc: [
    //         "Déploiement d'infrastructures réseau, sécurité et VOIP auprès de clients PME.",
    //         "Planification, pilotage et réalisation des interventions techniques.",
    //         "Interface client pour la définition des besoins et le suivi des projets.",
    //         "Participation à la conception et au lancement d'une offre de téléphonie IP (XiVO).",
    //         "Formations internes SFR sur les fondamentaux de gestion de projet en déploiement télécom.",
    //       ],
    //     },
    //   ],

    //   formations: [
    //     {
    //       year: "2019-2020",
    //       title: "Certifications",
    //       school: "Zscaler ZCCA / ZCCP",
    //     },
    //     {
    //       year: "2016",
    //       title: "Ingénieur Réseaux, Systèmes et Sécurité",
    //       school: "AFTI (Orsay)",
    //     },
    //     {
    //       year: "2015",
    //       title: "Licence Informatique",
    //       school: "Université de Franche-Comté",
    //     },
    //   ],

    //   languages: [
    //     { name: "Français", level: "Langue maternelle" },
    //     { name: "Anglais", level: "Professionnel" },
    //     { name: "Portugais", level: "Courant" },
    //   ],

    //   labels: {
    //     domains: "Domaines d'expertise",
    //     technicalSkills: "Compétences techniques",
    //     education: "Formation & certifications",
    //     languages: "Langues",
    //     experience: "Expérience professionnelle",
    //   },
    // },
      identity: {
        name: "Paul NELATON",
        role: "Ingénieur Logiciel Full-Stack / Produit & Fonctionnel",
        mobility: "Mobilité Montpellier / Lyon / Lausanne",
        summary:
          "Ingénieur logiciel Full-Stack spécialisé dans la conception et le développement d'applications métier. Habitué à intervenir sur l'ensemble du cycle de vie d'un projet, de l'analyse des besoins jusqu'à la mise en production, en alliant expertise technique, vision produit et expérience utilisateur.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+33 6 85 58 93 64",
          website: "paulnelaton.com",
        },
      },

      stats: [
        { label: "Développement Full-Stack" },
        { label: "Architecture Logicielle" },
        { label: "Produit & Fonctionnel" },
        { label: "Automatisation & Intégration" },
      ],

      skillTrees: [
        {
          title: "Développement",
          skills: [
            "C#",
            ".NET",
            "ASP.NET MVC",
            "React",
            "Angular",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "jQuery",
            "API REST",
            "SQL",
            "UI / UX",
            "Responsive Design"
          ],
        },
        {
          title: "Architecture",
          skills: [
            "CI/CD",
            "Git",
            "IIS",
            "Azure DevOps",
            "Agile",
            "Clean Code",
            "Design Patterns",
            "SOLID",
            "POO",
            "Microservices",
          ],
        },
        {
          title: "Produit & Fonctionnel",
          skills: [
            "Analyse Métier",
            "Analyse Fonctionnelle",
            "Cadrage projet",
            "Recueil des besoins",
            "Conception fonctionnelle",
            "Recette fonctionnelle",
            "Rédaction spécifications",
            "Roadmap Produit",
          ],
        },
      ],

      experience: [
        {
          period: "2026",
          company: "Maty",
          role: "Développeur Full-Stack C# .NET",
          desc: [
            "Développement d'applications métier de bout en bout : cadrage, conception, développement, recette et mise en production.",
            "Conception et développement Full Stack d'applications .NET, APIs REST, services métier et interfaces web.",
            "Création d'interfaces ergonomiques, performantes et centrées sur l'expérience utilisateur.",
            "Conception de solutions techniques et modélisation de règles métier complexes en collaboration avec les équipes fonctionnelles.",
            "Développement de flux d'intégration et d'automatisation entre plusieurs applications de l'écosystème.",
            "Conception de flux produits, optimisation SEO et intégration avec des plateformes e-commerce.",
            "Optimisation des traitements et requêtes SQL pour améliorer les performances et la maintenabilité.",
          ],
        },
        {
          period: "2024 - 2026",
          company: "Projets Indépendants",
          role: "Développeur Full-Stack / Ingénieur Logiciel",
          desc: [
            "Conception et développement de projets Full Stack en C#/.NET, React, Next.js et Node.js.",
            "Conception d'une architecture logicielle modulaire et développement de systèmes complexes.",
            "Développement d'interfaces web modernes, responsives et centrées sur l'expérience utilisateur.",
            "Conception d'assets et graphiques et intégration Front-End avec Photoshop et Lightroom.",
            "Développement d'APIs, intégration de services tiers et génération dynamique de documents.",
            "Gestion complète des projets : conception, roadmap, développement et mise en production.",
            "Projets : braineatersgame.com • paulnelaton.com",
          ],
        },
        {
          period: "2019 - 2021",
          company: "Vinci Autoroutes",
          role: "Ingénieur SecOps",
          desc: [
            "Automatisation des contrôles de sécurité, reporting et dashboards",
            "Conception du patch management et durcissement des systèmes.",
            "Mise en place d'une solution de collecte et d'analyse des logs (ELK).",
            "Pilotage de la sécurité sur des infrastructures critiques (OIV).",
            "Gestion des vulnérabilités et remédiation (Qualys, Alsid).",
            "Administration PAM / IAM (CyberArk).",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "Ingénieur DevOps & Automatisation",
          desc: [
            "Automatisation des workflows de détection via intégration d'API REST.",
            "Interconnexion des plateformes SIEM (RTIR, TheHive, ELK).",
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
            "Maintien en conditions opérationnelles d'infrastructures de sécurité.",
            "Administration de solutions de sécurité réseau : firewalls, proxy et DNS.",
            "Gestion des incidents et demandes sur un périmètre international.",
            "Exploitation d'outils de gestion et de supervision.",
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
            "Participation à la conception et au lancement d'une offre de téléphonie IP.",
            "Formations sur les fondamentaux de gestion de projet.",
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
  en: {
    // sec: {
    //   identity: {
    //     name: "Paul NELATON",
    //     role: "SecOps Engineer & Functional Specialist",
    //     mobility: "Mobility Montpellier / Toulouse / Besançon",
    //     summary:
    //       "SecOps Engineer with a strong functional mindset, specialized in securing critical infrastructures and industrializing security processes. Combines cybersecurity, automation and system analysis with the ability to structure environments, improve processes and deliver efficient solutions to operational and organizational challenges.",
    //     contact: {
    //       email: "paul.nelaton@gmail.com",
    //       phone: "+33 6 85 58 93 64",
    //       website: "paulnelaton.com",
    //     },
    //   },

    //   stats: [
    //     { label: "Cybersecurity & SecOps" },
    //     { label: "Functional Analysis & Structuring" },
    //     { label: "Automation & DevOps" },
    //     { label: "Identity & Infrastructure Security" },
    //   ],

    //   skillTrees: [
    //     {
    //       title: "Cybersecurity",
    //       skills: [
    //         "Vulnerability Management (Qualys, Alsid)",
    //         "PAM (CyberArk)",
    //         "SIEM / ELK",
    //         "Threat Detection & SOC",
    //         "Incident Response",
    //         "Security Hardening",
    //         "Firewalls",
    //         "Proxy",
    //       ],
    //     },
    //     {
    //       title: "Systems & Infrastructure",
    //       skills: [
    //         "Windows Server",
    //         "Linux",
    //         "Active Directory",
    //         "VMware ESXi",
    //         "IAM",
    //         "SCCM",
    //       ],
    //     },
    //     {
    //       title: "Automation & Functional",
    //       skills: [
    //         "C# / .NET",
    //         "PowerShell",
    //         "Python",
    //         "Ansible",
    //         "REST APIs",
    //         "Automation & Scripting",
    //         "Functional Analysis",
    //       ],
    //     },
    //   ],

    //   experience: [
    //     {
    //       period: "2024 - 2026",
    //       company: "Independent Project",
    //       role: "Software Engineer",
    //       desc: [
    //         "Designed and developed a modular software architecture in C# (.NET / .NET Core), focused on performance, maintainability and scalability.",
    //         "Managed the project end-to-end as a solo developer: structuring, planning, prioritization and delivery.",
    //         "Developed complex systems and algorithms (procedural generation, business logic, state management).",
    //         "Delivered full-stack features: backend systems, UI integration and web interface (React / Next.js).",
    //         "Applied software architecture best practices (modularity, separation of concerns, SOLID principles).",
    //         "Adopted an industrialization approach: component structuring, automation and performance optimization.",
    //         "Continuously improved skills in system architecture, performance and reliability.",
    //         "Portfolio: https://braineatersgame.com/",
    //       ],
    //     },
    //     {
    //       period: "2019 - 2021",
    //       company: "Vinci Autoroutes",
    //       role: "SecOps Engineer",
    //       desc: [
    //         "Automated security controls, reporting and dashboards to improve operational efficiency (MCO).",
    //         "Designed and industrialized patch management and system hardening processes.",
    //         "Implemented centralized log collection and analysis using ELK in a SOC context.",
    //         "Maintained and secured critical high-availability infrastructures (Windows, VMware, Solaris).",
    //         "Led security operations on sensitive infrastructures (OIV).",
    //         "Managed vulnerability assessment and remediation (Qualys, Alsid), including Active Directory.",
    //         "Administered and secured privileged access using a PAM solution (CyberArk).",
    //         "Contributed to identity security (IAM / Active Directory) and access management.",
    //         "Participated in SOC setup and handled security incidents (L2/L3).",
    //         "Performed threat investigations on real-world attacks (Emotet, Netlogon CVE-2020-1472).",
    //       ],
    //     },
    //     {
    //       period: "2018 - 2019",
    //       company: "British Telecom",
    //       role: "Cybersecurity & DevOps Engineer",
    //       desc: [
    //         "Automated detection and escalation workflows through API integrations.",
    //         "Integrated and interconnected SIEM platforms (RTIR, TheHive, ELK).",
    //         "Automated network and security compliance using Ansible.",
    //         "Contributed to the integration of PAM solutions.",
    //         "Produced technical documentation in an international environment.",
    //       ],
    //     },
    //     {
    //       period: "2017 - 2018",
    //       company: "Orange Cyberdefense",
    //       role: "Network Security Engineer",
    //       desc: [
    //         "Maintained global security infrastructures for Air Liquide (international scope).",
    //         "Administered network security solutions: firewalls (Checkpoint, Cisco ASA, Fortinet, Palo Alto), proxy (Zscaler) and secure DNS (F5).",
    //         "Handled incidents and requests across multiple technologies (L1/L2), ensuring full resolution.",
    //         "Analyzed client needs and adapted security solutions accordingly.",
    //         "Used monitoring and management tools (Tufin, ServiceNow, Centreon, IPAM).",
    //         "Operated on a large-scale perimeter: firewalls across Europe & America, global proxy and endpoint protection.",
    //       ],
    //     },
    //     {
    //       period: "2016 - 2017",
    //       company: "5ème Avenue",
    //       role: "Network & VoIP Administrator",
    //       desc: [
    //         "Deployed network, security and VoIP infrastructures for SME clients.",
    //         "Planned, coordinated and executed technical interventions.",
    //         "Interfaced with clients for requirement gathering and project follow-up.",
    //         "Contributed to the design and launch of an IP telephony offering (XiVO).",
    //         "Completed internal SFR training on telecom deployment project management.",
    //       ],
    //     },
    //   ],

    //   formations: [
    //     {
    //       year: "2019-2020",
    //       title: "Certifications",
    //       school: "Zscaler ZCCA / ZCCP",
    //     },
    //     {
    //       year: "2016",
    //       title: "Engineering Degree in Networks, Systems and Security",
    //       school: "AFTI (Orsay)",
    //     },
    //     {
    //       year: "2015",
    //       title: "Bachelor's Degree in Computer Science",
    //       school: "University of Franche-Comté",
    //     },
    //   ],

    //   languages: [
    //     { name: "French", level: "Native" },
    //     { name: "English", level: "Professional proficiency" },
    //     { name: "Portuguese", level: "Fluent" },
    //   ],

    //   labels: {
    //     domains: "Areas of Expertise",
    //     technicalSkills: "Technical Skills",
    //     education: "Education & Certifications",
    //     languages: "Languages",
    //     experience: "Professional Experience",
    //   },
    // },
      identity: {
        name: "Paul NELATON",
        role: "Full-Stack Software Engineer / Product & Functional",
        mobility: "Mobility Montpellier / Lyon / Lausanne",
        summary:
          "Full-Stack Software Engineer specialized in the design and development of business applications. Experienced across the full project lifecycle, from requirements analysis to production deployment, combining technical expertise, product vision and user experience.",
        contact: {
          email: "paul.nelaton@gmail.com",
          phone: "+33 6 85 58 93 64",
          website: "paulnelaton.com",
        },
      },

      stats: [
        { label: "Full-Stack Development" },
        { label: "Software Architecture" },
        { label: "Product & Functional" },
        { label: "Automation & Integration" },
      ],

      skillTrees: [
        {
          title: "Development",
          skills: [
            "C#",
            ".NET",
            "ASP.NET MVC",
            "React",
            "Angular",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "jQuery",
            "REST APIs",
            "SQL",
            "UI / UX",
            "Responsive Design",
          ],
        },
        {
          title: "Architecture",
          skills: [
            "CI/CD",
            "Git",
            "IIS",
            "Azure DevOps",
            "Agile",
            "Clean Code",
            "Design Patterns",
            "SOLID",
            "OOP",
            "Microservices",
          ],
        },
        {
          title: "Product & Functional",
          skills: [
            "Business Analysis",
            "Functional Analysis",
            "Project Scoping",
            "Requirement Gathering",
            "Functional Design",
            "Functional Testing",
            "Specifications Writing",
            "Product Roadmap",
          ],
        },
      ],

      experience: [
        {
          period: "2026",
          company: "Maty",
          role: "Full-Stack Developer C# .NET",
          desc: [
            "End-to-end development of business applications: scoping, design, development, testing and production deployment.",
            "Full-Stack design and development of .NET applications, REST APIs, business services and web interfaces.",
            "Creation of ergonomic, performant and user-centered interfaces.",
            "Design of technical solutions and modeling of complex business rules in collaboration with functional teams.",
            "Development of integration and automation flows between multiple applications within the ecosystem.",
            "Development of product data flows, SEO optimization and integration with e-commerce platforms.",
            "Optimization of SQL processing and queries to improve performance and maintainability.",
          ],
        },
        {
          period: "2024 - 2026",
          company: "Independent Projects",
          role: "Full-Stack Developer / Software Engineer",
          desc: [
            "Design and development of Full-Stack projects using C#/.NET, React, Next.js and Node.js.",
            "Design of a modular software architecture and development of complex systems.",
            "Development of modern, responsive and user-centered web interfaces.",
            "Graphic design, asset creation and Front-End integration.",
            "Development of APIs, third-party service integrations and dynamic document generation.",
            "End-to-end project ownership: design, roadmap, development and production deployment.",
            "Projects: braineatersgame.com • paulnelaton.com",
          ],
        },
        {
          period: "2019 - 2021",
          company: "Vinci Autoroutes",
          role: "SecOps Engineer",
          desc: [
            "Automation of security controls, reporting and dashboards.",
            "Design of patch management and system hardening processes.",
            "Implementation of centralized log collection and analysis using ELK.",
            "Security operations on critical infrastructures (OIV).",
            "Vulnerability management and remediation (Qualys, Alsid).",
            "PAM / IAM administration (CyberArk).",
          ],
        },
        {
          period: "2018 - 2019",
          company: "British Telecom",
          role: "DevOps & Automation Engineer",
          desc: [
            "Automation of detection workflows through REST API integration.",
            "Interconnection of SIEM platforms (RTIR, TheHive, ELK).",
            "Network compliance automation using Ansible.",
            "Development of orchestration scripts and internal tools.",
            "Technical documentation writing in an international environment.",
          ],
        },
        {
          period: "2017 - 2018",
          company: "Orange Cyberdefense",
          role: "Network Security Engineer",
          desc: [
            "Operational maintenance of security infrastructures.",
            "Administration of network security solutions: firewalls, proxy and DNS.",
            "Incident and request management across an international scope.",
            "Use of management and monitoring tools.",
          ],
        },
        {
          period: "2016 - 2017",
          company: "5ème Avenue",
          role: "Network & VOIP Administrator",
          desc: [
            "Deployment of network, security and VOIP infrastructures for SME clients.",
            "Planning, coordination and execution of technical interventions.",
            "Client interface for requirements definition and project follow-up.",
            "Contribution to the design and launch of an IP telephony offer.",
            "Training on project management fundamentals.",
          ],
        },
      ],

      formations: [
        {
          year: "2016",
          title: "Engineering Degree in Systems, Networks and Security",
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
        { name: "English", level: "Professional fluency" },
        { name: "Portuguese", level: "Fluent" },
      ],

      labels: {
        domains: "Areas of Expertise",
        technicalSkills: "Technical Skills",
        education: "Education",
        languages: "Languages",
        experience: "Professional Experience",
      },
  },
};
