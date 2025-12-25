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
      image: "/images/placeholder.jpg",
    },
    {
      id: 2,
      name: "Escargots de Bourgogne",
      description: "Six Burgundy snails baked with garlic herb butter",
      price: 16,
      image: "/images/placeholder.jpg",
    },
    {
      id: 3,
      name: "Pâté de Campagne",
      description:
        "Rustic country pâté served with cornichons and crusty bread",
      price: 14,
      image: "/images/placeholder.jpg",
    },
  ],
  mains: [
    {
      id: 4,
      name: "Coq au Vin",
      description:
        "Braised chicken in red wine with mushrooms, pearl onions, and lardons",
      price: 32,
      image: "/images/placeholder.jpg",
    },
    {
      id: 5,
      name: "Beef Bourguignon",
      description:
        "Slow-braised beef in Burgundy wine with carrots and potatoes",
      price: 36,
      image: "/images/placeholder.jpg",
    },
    {
      id: 6,
      name: "Sole Meunière",
      description: "Pan-fried Dover sole with brown butter, lemon, and parsley",
      price: 42,
      image: "/images/placeholder.jpg",
    },
    {
      id: 7,
      name: "Duck Confit",
      description:
        "Crispy duck leg confit with roasted potatoes and mixed greens",
      price: 34,
      image: "/images/placeholder.jpg",
    },
  ],
  desserts: [
    {
      id: 8,
      name: "Crème Brûlée",
      description: "Classic vanilla custard with caramelized sugar crust",
      price: 10,
      image: "/images/placeholder.jpg",
    },
    {
      id: 9,
      name: "Tarte Tatin",
      description: "Upside-down caramelized apple tart with crème fraîche",
      price: 12,
      image: "/images/placeholder.jpg",
    },
    {
      id: 10,
      name: "Chocolate Mousse",
      description: "Rich dark chocolate mousse with whipped cream",
      price: 11,
      image: "/images/placeholder.jpg",
    },
  ],
  drinks: [
    {
      id: 11,
      name: "House Red Wine",
      description: "Selection of fine French red wines",
      price: 9,
      image: "/images/placeholder.jpg",
    },
    {
      id: 12,
      name: "House White Wine",
      description: "Selection of crisp French white wines",
      price: 9,
      image: "/images/placeholder.jpg",
    },
    {
      id: 13,
      name: "French Coffee",
      description: "Premium roasted coffee with optional cream",
      price: 5,
      image: "/images/placeholder.jpg",
    },
  ],
} as const;
