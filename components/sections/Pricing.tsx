"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const prices = [
  { service: "Консультация врача", price: "Бесплатно", highlight: true },
  { service: "Лечение кариеса (1 поверхность)", price: "от 8 000 ₸" },
  { service: "Удаление зуба (простое)", price: "от 5 000 ₸" },
  { service: "Удаление зуба (сложное)", price: "от 12 000 ₸" },
  { service: "Профессиональная чистка зубов", price: "от 15 000 ₸" },
  { service: "Отбеливание зубов (комплекс)", price: "от 30 000 ₸" },
  { service: "Имплантация (1 зуб, под ключ)", price: "от 120 000 ₸" },
  { service: "Брекеты (металлические)", price: "от 150 000 ₸" },
  { service: "Элайнеры", price: "от 200 000 ₸" },
  { service: "Коронка металлокерамика", price: "от 25 000 ₸" },
  { service: "Виниры (1 зуб)", price: "от 40 000 ₸" },
  { service: "Рентген-снимок", price: "от 2 000 ₸" },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-20 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 inline-block mb-4">
            Цены
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Прозрачные цены без скрытых доплат
          </h2>
          <p className="text-gray-500 text-lg">
            Точная стоимость лечения определяется после осмотра врача
          </p>
        </motion.div>

        {/* Price table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-sm border border-blue-50 overflow-hidden"
        >
          {prices.map((p, i) => (
            <div
              key={p.service}
              className={`flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-0 transition-colors hover:bg-blue-50/30 ${
                p.highlight ? "bg-gradient-to-r from-blue-50 to-green-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={16}
                  className={p.highlight ? "text-mint" : "text-blue-200"}
                />
                <span className={`font-medium ${p.highlight ? "text-navy font-semibold" : "text-gray-700"}`}>
                  {p.service}
                </span>
                {p.highlight && (
                  <span className="text-xs font-bold bg-mint text-white rounded-full px-2 py-0.5">
                    АКЦИЯ
                  </span>
                )}
              </div>
              <span
                className={`font-bold text-right ${
                  p.highlight ? "text-mint text-lg" : "text-primary"
                }`}
              >
                {p.price}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ЕНПФ note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl px-6 py-5 text-white"
        >
          <div>
            <div className="font-bold text-lg mb-1">Принимаем ЕНПФ</div>
            <div className="text-blue-100 text-sm">
              Оплачивайте лечение пенсионными накоплениями — легко и удобно
            </div>
          </div>
          <a
            href="https://wa.me/77753500304"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-primary font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            <MessageCircle size={18} />
            Уточнить цену
          </a>
        </motion.div>
      </div>
    </section>
  );
}
