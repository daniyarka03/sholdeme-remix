import { Link } from "@remix-run/react";
import { Article } from "~/data/articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/articles/${article.slug}`}>
        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Изображение статьи</span>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span className="mx-2">•</span>
          <span>{article.readingTime} мин чтения</span>
        </div>
        
        <Link to={`/articles/${article.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors">
            {article.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <Link
            to={`/articles/${article.slug}`}
            className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            Читать далее →
          </Link>
        </div>
      </div>
    </article>
  );
}

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <article className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg overflow-hidden text-white mb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="p-8">
          <div className="flex items-center text-orange-100 text-sm mb-3">
            <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium mr-3">
              Рекомендуем
            </span>
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.readingTime} мин чтения</span>
          </div>
          
          <Link to={`/articles/${article.slug}`}>
            <h1 className="text-3xl font-bold mb-4 hover:text-orange-100 transition-colors">
              {article.title}
            </h1>
          </Link>
          
          <p className="text-orange-100 mb-6 text-lg">
            {article.excerpt}
          </p>
          
          <Link
            to={`/articles/${article.slug}`}
            className="inline-flex items-center bg-white text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
          >
            Читать статью
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="aspect-video bg-white/10 flex items-center justify-center">
          <span className="text-white/70">Изображение статьи</span>
        </div>
      </div>
    </article>
  );
}
