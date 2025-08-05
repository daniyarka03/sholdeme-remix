import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "О нас - Sholdeme Coffee" },
    { name: "description", content: "История кофейни Sholdeme Coffee, наша философия, команда и подход к приготовлению идеального кофе." },
    { name: "keywords", content: "о нас, история, команда, философия, кофейня Sholdeme Coffee" },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">О нас</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы создаем не просто кофе — мы создаем впечатления и моменты, которые остаются в памяти
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <p className="text-gray-600 mb-4">
                Sholdeme Coffee была основана в 2020 году группой энтузиастов кофе, которые мечтали 
                принести в Алматы культуру третьей волны кофе. Мы начали с небольшой кофейни в центре города 
                и постепенно завоевали сердца кофеманов.
              </p>
              <p className="text-gray-600">
                Сегодня мы гордимся тем, что стали одной из ведущих кофеен города, сохранив при этом 
                семейную атмосферу и индивидуальный подход к каждому гостю.
              </p>
            </div>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">История кофейни</span>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наша философия</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Качество</h3>
                <p className="text-gray-600">
                  Мы используем только лучшие зерна от проверенных поставщиков и следим за каждым этапом приготовления
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Страсть</h3>
                <p className="text-gray-600">
                  Каждая чашка кофе готовится с любовью и вниманием к деталям наших опытных бариста
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Сообщество</h3>
                <p className="text-gray-600">
                  Мы создаем пространство, где люди могут встречаться, работать и наслаждаться моментом
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Наша команда</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              За каждой великолепной чашкой кофе стоят талантливые люди, которые делают это возможным
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Фото</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Алексей Смирнов</h3>
                <p className="text-orange-500 font-medium mb-2">Главный бариста</p>
                <p className="text-gray-600 text-sm">
                  10+ лет опыта в кофейной индустрии, чемпион национальных соревнований бариста
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Фото</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Мария Козлова</h3>
                <p className="text-orange-500 font-medium mb-2">Менеджер</p>
                <p className="text-gray-600 text-sm">
                  Отвечает за качество обслуживания и создание уютной атмосферы в кофейне
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Фото</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Дмитрий Волков</h3>
                <p className="text-orange-500 font-medium mb-2">Основатель</p>
                <p className="text-gray-600 text-sm">
                  Вдохновитель и идейный лидер, который превратил любовь к кофе в успешный бизнес
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
