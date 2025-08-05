import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";
import { Hero, About, MenuPreview, Testimonials, Contact } from "~/components/LandingSections";

export const meta: MetaFunction = () => {
  return [
    { title: "Sholdeme Coffee - Лучшая кофейня в Алматы" },
    { name: "description", content: "Откройте для себя мир настоящего кофе в Sholdeme Coffee. Премиальные зерна, профессиональные бариста, уютная атмосфера. Закажите кофе онлайн или посетите нашу кофейню." },
    { name: "keywords", content: "кофейня, кофе, эспрессо, латте, американо, Алматы, Sholdeme Coffee" },
    { property: "og:title", content: "Sholdeme Coffee - Лучшая кофейня в Алматы" },
    { property: "og:description", content: "Премиальный кофе, профессиональные бариста, уютная атмосфера" },
    { property: "og:type", content: "website" },
  ];
};

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <MenuPreview />
      <Testimonials />
      <Contact />
    </div>
  );
}
