import { Link } from "@remix-run/react";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Добро пожаловать в
            <span className="text-orange-500 block">Sholdeme Coffee</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте для себя мир настоящего кофе. Мы готовим каждую чашку с любовью, 
            используя лучшие зерна и современное оборудование.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Посмотреть меню
            </Link>
            <Link
              to="/about"
              className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full font-medium hover:bg-orange-50 transition-colors"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              О нашей кофейне
            </h2>
            <p className="text-gray-600 mb-6">
              Sholdeme Coffee — это место, где встречаются традиции и инновации. 
              Мы специализируемся на приготовлении кофе высочайшего качества, 
              используя только отборные зерна от лучших поставщиков мира.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Премиальные кофейные зерна</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Профессиональные бариста</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Уютная атмосфера</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Фото кофейни</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MenuPreview() {
  const popularItems = [
    { name: "Эспрессо", price: 590, description: "Классический итальянский кофе" },
    { name: "Американо", price: 790, description: "Эспрессо с добавлением горячей воды" },
    { name: "Айс латте", price: 890, description: "Охлажденный латте со льдом" },
    { name: "Матча латте", price: 790, description: "Латте с японским зеленым чаем матча" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Популярные напитки
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Попробуйте наши самые любимые напитки, которые завоевали сердца наших гостей
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {popularItems.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Фото</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-orange-500 font-bold mb-2">{item.price} ₸</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/menu"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            Посмотреть полное меню
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Лучший кофе в городе! Очень уютная атмосфера и профессиональные бариста.",
      rating: 5
    },
    {
      name: "Максим Иванов", 
      text: "Хожу сюда каждое утро. Качество кофе всегда на высоте, а персонал очень дружелюбный.",
      rating: 5
    },
    {
      name: "Елена Сидорова",
      text: "Отличное место для работы с ноутбуком. Вкусный кофе и быстрый WiFi.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Отзывы наших гостей
          </h2>
          <p className="text-gray-600">
            Что говорят о нас наши постоянные клиенты
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>ул. Примерная, 123, Алматы</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+7 (727) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@sholdeme.coffee</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Часы работы</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Пн - Пт:</span>
                  <span>7:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб - Вс:</span>
                  <span>8:00 - 23:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
