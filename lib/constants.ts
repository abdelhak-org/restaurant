/**
 * Application constants
 * Centralized configuration values
 */

export const SITE_CONFIG = {
  name: "La Belle Cuisine",
  description:
    "Experience exquisite French cuisine in an elegant atmosphere. Fresh ingredients, traditional recipes, and modern presentation.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const;

export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const RESTAURANT_INFO = {
  address: "123 Gourmet Street, Paris, France",
  phone: "+33 1 23 45 67 89",
  email: "contact@labellecuisine.com",
  hours: {
    weekdays: "12:00 PM - 10:00 PM",
    weekends: "11:00 AM - 11:00 PM",
  },
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/labellecuisine",
  facebook: "https://facebook.com/labellecuisine",
  twitter: "https://twitter.com/labellecuisine",
} as const;

export const MENU_CATEGORIES = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Courses" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
] as const;

export const MENU_ITEMS = {
  starters: [
    {
      id: 1,
      name: "French Onion Soup",
      description:
        "Classic French soup with caramelized onions, rich beef broth, and melted Gruyère cheese",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
      tags: ["vegetarian"],
    },
    {
      id: 2,
      name: "Escargots de Bourgogne",
      description: "Six Burgundy snails baked with garlic herb butter",
      price: 16,
      image:
        "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&q=80",
      tags: ["gluten-free"],
    },
    {
      id: 3,
      name: "Pâté de Campagne",
      description:
        "Rustic country pâté served with cornichons and crusty bread",
      price: 14,
      image:
        "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&q=80",
      tags: [],
    },
    {
      id: 4,
      name: "Salade Niçoise",
      description:
        "Fresh tuna, olives, green beans, eggs, and potatoes on crisp lettuce",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      tags: ["gluten-free"],
    },
    {
      id: 5,
      name: "Soupe à l'Oignon",
      description:
        "Traditional onion soup gratinée with crusty bread and melted cheese",
      price: 11,
      image:
        "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&q=80",
      tags: ["vegetarian"],
    },
    {
      id: 6,
      name: "Foie Gras Terrine",
      description:
        "Silky duck liver terrine with fig compote and toasted brioche",
      price: 24,
      image:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
      tags: ["seasonal"],
    },
  ],
  mains: [
    {
      id: 7,
      name: "Coq au Vin",
      description:
        "Braised chicken in red wine with mushrooms, pearl onions, and lardons",
      price: 32,
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
      tags: [],
    },
    {
      id: 8,
      name: "Beef Bourguignon",
      description:
        "Slow-braised beef in Burgundy wine with carrots and potatoes",
      price: 36,
      image:
        "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&q=80",
      tags: ["gluten-free"],
    },
    {
      id: 9,
      name: "Sole Meunière",
      description: "Pan-fried Dover sole with brown butter, lemon, and parsley",
      price: 42,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
      tags: ["gluten-free"],
    },
    {
      id: 10,
      name: "Duck Confit",
      description:
        "Crispy duck leg confit with roasted potatoes and mixed greens",
      price: 34,
      image:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80",
      tags: ["gluten-free"],
    },
    {
      id: 11,
      name: "Rack of Lamb",
      description: "Herb-crusted lamb rack with ratatouille and rosemary jus",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      tags: ["gluten-free"],
    },
    {
      id: 12,
      name: "Bouillabaisse",
      description:
        "Traditional Provençal fish stew with saffron, fennel, and rouille",
      price: 38,
      image:
        "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80",
      tags: ["gluten-free", "spicy"],
    },
  ],
  desserts: [
    {
      id: 13,
      name: "Crème Brûlée",
      description: "Classic vanilla custard with caramelized sugar crust",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&q=80",
      tags: ["vegetarian", "gluten-free"],
    },
    {
      id: 14,
      name: "Tarte Tatin",
      description: "Upside-down caramelized apple tart with crème fraîche",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800&q=80",
      tags: ["vegetarian"],
    },
    {
      id: 15,
      name: "Chocolate Mousse",
      description: "Rich dark chocolate mousse with whipped cream",
      price: 11,
      image:
        "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&q=80",
      tags: ["vegetarian", "gluten-free"],
    },
    {
      id: 16,
      name: "Profiteroles",
      description:
        "Choux pastry filled with vanilla ice cream and warm chocolate sauce",
      price: 13,
      image:
        "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80",
      tags: ["vegetarian"],
    },
    {
      id: 17,
      name: "Mille-Feuille",
      description:
        "Crispy puff pastry layers with vanilla cream and caramel glaze",
      price: 14,
      image:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80",
      tags: ["vegetarian"],
    },
    {
      id: 18,
      name: "Soufflé au Chocolat",
      description: "Light and airy chocolate soufflé with vanilla anglaise",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80",
      tags: ["vegetarian"],
    },
  ],
  drinks: [
    {
      id: 19,
      name: "House Red Wine",
      description: "Selection of fine French red wines",
      price: 9,
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      tags: [],
    },
    {
      id: 20,
      name: "House White Wine",
      description: "Selection of crisp French white wines",
      price: 9,
      image:
        "https://images.unsplash.com/photo-1566995541428-f2246c17cda1?w=800&q=80",
      tags: [],
    },
    {
      id: 21,
      name: "French Coffee",
      description: "Premium roasted coffee with optional cream",
      price: 5,
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
      tags: [],
    },
    {
      id: 22,
      name: "Champagne",
      description: "Fine French champagne, perfect for celebrations",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80",
      tags: [],
    },
    {
      id: 23,
      name: "Cognac",
      description: "Premium aged French cognac, served neat",
      price: 16,
      image:
        "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80",
      tags: [],
    },
    {
      id: 24,
      name: "Citron Pressé",
      description: "Fresh-squeezed lemonade with sparkling water",
      price: 6,
      image:
        "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&q=80",
      tags: [],
    },
  ],
} as const;

export const CHEFS_RECOMMENDATION = {
  id: 25,
  name: "Lobster Thermidor",
  description:
    "Fresh whole lobster stuffed with a rich mixture of lobster meat, egg yolks, and brandy, topped with gruyère cheese and oven-browned.",
  price: 45,
  image:
    "https://images.unsplash.com/photo-1553247407-23251ce81f59?w=1200&q=80",
} as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Food Critic",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content:
      "An extraordinary dining experience. The Coq au Vin transported me straight to the heart of Burgundy. Simply magnificent!",
    rating: 5,
  },
  {
    id: 2,
    name: "James Richardson",
    role: "Regular Guest",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content:
      "We've been coming here for years and the quality never disappoints. The service is impeccable and the atmosphere is perfect for special occasions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Dubois",
    role: "Travel Blogger",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content:
      "The best French restaurant outside of France! The Crème Brûlée alone is worth the visit. A must-try for any food lover.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Local Resident",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content:
      "From the moment you walk in, you feel the warmth and passion for food. Every dish is a work of art.",
    rating: 5,
  },
] as const;

export const TIME_SLOTS = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
] as const;

export const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export const FEATURED_DISHES = [
  {
    id: 1,
    name: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon seared to perfection served with grilled asparagus",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
  },
  {
    id: 2,
    name: "Truffle Pasta",
    description:
      "Handmade tagliatelle tossed in a creamy sauce with black truffle shavings",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=800&q=80",
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    description: "Rich cocoa dessert layered with cream cheese frosting",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800&q=80",
  },
  {
    id: 4,
    name: "Reserve Steak",
    description: "Aged 5 years. Perfectly grilled to your preference",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
  },
  {
    id: 5,
    name: "Lobster Bisque",
    description: "Creamy lobster soup with a hint of brandy and fresh herbs",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=800&q=80",
  },
] as const;

export const RESTAURANT_STATS = {
  yearsOfService: 25,
  happyGuests: 120000,
  signatureDishes: 50,
  establishedYear: 1995,
} as const;

export const CHEF_INFO = {
  name: "Antonio Rossi",
  title: "Head Executive Chef",
  image:
    "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
  quote:
    "Cooking is not just about ingredients, it's about the memory you create. Every dish is a chapter in our story.",
  bio: "With over 20 years of culinary experience across Europe, Chef Antonio brings a unique fusion of traditional techniques and modern flair to every dish. His journey began in the vineyards of Tuscany and has led him to create a menu that celebrates the simplicity of perfect ingredients.",
} as const;

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Jean-Pierre Martin",
    role: "Sous Chef",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ez4ba29e5e?w=400&q=80",
  },
  {
    id: 2,
    name: "Marie Dubois",
    role: "Pastry Chef",
    image:
      "https://images.unsplash.com/photo-1595257841889-eca2678454e2?w=400&q=80",
  },
  {
    id: 3,
    name: "Pierre Lefebvre",
    role: "Sommelier",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 4,
    name: "Sophie Laurent",
    role: "Restaurant Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
] as const;

export const PHILOSOPHY_VALUES = [
  {
    id: 1,
    title: "Farm to Table",
    description:
      "We skip the middleman. Fresh ingredients sourced directly from local farmers daily ensure the highest quality and support our community.",
    icon: "leaf",
  },
  {
    id: 2,
    title: "Zero Waste",
    description:
      "We are committed to sustainable practices. From composting to creative menu planning, we strive to minimize our environmental footprint.",
    icon: "recycle",
  },
  {
    id: 3,
    title: "Authentic Hospitality",
    description:
      "Treating every guest like family is at the core of our service. We don't just serve food, we create memories and lasting connections.",
    icon: "heart",
  },
] as const;
