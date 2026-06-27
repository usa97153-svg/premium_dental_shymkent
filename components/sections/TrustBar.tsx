"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, Star, Clock, CreditCard } from "lucide-react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  {
    icon: Users,
    value: 170,
    suffix: "+",
    label: "довольных пациентов",
    color: "text-primary",
    bg: "bg-blue-50",
  },
  {
    icon: Star,
    value: 5,
    suffix: ".0 ⭐",
    label: "средний рейтинг",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "без выходных и праздников",
    color: "text-mint",
    bg: "bg-green-50",
  },
  {
    icon: CreditCard,
    value: 75,
    suffix: "+",
    label: "отзывов на 2GIS",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white border-y border-blue-50 py-12" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-3`}>
                  <Icon size={22} className={stat.color} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} leading-none mb-1`}>
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 leading-tight">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* ЕНПФ badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {["Принимаем ЕНПФ", "Лицензия Минздрава РК", "Официальная клиника", "Лицензия KZ16226370463"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-blue-50 text-primary border border-blue-200 rounded-full px-3 py-1"
              >
                ✓ {tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
