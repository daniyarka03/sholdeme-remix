import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { Navigation } from "~/components/Navigation";
import { sampleArticles, Article } from "~/data/articles";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  const article = sampleArticles.find(a => a.slug === slug);
  
  if (!article) {
    throw new Response("Статья не найдена", { status: 404 });
  }
  
  const relatedArticles = sampleArticles
    .filter(a => a.id !== article.id && a.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3);
  
  return json({ article, relatedArticles });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.article) {
    return [
      { title: "Статья не найдена - Sholdeme Coffee" },
      { name: "description", content: "Запрашиваемая статья не найдена" },
    ];
  }

  const { article } = data;
  
  return [
    { title: `${article.title} - Sholdeme Coffee` },
    { name: "description", content: article.metaDescription },
    { name: "keywords", content: article.metaKeywords.join(", ") },
    { name: "author", content: article.author },
    { property: "article:published_time", content: article.publishedAt },
    { property: "article:author", content: article.author },
    { property: "article:tag", content: article.tags.join(", ") },
    { property: "og:title", content: article.title },
    { property: "og:description", content: article.metaDescription },
    { property: "og:type", content: "article" },
    { property: "og:image", content: article.image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: article.title },
    { name: "twitter:description", content: article.metaDescription },
    { name: "twitter:image", content: article.image },
  ];
};

export default function ArticlePage() {
  const { article, relatedArticles } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-orange-500">Главная</Link></li>
              <li><span>/</span></li>
              <li><Link to="/articles" className="hover:text-orange-500">Статьи</Link></li>
              <li><span>/</span></li>
              <li className="text-gray-900">{article.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between py-4 border-y border-gray-200">
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">
                      {article.author.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{article.author}</p>
                    <p className="text-sm text-gray-500">Автор статьи</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right text-gray-600">
                <time dateTime={article.publishedAt} className="block text-sm">
                  {new Date(article.publishedAt).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <p className="text-sm">{article.readingTime} мин чтения</p>
              </div>
            </div>
          </header>

          {/* Article Image */}
          <div className="aspect-video bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-500">Изображение статьи</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
              {article.excerpt}
            </div>
            
            {/* Здесь будет полный контент статьи */}
            <div className="text-gray-800 leading-relaxed space-y-6">
              <p>
                Это демонстрационная страница статьи. В реальном приложении здесь будет 
                отображаться полный контент статьи, который вы будете создавать в другом месте.
              </p>
              
              <p>
                Страница оптимизирована для SEO с правильными мета-тегами, структурированными данными 
                и семантической разметкой HTML.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Основное содержание
              </h2>
              
              <p>
                Здесь будет размещен основной контент статьи. Система поддерживает:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Заголовки разных уровней</li>
                <li>Списки и нумерованные списки</li>
                <li>Изображения с подписями</li>
                <li>Цитаты и выделения</li>
                <li>Ссылки на другие статьи</li>
              </ul>
              
              <blockquote className="border-l-4 border-orange-500 pl-6 italic text-gray-600 my-8">
                "Хорошая статья о кофе должна не только информировать, но и вдохновлять 
                на новые кофейные эксперименты."
              </blockquote>
            </div>
          </div>

          {/* Social Share */}
          <div className="border-t border-b border-gray-200 py-6 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Поделиться статьей:</p>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <span>Facebook</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  <span>Twitter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Похожие статьи
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <div key={relatedArticle.id} className="group">
                    <Link to={`/articles/${relatedArticle.slug}`}>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                        <span className="text-gray-500 text-sm">Изображение</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {relatedArticle.excerpt.substring(0, 120)}...
                      </p>
                      <div className="text-sm text-gray-500">
                        {relatedArticle.author} • {relatedArticle.readingTime} мин
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
