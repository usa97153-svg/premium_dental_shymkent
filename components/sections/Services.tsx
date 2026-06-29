"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Smile, Baby, ShieldPlus, Sparkles, Crown, Scissors, ScanLine } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Имплантация зубов",
    desc: "Современные импланты с пожизненной гарантией. Восстановим улыбку навсегда.",
    color: "text-primary",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Smile,
    title: "Ортодонтия",
    desc: "Брекеты, элайнеры и ретейнеры. Взрослый и детский ортодонт в клинике.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Baby,
    title: "Детская стоматология",
    desc: "Бережное лечение зубов у детей. Комфортная атмосфера без стресса.",
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: ShieldPlus,
    title: "Лечение кариеса",
    desc: "Безболезненное лечение кариеса с современными материалами и анестезией.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Sparkles,
    title: "Отбеливание зубов",
    desc: "Профессиональное отбеливание до 8 тонов. Безопасно и эффективно.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Crown,
    title: "Протезирование",
    desc: "Съёмные и несъёмные протезы, виниры, коронки. Эстетика и функциональность.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Scissors,
    title: "Удаление зубов",
    desc: "Простое и сложное удаление под анестезией. Быстро и безболезненно.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: ScanLine,
    title: "Рентген и диагностика",
    desc: "Цифровой рентген и панорамный снимок прямо в клинике. Точная диагностика.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 bg-[#F8FAFF]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 inline-block mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Полный спектр стоматологических услуг
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Современное оборудование, опытные врачи и забота о каждом пациенте
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(26,111,232,0.12)" }}
                className={`bg-white rounded-2xl border ${s.border} p-6 cursor-default transition-shadow`}
              >
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={22} className={s.color} />
                </div>
                <h3 className="font-bold text-navy text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://api.whatsapp.com/send?phone=77753500304&text=Здравствуйте!%20Хочу%20записаться%20на%20приём."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Записаться на консультацию
          </a>
        </motion.div>
      </div>
    </section>
  );
}
