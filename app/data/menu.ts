export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "coffee",
    name: "Кофе",
    items: [
      {
        id: "espresso",
        name: "Эспрессо",
        price: 590,
        description: "Классический итальянский кофе",
        image: "/espresso.jpg"
      },
      {
        id: "doppio",
        name: "Доппио",
        price: 690,
        description: "Двойной эспрессо",
        image: "/doppio.jpg"
      },
      {
        id: "americano",
        name: "Американо",
        price: 790,
        description: "Эспрессо с добавлением горячей воды",
        image: "/americano.jpg"
      }
    ]
  },
  {
    id: "cold-coffee",
    name: "Холодный кофе",
    items: [
      {
        id: "iced-latte",
        name: "Айс латте",
        price: 890,
        description: "Охлажденный латте со льдом",
        image: "/iced-latte.jpg"
      },
      {
        id: "cold-brew",
        name: "Колд брю",
        price: 990,
        description: "Кофе холодного заваривания",
        image: "/cold-brew.jpg"
      }
    ]
  },
  {
    id: "non-coffee",
    name: "Не кофе",
    items: [
      {
        id: "hot-chocolate",
        name: "Горячий шоколад",
        price: 690,
        description: "Насыщенный шоколадный напиток",
        image: "/hot-chocolate.jpg"
      },
      {
        id: "matcha-latte",
        name: "Матча латте",
        price: 790,
        description: "Латте с японским зеленым чаем матча",
        image: "/matcha-latte.jpg"
      }
    ]
  },
  {
    id: "tea",
    name: "Чай",
    items: [
      {
        id: "earl-grey",
        name: "Эрл Грей",
        price: 490,
        description: "Черный чай с бергамотом",
        image: "/earl-grey.jpg"
      },
      {
        id: "green-tea",
        name: "Зеленый чай",
        price: 450,
        description: "Классический зеленый чай",
        image: "/green-tea.jpg"
      }
    ]
  },
  {
    id: "iced-tea",
    name: "Холодный чай",
    items: [
      {
        id: "iced-green-tea",
        name: "Холодный зеленый чай",
        price: 590,
        description: "Освежающий зеленый чай со льдом",
        image: "/iced-green-tea.jpg"
      },
      {
        id: "fruit-tea",
        name: "Фруктовый чай",
        price: 690,
        description: "Холодный чай с фруктами",
        image: "/fruit-tea.jpg"
      }
    ]
  },
  {
    id: "lemonades",
    name: "Лимонады",
    items: [
      {
        id: "classic-lemonade",
        name: "Классический лимонад",
        price: 590,
        description: "Свежий лимонад с мятой",
        image: "/classic-lemonade.jpg"
      },
      {
        id: "berry-lemonade",
        name: "Ягодный лимонад",
        price: 690,
        description: "Лимонад с ягодами",
        image: "/berry-lemonade.jpg"
      }
    ]
  }
];
