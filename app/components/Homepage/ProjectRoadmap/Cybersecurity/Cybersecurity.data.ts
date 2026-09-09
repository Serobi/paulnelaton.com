export type CybersecurityLanguage = "fr" | "en";

type Experience = {
  id: string;
  company: string;
  period: string;
  role: string;
  focus: string;
  context: string;
  responsibilities: string[];
  highlight: string;
  technologies: string[];
};

type CybersecurityContent = {
  title: string;
  intro: string;
  navigation: string;
  responsibilities: string;
  highlight: string;
  technologies: string;
  experiences: Experience[];
};

// Editorial content grounded in the cybersecurity experience recorded in cv.data.ts.
export const cybersecurityData: Record<CybersecurityLanguage, CybersecurityContent> = {
  fr: {
    title: "Cybersécurité & SecOps",
    intro: "Sécuriser les infrastructures, connecter les outils et automatiser les opérations. Explorez les expériences qui ont construit mon socle technique.",
    navigation: "Parcourir les entreprises",
    responsibilities: "Mon périmètre",
    highlight: "Au cœur de la mission",
    technologies: "Environnement technique",
    experiences: [
      {
        id: "vinci", company: "VINCI Autoroutes", period: "11/2019 — 06/2021",
        role: "Ingénieur SecOps", focus: "Infrastructures critiques",
        context: "Maintien en conditions opérationnelles et sécurisation d’infrastructures critiques à haute disponibilité, dans un environnement OIV.",
        responsibilities: ["Gestion des vulnérabilités et pilotage des remédiations.", "Industrialisation du patch management et du durcissement des systèmes.", "Sécurisation des identités et des accès privilégiés ; automatisation des contrôles et du reporting."],
        highlight: "Participation à la mise en place du SOC, collecte et analyse des logs avec ELK, et investigation d’incidents N2/N3, notamment Emotet et Netlogon.",
        technologies: ["Qualys", "Alsid", "Varonis", "CyberArk", "Active Directory", "ELK"],
      },
      {
        id: "amadeus", company: "Amadeus / Cyclad", period: "08/2019 — 10/2019",
        role: "Ingénieur DevOps", focus: "Automatisation & conformité",
        context: "Automatisation des contrôles de conformité des équipements réseau et sécurité en environnement de production.",
        responsibilities: ["Développement de playbooks Ansible pour les contrôles de conformité.", "Écriture de scripts Bash et de configurations YAML.", "Analyse et résolution d’incidents en production."],
        highlight: "Traduire les contrôles de conformité réseau et sécurité en playbooks Ansible pour automatiser leur exécution.",
        technologies: ["Ansible", "Bash", "YAML"],
      },
      {
        id: "bt", company: "British Telecom", period: "06/2018 — 12/2018",
        role: "Ingénieur Cybersécurité & DevOps", focus: "Intégration des outils de sécurité",
        context: "Interconnexion des plateformes de sécurité et automatisation des opérations dans un environnement international.",
        responsibilities: ["Automatisation des workflows de détection et d’escalade des incidents via APIs REST.", "Déploiement et intégration de la solution PAM CyberArk.", "Contribution aux exigences PDIS et rédaction de documentation technique."],
        highlight: "Intégration de RTIR, TheHive et ELK pour connecter les plateformes utilisées dans les workflows de gestion des incidents.",
        technologies: ["RTIR", "TheHive", "ELK", "CyberArk", "API REST"],
      },
      {
        id: "orange", company: "Orange Cyberdefense", period: "02/2017 — 04/2018",
        role: "Ingénieur Sécurité Réseau", focus: "Sécurité réseau internationale",
        context: "Exploitation des infrastructures de sécurité d’Air Liquide sur un périmètre international : firewalls en Europe et en Amérique, proxy et protection des endpoints à l’échelle mondiale.",
        responsibilities: ["Administration des firewalls, du proxy et du DNS sécurisé.", "Prise en charge des incidents et demandes N1/N2 jusqu’à leur résolution.", "Analyse des besoins clients, gestion et supervision des infrastructures."],
        highlight: "Maintien en conditions opérationnelles d’un environnement de sécurité mondial et multi-technologies pour Air Liquide.",
        technologies: ["Check Point", "Cisco ASA", "Fortinet", "Palo Alto", "Zscaler", "F5", "Tufin", "ServiceNow", "Centreon"],
      },
    ],
  },
  en: {
    title: "Cybersecurity & SecOps",
    intro: "Securing infrastructure, connecting tools and automating operations. Explore the experiences that built my technical foundation.",
    navigation: "Browse companies", responsibilities: "My scope", highlight: "At the heart of the assignment", technologies: "Technical environment",
    experiences: [
      {
        id: "vinci", company: "VINCI Autoroutes", period: "11/2019 — 06/2021", role: "SecOps Engineer", focus: "Critical infrastructure",
        context: "Operating and securing highly available critical infrastructure within an operator of vital importance (OIV).",
        responsibilities: ["Vulnerability management and remediation coordination.", "Industrialising patch management and system hardening.", "Securing identities and privileged access; automating security checks and reporting."],
        highlight: "Contributing to SOC implementation, collecting and analysing logs with ELK, and investigating L2/L3 incidents including Emotet and Netlogon.",
        technologies: ["Qualys", "Alsid", "Varonis", "CyberArk", "Active Directory", "ELK"],
      },
      {
        id: "amadeus", company: "Amadeus / Cyclad", period: "08/2019 — 10/2019", role: "DevOps Engineer", focus: "Automation & compliance",
        context: "Automating compliance checks for network and security equipment in production environments.",
        responsibilities: ["Developing Ansible playbooks for compliance checks.", "Writing Bash scripts and YAML configurations.", "Analysing and resolving production incidents."],
        highlight: "Translating network and security compliance checks into Ansible playbooks to automate their execution.",
        technologies: ["Ansible", "Bash", "YAML"],
      },
      {
        id: "bt", company: "British Telecom", period: "06/2018 — 12/2018", role: "Cybersecurity & DevOps Engineer", focus: "Security tool integration",
        context: "Connecting security platforms and automating operations in an international environment.",
        responsibilities: ["Automating incident detection and escalation workflows through REST APIs.", "Deploying and integrating the CyberArk PAM solution.", "Contributing to PDIS requirements and writing technical documentation."],
        highlight: "Integrating RTIR, TheHive and ELK to connect the platforms used in incident management workflows.",
        technologies: ["RTIR", "TheHive", "ELK", "CyberArk", "REST API"],
      },
      {
        id: "orange", company: "Orange Cyberdefense", period: "02/2017 — 04/2018", role: "Network Security Engineer", focus: "Global network security",
        context: "Operating Air Liquide’s international security infrastructure: firewalls across Europe and the Americas, with worldwide proxy and endpoint protection.",
        responsibilities: ["Administering firewalls, proxy and secure DNS.", "Handling L1/L2 incidents and requests through to resolution.", "Analysing client needs, managing and monitoring infrastructure."],
        highlight: "Maintaining operational availability across a global, multi-technology security environment for Air Liquide.",
        technologies: ["Check Point", "Cisco ASA", "Fortinet", "Palo Alto", "Zscaler", "F5", "Tufin", "ServiceNow", "Centreon"],
      },
    ],
  },
};
