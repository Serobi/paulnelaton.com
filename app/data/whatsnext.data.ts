export type WhatsNextCapability = {
    label: string;
    description: string;
};

export type WhatsNextValue = {
    label: string;
    description: string;
};

export type WhatsNextContent = {
    eyebrow: string;
    title: string;
    intro: string;

    roles: {
        title: string;
        items: string[];
    };

    bring: {
        title: string;
        engineering: WhatsNextCapability;
        product: WhatsNextCapability;
        functional: WhatsNextCapability;
        ai: WhatsNextCapability;
    };

    technologies: {
        title: string;
        items: string[];
    };

    mobility: {
        title: string;
        locations: string[];
    };

    values: {
        title: string;
        items: WhatsNextValue[];
    };
};


export type WhatsNextLanguage = "fr" | "en";

export const whatsNextData: Record<
    WhatsNextLanguage,
    WhatsNextContent
> = {
    fr: {
        eyebrow: "La suite",
        title: "Prochain défi",
        intro:
            "Contribuer à un projet ambitieux où ingénierie, vision produit et compréhension métier se conjuguent pour construire des solutions utiles et durables.",

        roles: {
            title: "Rôles recherchés",
            items: [
                "Ingénieur logiciel",
                "Ingénieur produit",
                "Développeur full-stack",
            ],
        },

        bring: {
            title: "Ce que j'apporte",

            engineering: {
                label: "Ingénierie",
                description:
                    "Conception et développement de solutions robustes, du back-end jusqu'à l'expérience utilisateur.",
            },

            product: {
                label: "Produit",
                description:
                    "Une approche orientée produit pour transformer une idée ou un besoin en expérience concrète et cohérente.",
            },

            functional: {
                label: "Analyse fonctionnelle",
                description:
                    "Comprendre les besoins métier, challenger les demandes et construire des solutions adaptées aux usages réels.",
            },

            ai: {
                label: "IA",
                description:
                    "L'IA intégrée au workflow d'ingénierie pour explorer, prototyper, itérer et accélérer le développement.",
            },
        },

        technologies: {
            title: "Technologies",
            items: [
                "C# / .NET",
                "React / Next.js",
                "TypeScript",
                "SQL",
                "API REST",
                "Frameworks modernes",
            ],
        },

        mobility: {
            title: "Mobilité",
            locations: [
                "Montpellier",
                "Lyon",
                "Suisse",
                "Télétravail",
            ],
        },

        values: {
            title: "Ce que je recherche",
            items: [
                {
                    label: "Stabilité",
                    description:
                        "Construire sur la durée dans un environnement sain et solide.",
                },
                {
                    label: "Impact",
                    description:
                        "Contribuer concrètement au produit, à l'équipe et à l'expérience de ses utilisateurs.",
                },
                {
                    label: "Évolution",
                    description:
                        "Continuer à apprendre, élargir mes responsabilités et faire évoluer mon rôle.",
                },
            ],
        },
    },

    en: {
        eyebrow: "What's next",
        title: "Next challenge",
        intro:
            "Contributing to an ambitious project where engineering, product vision and business understanding come together to build impactful, lasting solutions.",

        roles: {
            title: "Target roles",
            items: [
                "Software Engineer",
                "Product Engineer",
                "Full-Stack Developer",
            ],
        },

        bring: {
            title: "What I bring",

            engineering: {
                label: "Engineering",
                description:
                    "Designing and building robust solutions, from back-end systems to the user experience.",
            },

            product: {
                label: "Product",
                description:
                    "A product-driven approach to turn an idea or business need into a tangible, coherent experience.",
            },

            functional: {
                label: "Functional analysis",
                description:
                    "Understanding business needs, challenging requirements and building solutions around real-world usage.",
            },

            ai: {
                label: "AI",
                description:
                    "Integrating AI into the engineering workflow to explore, prototype, iterate and accelerate development.",
            },
        },

        technologies: {
            title: "Technologies",
            items: [
                "C# / .NET",
                "React / Next.js",
                "TypeScript",
                "SQL",
                "REST APIs",
                "Modern frameworks",
            ],
        },

        mobility: {
            title: "Mobility",
            locations: [
                "Montpellier",
                "Lyon",
                "Switzerland",
                "Remote",
            ],
        },

        values: {
            title: "What I'm looking for",
            items: [
                {
                    label: "Stability",
                    description:
                        "Building for the long term in a healthy, stable environment.",
                },
                {
                    label: "Impact",
                    description:
                        "Making a tangible contribution to the product, the team and the user experience.",
                },
                {
                    label: "Growth",
                    description:
                        "Continuing to learn, expanding my responsibilities and evolving my role.",
                },
            ],
        },
    },
};
