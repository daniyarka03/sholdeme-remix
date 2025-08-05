import { useState, useEffect, useRef } from "react";
import { TranslatedMenuCategory, translatedMenuData, Language } from "~/data/translatedMenu";
import { MenuItemCard } from "./MenuItemCard";

interface MenuTabsProps {
  categories?: TranslatedMenuCategory[];
}

const languages: { code: Language; name: string }[] = [
  { code: 'KZ', name: 'Қазақша' },
  { code: 'RU', name: 'Русский' },
  { code: 'EN', name: 'English' }
];

export function MenuTabs({ categories = translatedMenuData }: MenuTabsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");
  const [activeLanguage, setActiveLanguage] = useState<Language>('RU');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const isScrolling = useRef(false);

  // Функция для прокрутки к категории
  const scrollToCategory = (categoryId: string) => {
    const element = sectionRefs.current[categoryId];
    if (element) {
      isScrolling.current = true;
      const headerHeight = 160; // Примерная высота sticky header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveCategory(categoryId);
      // Сбрасываем флаг через некоторое время
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  // Отслеживание прокрутки для автоматического переключения активной вкладки
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollPosition = window.scrollY + 200; // Смещение для лучшего UX

      for (const category of categories) {
        const element = sectionRefs.current[category.id];
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (activeCategory !== category.id) {
              setActiveCategory(category.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories, activeCategory]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-4xl mx-auto p-4">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Sholdeme Coffee</h1>
            
            {/* Language Selector with horizontal scroll */}
            <div className="flex justify-center mb-4">
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide px-4">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => setActiveLanguage(language.code)}
                    className={`px-3 py-1 rounded text-sm font-medium whitespace-nowrap transition-colors ${
                      activeLanguage === language.code
                        ? "bg-orange-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {language.code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs with horizontal scroll */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 pb-2 min-w-max px-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name[activeLanguage]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {categories.map((category) => (
          <div 
            key={category.id}
            ref={(el) => sectionRefs.current[category.id] = el}
            className="mb-12"
          >
            {/* Category Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {category.name[activeLanguage]}
            </h2>

            {/* Menu Items */}
            <div className="space-y-4">
              {category.items.map((item) => (
                <MenuItemCard 
                  key={item.id} 
                  item={{
                    id: item.id,
                    name: item.name[activeLanguage],
                    description: item.description[activeLanguage],
                    price: item.price,
                    image: item.image
                  }} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
