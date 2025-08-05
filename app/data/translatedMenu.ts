export type Language = 'KZ' | 'RU' | 'EN';

export interface TranslatedText {
  KZ: string;
  RU: string;
  EN: string;
}

export interface TranslatedMenuItem {
  id: string;
  name: TranslatedText;
  description: TranslatedText;
  price: number;
  image?: string;
}

export interface TranslatedMenuCategory {
  id: string;
  name: TranslatedText;
  items: TranslatedMenuItem[];
}

export const translatedMenuData: TranslatedMenuCategory[] = [
  {
    id: "coffee",
    name: {
      KZ: "Кофе",
      RU: "Кофе", 
      EN: "Coffee"
    },
    items: [
      {
        id: "espresso",
        name: {
          KZ: "Эспрессо",
          RU: "Эспрессо",
          EN: "Espresso"
        },
        description: {
          KZ: "Классикалық итальян кофесі",
          RU: "Классический итальянский кофе",
          EN: "Classic Italian coffee"
        },
        price: 590,
        image: "/espresso.jpg"
      },
      {
        id: "doppio",
        name: {
          KZ: "Доппио",
          RU: "Доппио",
          EN: "Doppio"
        },
        description: {
          KZ: "Қос эспрессо",
          RU: "Двойной эспрессо",
          EN: "Double espresso"
        },
        price: 690,
        image: "/doppio.jpg"
      },
      {
        id: "americano",
        name: {
          KZ: "Американо",
          RU: "Американо",
          EN: "Americano"
        },
        description: {
          KZ: "Ыстық сумен эспрессо",
          RU: "Эспрессо с добавлением горячей воды",
          EN: "Espresso with hot water"
        },
        price: 790,
        image: "/americano.jpg"
      }
    ]
  },
  {
    id: "cold-coffee",
    name: {
      KZ: "Суық кофе",
      RU: "Холодный кофе",
      EN: "Cold Coffee"
    },
    items: [
      {
        id: "iced-latte",
        name: {
          KZ: "Айс латте",
          RU: "Айс латте",
          EN: "Iced Latte"
        },
        description: {
          KZ: "Мұзбен салқындатылған латте",
          RU: "Охлажденный латте со льдом",
          EN: "Chilled latte with ice"
        },
        price: 890,
        image: "/iced-latte.jpg"
      },
      {
        id: "cold-brew",
        name: {
          KZ: "Колд брю",
          RU: "Колд брю",
          EN: "Cold Brew"
        },
        description: {
          KZ: "Суық дайындалған кофе",
          RU: "Кофе холодного заваривания",
          EN: "Cold brewed coffee"
        },
        price: 990,
        image: "/cold-brew.jpg"
      }
    ]
  },
  {
    id: "non-coffee",
    name: {
      KZ: "Кофе емес",
      RU: "Не кофе",
      EN: "Non-Coffee"
    },
    items: [
      {
        id: "hot-chocolate",
        name: {
          KZ: "Ыстық шоколад",
          RU: "Горячий шоколад",
          EN: "Hot Chocolate"
        },
        description: {
          KZ: "Қанықты шоколад сусыны",
          RU: "Насыщенный шоколадный напиток",
          EN: "Rich chocolate drink"
        },
        price: 690,
        image: "/hot-chocolate.jpg"
      },
      {
        id: "matcha-latte",
        name: {
          KZ: "Матча латте",
          RU: "Матча латте",
          EN: "Matcha Latte"
        },
        description: {
          KZ: "Жапон жасыл шайымен латте",
          RU: "Латте с японским зеленым чаем матча",
          EN: "Latte with Japanese green tea matcha"
        },
        price: 790,
        image: "/matcha-latte.jpg"
      }
    ]
  },
  {
    id: "tea",
    name: {
      KZ: "Шай",
      RU: "Чай",
      EN: "Tea"
    },
    items: [
      {
        id: "earl-grey",
        name: {
          KZ: "Эрл Грей",
          RU: "Эрл Грей",
          EN: "Earl Grey"
        },
        description: {
          KZ: "Бергамотты қара шай",
          RU: "Черный чай с бергамотом",
          EN: "Black tea with bergamot"
        },
        price: 490,
        image: "/earl-grey.jpg"
      },
      {
        id: "green-tea",
        name: {
          KZ: "Жасыл шай",
          RU: "Зеленый чай",
          EN: "Green Tea"
        },
        description: {
          KZ: "Классикалық жасыл шай",
          RU: "Классический зеленый чай",
          EN: "Classic green tea"
        },
        price: 450,
        image: "/green-tea.jpg"
      }
    ]
  },
  {
    id: "iced-tea",
    name: {
      KZ: "Суық шай",
      RU: "Холодный чай",
      EN: "Iced Tea"
    },
    items: [
      {
        id: "iced-green-tea",
        name: {
          KZ: "Суық жасыл шай",
          RU: "Холодный зеленый чай",
          EN: "Iced Green Tea"
        },
        description: {
          KZ: "Мұзбен сергітетін жасыл шай",
          RU: "Освежающий зеленый чай со льдом",
          EN: "Refreshing green tea with ice"
        },
        price: 590,
        image: "/iced-green-tea.jpg"
      },
      {
        id: "fruit-tea",
        name: {
          KZ: "Жемісті шай",
          RU: "Фруктовый чай",
          EN: "Fruit Tea"
        },
        description: {
          KZ: "Жемістермен суық шай",
          RU: "Холодный чай с фруктами",
          EN: "Cold tea with fruits"
        },
        price: 690,
        image: "/fruit-tea.jpg"
      }
    ]
  },
  {
    id: "lemonades",
    name: {
      KZ: "Лимонадтар",
      RU: "Лимонады",
      EN: "Lemonades"
    },
    items: [
      {
        id: "classic-lemonade",
        name: {
          KZ: "Классикалық лимонад",
          RU: "Классический лимонад",
          EN: "Classic Lemonade"
        },
        description: {
          KZ: "Жалбызбен жаңа лимонад",
          RU: "Свежий лимонад с мятой",
          EN: "Fresh lemonade with mint"
        },
        price: 590,
        image: "/classic-lemonade.jpg"
      },
      {
        id: "berry-lemonade",
        name: {
          KZ: "Жидекті лимонад",
          RU: "Ягодный лимонад",
          EN: "Berry Lemonade"
        },
        description: {
          KZ: "Жидектермен лимонад",
          RU: "Лимонад с ягодами",
          EN: "Lemonade with berries"
        },
        price: 690,
        image: "/berry-lemonade.jpg"
      }
    ]
  }
];
