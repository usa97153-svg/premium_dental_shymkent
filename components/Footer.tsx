import { Phone, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F1E] text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">PD</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm">Premium Dental 24/7</div>
                <div className="text-primary text-xs">Шымкент, Казахстан</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Профессиональная стоматология для всей семьи. Работаем круглосуточно без выходных.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-white font-semibold mb-3 text-sm">Услуги</div>
            <ul className="space-y-2 text-sm">
              {["Имплантация зубов", "Ортодонтия", "Детская стоматология", "Отбеливание", "Протезирование"].map(
                (s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="text-white font-semibold mb-3 text-sm">Контакты</div>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+77753500304"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} /> +7-775-350-03-04
              </a>
              <a
                href="https://wa.me/77753500304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href="https://instagram.com/premium_dental.shym"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram size={14} /> @premium_dental.shym
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <span>© 2024 Premium Dental 24/7. Все права защищены.</span>
          <span className="text-gray-500">Лицензия МЗ РК № KZ16226370463</span>
        </div>
      </div>
    </footer>
  );
}
