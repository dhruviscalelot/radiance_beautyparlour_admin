import {
    Flower2,
    Hand,
    Palette,
    Scissors,
    Sparkles,
} from "lucide-react";

export const servicesData = [
    {
        id: 1,
        title: "Hair Styling",
        description:"Professional haircuts, colors, and styling for all occasions.",
        icon: Scissors,
        serviceDetails: [
            {
                id: 1,
                subtitle: "Basic Haircut",
                minute: "30–45 min",
                price: "500",
            },
            {
                id: 2,
                subtitle: "Hair Coloring",
                minute: "2–3 hours",
                price: "1,500+",
            },
            {
                id: 3,
                subtitle: "Hair Treatment",
                minute: "90 min",
                price: "2,000+",
            },
            {
                id: 4,
                subtitle: "Bridal Styling",
                minute: "3 hours",
                price: "3,000+",
            },
        ],
    },
    {
        id: 2,
        title: "Nail Care",
        description: "Beautiful manicures and nail art designs",
        icon: Sparkles,
        serviceDetails: [
            {
                id: 1,
                subtitle: "Basic Manicure",
                minute: "30–45 min",
                price: "300",
            },
            {
                id: 2,
                subtitle: "Nail Art",
                minute: "45-60 min",
                price: "500+",
            },
            {
                id: 3,
                subtitle: "Gel Nails",
                minute: "60-90 min",
                price: "800+",
            },
            {
                id: 4,
                subtitle: "Full Makeover",
                minute: "2 hours",
                price: "1,200+",
            },
        ],
    },
    {
        id: 3,
        title: "Skincare",
        description: "Rejuvenating facials and skincare treatments",
        icon: Flower2,
        serviceDetails: [
            {
                id: 1,
                subtitle: "Basic Facial",
                minute: "45 min",
                price: "800",
            },
            {
                id: 2,
                subtitle: "Premium Facial",
                minute: "60 min",
                price: "1500+",
            },
            {
                id: 3,
                subtitle:
                    "Skin Brightening",
                minute: "60 min",
                price: "2,000+",
            },
            {
                id: 4,
                subtitle: "Anti-Aging Treatment",
                minute: "90 min",
                price: "2,500+",
            },
        ],
    },
    {
        id: 4,
        title: "Makeup",
        description:
            "Professional makeup for weddings and special events",
        icon: Palette,
        serviceDetails: [
            {
                id: 1,
                subtitle: "Day Makeup",
                minute: "45 min",
                price: "1,000+",
            },
            {
                id: 2,
                subtitle: "Party Makeup",
                minute: "60 min",
                price: "1,500+",
            },
            {
                id: 3,
                subtitle: "Bridal Makeup",
                minute: "2-3 hours",
                price: "3,000+",
            },
            {
                id: 4,
                subtitle: "Pre-Bridal Package",
                minute: "4 hours",
                price: "5,000+",
            },
        ],
    },
    {
        id: 5,
        title: "Threading",
        description: "Precise eyebrow threading and shaping",
        icon: Scissors,
        serviceDetails: [
            {
                id: 1,
                subtitle: "Eyebrow Threading",
                minute: "15 min",
                price: "100",
            },
            {
                id: 2,
                subtitle: "Upper Lip Threading",
                minute: "10 min",
                price: "80",
            },
            {
                id: 3,
                subtitle: "Waxing",
                minute: "20-30 min",
                price: "300+",
            },
            {
                id: 4,
                subtitle: "Full Body Waxing",
                minute: "90 min",
                price: "2000+",
            },
        ],
    },
];