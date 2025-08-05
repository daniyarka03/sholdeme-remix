import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";
import { ArticleCard, FeaturedArticle } from "~/components/ArticleCard";
import { sampleArticles, articleCategories } from "~/data/articles";

export const meta: MetaFunction = () => {
  return [
    { title: "Статьи о кофе - Sholdeme Coffee" },
    { name: "description", content: "Читайте интересные статьи о кофе от экспертов Sholdeme Coffee. Гиды по видам кофе, советы по завариванию, история кофейной культуры и многое другое." },
    { name: "keywords", content: "статьи о кофе, гид по кофе, советы бариста, кофейная культура, способы заваривания, виды кофе" },
    { property: "og:title", content: "Статьи о кофе - Sholdeme Coffee" },
    { property: "og:description", content: "Экспертные статьи о кофе: гиды, советы, история и культура" },
    { property: "og:type", content: "website" },
  ];
};

export default function Articles() {
  const featuredArticle = sampleArticles[0];
  const otherArticles = sampleArticles.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Статьи о кофе
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Погрузитесь в мир кофе с нашими экспертными статьями. 
              Узнайте секреты приготовления, историю напитков и профессиональные советы.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Категории</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {articleCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          <FeaturedArticle article={featuredArticle} />

          {/* Latest Articles */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Последние статьи
              </h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500">
                  <option>Все категории</option>
                  {articleCategories.map((category) => (
                    <option key={category.id} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500">
                  <option>Сначала новые</option>
                  <option>Сначала старые</option>
                  <option>По популярности</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gray-900 rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Не пропустите новые статьи
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Подпишитесь на нашу рассылку и получайте самые интересные статьи о кофе прямо на почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
