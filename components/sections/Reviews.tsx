"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Айгерим Сейткали",
    date: "март 2024",
    rating: 5,
    text: "Отличная клиника! Обратилась ночью с острой зубной болью — приняли сразу без ожидания. Врач объяснил всё подробно, сделал процедуру безболезненно. Уже в который раз обращаюсь — всегда на высшем уровне. Рекомендую всем!",
    avatar: "АС",
    avatarBg: "bg-blue-100 text-blue-700",
  },
  {
    name: "Нурлан Жаксыбеков",
    date: "февраль 2024",
    rating: 5,
    text: "Поставил импланты — результатом очень доволен. Всё прошло быстро и профессионально. Цены разумные, персонал вежливый и внимательный. Отдельное спасибо за возможность оплаты через ЕНПФ — очень удобно для семейного бюджета.",
    avatar: "НЖ",
    avatarBg: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Динара Байменова",
    date: "январь 2024",
    rating: 5,
    text: "Привела ребёнка на лечение — боялась, что будет плакать. Но врачи нашли подход, всё прошло спокойно и без слёз! Ребёнок сам просится снова. Современное оборудование, чисто, уютно. Спасибо большое всей команде Premium Dental!",
    avatar: "ДБ",
    avatarBg: "bg-pink-100 text-pink-700",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 inline-block mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Что говорят наши пациенты
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-navy">5.0</span>
            <span>· 75 отзывов на 2GIS</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#F8FAFF] border border-blue-50 rounded-2xl p-6 relative"
            >
              <Quote size={32} className="text-blue-100 absolute top-4 right-4" />
              
              <div className="flex">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star
                    key={j}
                    size={15}
                    className={j <= r.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed my-4">"{r.text}"</p>

              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-10 h-10 rounded-full ${r.avatarBg} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2GIS link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <span className="text-sm text-gray-500">
            Все отзывы можно посмотреть на{" "}
            <a
              href="https://2gis.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              2GIS
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
