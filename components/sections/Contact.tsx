"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 bg-navy relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-mint bg-mint/10 border border-mint/30 rounded-full px-4 py-1.5 inline-block mb-5">
              Запись на приём
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Запишитесь <br />
              <span className="text-mint">прямо сейчас</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Мы работаем круглосуточно, по предварительной записи. Позвоните или напишите в WhatsApp — ответим быстро!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://api.whatsapp.com/send?phone=77753500304&text=Здравствуйте!%20Хочу%20записаться%20на%20приём."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-mint text-white font-bold px-7 py-4 rounded-2xl hover:bg-emerald-500 transition-colors text-base shadow-lg shadow-emerald-900/30"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="tel:+77753500304"
                className="flex items-center justify-center gap-2.5 bg-white/10 border border-white/20 text-white font-bold px-7 py-4 rounded-2xl hover:bg-white/20 transition-colors text-base"
              >
                <Phone size={20} />
                +7-775-350-03-04
              </a>
            </div>

            <a
              href="https://instagram.com/premium_dental.shym"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors text-sm"
            >
              <Instagram size={16} />
              @premium_dental.shym
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-7"
          >
            <h3 className="text-white font-bold text-lg mb-6">Контактная информация</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Телефон</div>
                  <a href="tel:+77753500304" className="text-white font-semibold hover:text-mint transition-colors">
                    +7-775-350-03-04
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-mint/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-mint" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Режим работы</div>
                  <div className="text-white font-semibold">Круглосуточно, 24/7</div>
                  <div className="text-gray-400 text-sm">По предварительной записи</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-violet-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Адрес</div>
                  <div className="text-white font-semibold">ЖК Престиж, 189-й квартал, 2704</div>
                  <div className="text-gray-400 text-sm">Шымкент, Казахстан</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Instagram</div>
                  <a
                    href="https://instagram.com/premium_dental.shym"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-amber-400 transition-colors"
                  >
                    @premium_dental.shym
                  </a>
                </div>
              </div>
            </div>

            {/* 2GIS Button */}
            <a
              href="https://2gis.kz/shymkent/search/Premium%20Dental%2024%2F7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-3.5 rounded-2xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-green-900/30"
            >
              <MapPin size={18} />
              Открыть на 2GIS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
