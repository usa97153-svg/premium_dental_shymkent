"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Award, CreditCard, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Круглосуточная работа",
    desc: "Приём пациентов в любое время суток, включая ночь и праздничные дни. Запись по телефону или WhatsApp.",
    accent: "#1A6FE8",
    bg: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Опытные врачи",
    desc: "В клинике работают взрослый и детский ортодонт. Регулярное повышение квалификации специалистов.",
    accent: "#7C3AED",
    bg: "bg-violet-50",
  },
  {
    icon: CreditCard,
    title: "Оплата ЕНПФ",
    desc: "Принимаем пенсионные накопления (ЕНПФ) в счёт оплаты лечения. Сделайте улыбку красивой без лишних затрат.",
    accent: "#00C896",
    bg: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Официальная лицензия",
    desc: "Клиника работает по лицензии Министерства здравоохранения РК. Лицензия № KZ16226370463.",
    accent: "#F59E0B",
    bg: "bg-amber-50",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-primary bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 inline-block mb-4">
              Почему выбирают нас
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
              Ваше доверие — наша главная ценность
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Premium Dental 24/7 — это современная стоматологическая клиника с многолетним опытом. Мы работаем для того, чтобы каждый пациент получил качественную медицинскую помощь вне зависимости от времени суток.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-[#F8FAFF] rounded-2xl p-4 flex-1">
                <div className="text-2xl font-bold text-primary mb-1">170+</div>
                <div className="text-sm text-gray-500">пациентов уже доверились нам</div>
              </div>
              <div className="bg-[#F8FAFF] rounded-2xl p-4 flex-1">
                <div className="text-2xl font-bold text-mint mb-1">5.0 ⭐</div>
                <div className="text-sm text-gray-500">средний рейтинг на 2GIS</div>
              </div>
              <div className="bg-[#F8FAFF] rounded-2xl p-4 flex-1">
                <div className="text-2xl font-bold text-violet-600 mb-1">24/7</div>
                <div className="text-sm text-gray-500">без выходных и праздников</div>
              </div>
            </div>
          </motion.div>

          {/* Right features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-[#F8FAFF] border border-blue-50 rounded-2xl p-5 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-11 h-11 ${f.bg} rounded-xl flex items-center justify-center mb-3`}
                    style={{ color: f.accent }}
                  >
                    <Icon size={21} />
                  </div>
                  <h3 className="font-bold text-navy text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
