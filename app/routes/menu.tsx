import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";
import { MenuTabs } from "~/components/MenuTabs";

export const meta: MetaFunction = () => {
  return [
    { title: "Меню - Sholdeme Coffee" },
    { name: "description", content: "Электронное меню кофейни Sholdeme Coffee. Кофе, чай, лимонады и другие напитки. Цены и описания всех позиций." },
    { name: "keywords", content: "меню, кофе, эспрессо, латте, американо, чай, лимонады, цены" },
  ];
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-8">
        <MenuTabs />
      </div>
    </div>
  );
}
