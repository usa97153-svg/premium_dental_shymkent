"use client";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Услуги", href: "#services" },
    { label: "Почему мы", href: "#why-us" },
    { label: "Цены", href: "#pricing" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">PD</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-navy text-sm leading-tight">Premium Dental</div>
              <div className="text-primary text-xs font-medium">24/7 · Шымкент</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+77753500304"
              className="hidden sm:flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-blue-700 transition-colors"
            >
              <Phone size={15} />
              +7-775-350-03-04
            </a>
            <a
              href="https://wa.me/77753500304"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mint text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-emerald-500 transition-colors"
            >
              Записаться
            </a>
            <button
              className="md:hidden p-2 text-navy"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-t border-blue-50 px-4 pb-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-gray-700 font-medium border-b border-gray-100 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+77753500304"
            className="flex items-center gap-2 mt-3 text-primary font-semibold"
          >
            <Phone size={16} /> +7-775-350-03-04
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
