"use client";
import { motion } from "framer-motion";
import { Phone, Star, Clock, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#F8FAFF] to-[#E8F4FF]">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-mint/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-200/20 blur-2xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1A6FE8 1px, transparent 1px), linear-gradient(90deg, #1A6FE8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Работаем круглосуточно · Шымкент
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4"
            >
              Ваша улыбка —<br />
              <span className="text-primary">наша забота</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
            >
              Стоматология <strong className="text-navy">Premium Dental 24/7</strong> — работаем круглосуточно в Шымкенте. Профессиональное лечение для всей семьи без выходных.
            </motion.p>

            {/* Ratings mini */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">5.0</span>
              <span className="text-gray-500 text-sm">170+ пациентов оценили нас</span>
            </motion.div>

            {/* Quick contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <Phone size={14} />
              <span>Или позвоните:</span>
              <a
                href="tel:+77753500304"
                className="text-primary font-semibold hover:underline"
              >
                +7-775-350-03-04
              </a>
            </motion.div>
          </div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Стоматология Premium Dental"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-bold text-navy text-lg">Premium Dental 24/7</div>
                    <div className="text-gray-500 text-sm">ЖК Престиж, 189-й квартал, Шымкент</div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-xl px-3 py-1.5">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="font-bold text-amber-700 text-sm">5.0</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                    <Clock size={13} className="text-mint" />
                    <span className="text-xs font-semibold text-green-700">Открыто сейчас</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5">
                    <span className="text-xs font-semibold text-primary">24/7 · Круглосуточно</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-blue-100"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-primary text-lg">🦷</span>
              </div>
              <div>
                <div className="text-xs text-gray-500">Имплантация</div>
                <div className="text-sm font-bold text-navy">от 100 000 ₸</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-mint text-white rounded-2xl shadow-xl px-4 py-3"
            >
              <div className="text-xs opacity-80">ЕНПФ принимаем</div>
              <div className="font-bold text-sm">Пенсионные накопления</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs">Прокрутите вниз</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}