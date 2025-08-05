export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  image: string;
  tags: string[];
  metaDescription: string;
  metaKeywords: string[];
}

export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const articleCategories: ArticleCategory[] = [
  {
    id: "coffee-types",
    name: "Виды кофе",
    slug: "coffee-types",
    description: "Все о различных видах кофе и способах их приготовления"
  },
  {
    id: "brewing-methods",
    name: "Способы заваривания",
    slug: "brewing-methods", 
    description: "Методы и техники приготовления идеального кофе"
  },
  {
    id: "coffee-culture",
    name: "Кофейная культура",
    slug: "coffee-culture",
    description: "История и традиции кофейной культуры по всему миру"
  },
  {
    id: "barista-tips",
    name: "Советы бариста",
    slug: "barista-tips",
    description: "Профессиональные секреты и советы от наших бариста"
  }
];

// Примерные статьи для демонстрации
export const sampleArticles: Article[] = [
  {
    id: "espresso-vs-americano",
    title: "Эспрессо против Американо: в чем разница?",
    slug: "espresso-vs-americano",
    excerpt: "Разбираемся в различиях между двумя популярными кофейными напитками и узнаем, какой из них лучше выбрать.",
    content: "Полный текст статьи...",
    author: "Алексей Смирнов",
    publishedAt: "2024-12-15",
    readingTime: 5,
    image: "/articles/espresso-vs-americano.jpg",
    tags: ["эспрессо", "американо", "виды кофе"],
    metaDescription: "Узнайте главные различия между эспрессо и американо. Какой кофе выбрать, история напитков и советы по приготовлению.",
    metaKeywords: ["эспрессо", "американо", "разница", "кофе", "напитки", "бариста"]
  },
  {
    id: "perfect-latte-art",
    title: "Искусство латте-арт: создаем красивые рисунки на кофе",
    slug: "perfect-latte-art",
    excerpt: "Пошаговое руководство по созданию красивых рисунков на молочной пенке. От простых сердечек до сложных розетт.",
    content: "Полный текст статьи...",
    author: "Мария Козлова",
    publishedAt: "2024-12-10",
    readingTime: 8,
    image: "/articles/latte-art.jpg",
    tags: ["латте-арт", "бариста", "техника"],
    metaDescription: "Научитесь создавать красивые рисунки на кофе. Пошаговое руководство по латте-арт от профессиональных бариста.",
    metaKeywords: ["латте-арт", "рисунки на кофе", "бариста", "техника", "молочная пенка"]
  },
  {
    id: "coffee-beans-guide",
    title: "Гид по кофейным зернам: арабика, робуста и их различия",
    slug: "coffee-beans-guide",
    excerpt: "Всё, что нужно знать о кофейных зернах: от видов растений до влияния на вкус готового напитка.",
    content: "Полный текст статьи...",
    author: "Дмитрий Волков",
    publishedAt: "2024-12-05",
    readingTime: 12,
    image: "/articles/coffee-beans.jpg",
    tags: ["кофейные зерна", "арабика", "робуста"],
    metaDescription: "Полный гид по кофейным зернам. Различия между арабикой и робустой, влияние на вкус и как выбрать лучшие зерна.",
    metaKeywords: ["кофейные зерна", "арабика", "робуста", "вкус кофе", "качество"]
  },
  {
    id: "home-brewing-tips",
    title: "Как заварить идеальный кофе дома: 10 простых советов",
    slug: "home-brewing-tips",
    excerpt: "Профессиональные секреты приготовления вкусного кофе в домашних условиях без дорогого оборудования.",
    content: "Полный текст статьи...",
    author: "Алексей Смирнов",
    publishedAt: "2024-11-28",
    readingTime: 7,
    image: "/articles/home-brewing.jpg",
    tags: ["домашнее заваривание", "советы", "техника"],
    metaDescription: "10 простых советов для приготовления идеального кофе дома. Профессиональные секреты от опытных бариста.",
    metaKeywords: ["кофе дома", "заваривание", "советы бариста", "приготовление кофе"]
  },
  {
    id: "coffee-history",
    title: "История кофе: от эфиопских гор до современных кофеен",
    slug: "coffee-history",
    excerpt: "Увлекательное путешествие в историю кофе: легенды о происхождении, распространение по миру и эволюция кофейной культуры.",
    content: "Полный текст статьи...",
    author: "Мария Козлова",
    publishedAt: "2024-11-20",
    readingTime: 15,
    image: "/articles/coffee-history.jpg",
    tags: ["история кофе", "культура", "традиции"],
    metaDescription: "Узнайте увлекательную историю кофе от древней Эфиопии до современных кофеен. Легенды, факты и традиции.",
    metaKeywords: ["история кофе", "происхождение кофе", "кофейная культура", "традиции"]
  },
  {
    id: "seasonal-coffee-drinks",
    title: "Сезонные кофейные напитки: что пить зимой, летом и в межсезонье",
    slug: "seasonal-coffee-drinks",
    excerpt: "Подборка лучших кофейных напитков для каждого сезона. От освежающих летних холодных кофе до согревающих зимних специалитетов.",
    content: "Полный текст статьи...",
    author: "Дмитрий Волков",
    publishedAt: "2024-11-15",  
    readingTime: 6,
    image: "/articles/seasonal-drinks.jpg",
    tags: ["сезонные напитки", "холодный кофе", "горячий кофе"],
    metaDescription: "Лучшие кофейные напитки для каждого сезона. Холодные летние кофе и согревающие зимние специалитеты.",
    metaKeywords: ["сезонные напитки", "летний кофе", "зимний кофе", "холодный кофе", "горячий кофе"]
  }
];
