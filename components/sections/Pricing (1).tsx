"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const categories = [
  {
    title: "Кариес",
    items: [
      { service: "Поверхностный", price: "8 000 ₸" },
      { service: "Средний", price: "9 000 ₸" },
      { service: "Глубокий", price: "10 000 – 15 000 ₸" },
      { service: "Вторичный кариес", price: "20 000 ₸" },
    ],
  },
  {
    title: "Пульпит",
    items: [
      { service: "1 канал", price: "15 000 – 18 000 ₸" },
      { service: "2–3 канала", price: "18 000 – 30 000 ₸" },
    ],
  },
  {
    title: "Периодонтит",
    items: [
      { service: "Лечение периодонтита", price: "20 000 – 30 000 ₸" },
    ],
  },
  {
    title: "Коронки",
    items: [
      { service: "Металлокерамика (стандарт)", price: "25 000 ₸" },
      { service: "Металлокерамика (премиум)", price: "30 000 ₸" },
      { service: "Цирконий", price: "70 000 ₸" },
    ],
  },
  {
    title: "Протезирование",
    items: [
      { service: "Вакуумный протез", price: "150 000 ₸" },
      { service: "Био протез", price: "90 000 ₸" },
      { service: "Простой протез", price: "50 000 ₸" },
    ],
  },
  {
    title: "Удаление зубов",
    items: [
      { service: "Простое удаление", price: "7 000 ₸" },
      { service: "Сложное удаление", price: "10 000 ₸" },
      { service: "При периодонтите", price: "10 000 – 20 000 ₸" },
      { service: "Зуб мудрости (верхний)", price: "12 000 – 30 000 ₸" },
      { service: "Зуб мудрости (нижний)", price: "14 000 – 35 000 ₸" },
    ],
  },
  {
    title: "Имплантация",
    items: [
      { service: "Имплант DIO (Южная Корея)", price: "100 000 ₸" },
      { service: "Коронка на имплант (цирконий)", price: "100 000 ₸" },
    ],
  },
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

        {/* Categories */}
        <div className="space-y-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="bg-white rounded-2xl border border-blue-50 overflow-hidden shadow-sm"
            >
              <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-3 border-b border-blue-50">
                <h3 className="font-bold text-navy text-base">{cat.title}</h3>
              </div>
              {cat.items.map((p, i) => (
                <div
                  key={p.service}
                  className={`flex items-center justify-between px-6 py-3.5 border-b border-gray-50 last:border-0 hover:bg-blue-50/30 transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-blue-200 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{p.service}</span>
                  </div>
                  <span className="font-bold text-primary text-sm whitespace-nowrap ml-4">{p.price}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* ЕНПФ note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl px-6 py-5 text-white"
        >
          <div>
            <div className="font-bold text-lg mb-1">Принимаем ЕНПФ</div>
            <div className="text-blue-100 text-sm">
              Оплачивайте лечение пенсионными накоплениями — легко и удобно
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=77753500304&text=Здравствуйте!%20Хочу%20записаться%20на%20приём."
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
