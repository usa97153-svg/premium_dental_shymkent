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
  {
    name: "Alla Kuishekenova",
    date: "август 2025",
    rating: 5,
    text: "Была на лечении у врача Салвара, супер спокойный врач! Я очень боюсь стоматологов, но Салвар каждый шаг мягко объяснял, зуб был сделан идеально. Медсестра очень приветливая и добрая. Надеюсь пролечить и остальные зубы здесь!",
    avatar: "АК",
    avatarBg: "bg-violet-100 text-violet-700",
  },
  {
    name: "Asem Kadyrbay",
    date: "апрель 2025",
    rating: 5,
    text: "Была в этой стоматологии и осталась очень довольна! Оборудование современное, всё чисто и стерильно. Врачи профессионалы своего дела, всё объясняют понятно. Цены вполне приемлемые за такой уровень обслуживания. Рекомендую!",
    avatar: "АК",
    avatarBg: "bg-amber-100 text-amber-700",
  },
  {
    name: "Толкынай Кайранбек",
    date: "июнь 2026",
    rating: 5,
    text: "Жақсылық врачқа рақмет — тісімді ауырсынусыз жұлып берді және бүгін тісіме чистка жасаттым, тап таза етіп тазалап берді. Көмекші қыздарға да рақмет — ем біткенше балаларыма қарап берді!",
    avatar: "ТК",
    avatarBg: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Жансая Калмахан",
    date: "март 2026",
    rating: 5,
    text: "Асылхан — ең керемет врач, ауыртпайды, жұлған жері тез жазылады, қолы жеңіл. Маған страх бар еді тіс жұлуға, бірақ барын өзгертті. Қай уақытта звандасаң, қоңырауға жауап береді. Өте білікті доктор!",
    avatar: "ЖК",
    avatarBg: "bg-rose-100 text-rose-700",
  },
];

const results = [
  {
    label: "Лечение кариеса",
    desc: "Качественная реставрация с сохранением естественного цвета зуба",
    image: "/before-after.png",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const resultsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const resultsInView = useInView(resultsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Results Section */}
      <section id="results" className="py-20 bg-[#F8FAFF]" ref={resultsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 inline-block mb-4">
              Результаты работ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              До и после лечения
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Реальные результаты наших пациентов — качество, которое видно
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-3xl border border-blue-50 shadow-md overflow-hidden max-w-md w-full"
              >
                {/* Before/After image */}
                <div className="relative">
                  <img
                    src={r.image}
                    alt={`До и после: ${r.label}`}
                    className="w-full object-cover"
                  />
                  {/* Labels */}
                  <div className="absolute top-3 left-3 bg-red-500/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    ДО
                  </div>
                  <div className="absolute bottom-3 left-3 bg-green-500/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    ПОСЛЕ
                  </div>
                  {/* Divider line */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center px-3">
                    <div className="flex-1 h-[1.5px] bg-white/60" />
                    <div className="mx-2 bg-white/90 rounded-full px-2 py-0.5 text-[10px] font-bold text-navy">
                      Premium Dental
                    </div>
                    <div className="flex-1 h-[1.5px] bg-white/60" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="font-bold text-navy text-base mb-1">{r.label}</div>
                  <p className="text-gray-500 text-sm">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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
              <span>· 100+ отзывов на 2GIS</span>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name + i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
    </>
  );
}
