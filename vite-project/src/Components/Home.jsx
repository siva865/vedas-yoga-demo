import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Wind,
  Heart,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1800&q=90";

const classes = [
  {
    title: "Hatha Yoga",
    subtitle: "Strength & Stillness",
    image:
      "https://images.unsplash.com/photo-1593164842264-854604db2260?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Vinyasa Flow",
    subtitle: "Movement & Breath",
    image:
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Meditation",
    subtitle: "Stillness & Clarity",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=90",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={heroImage}
          className="absolute inset-0 h-full w-full object-cover"
          alt="Yoga"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="flex max-w-5xl flex-col"
          >
            <div className="mb-5 flex items-center gap-3 text-[#C9A45C]">
              <Sparkles size={15} />

              <span className="text-[10px] uppercase tracking-[0.4em]">
                Vedas Yoga Studio
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[0.92] sm:text-7xl lg:text-[7rem]">
              Find Your
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="italic text-[#C9A45C]"
              >
                Inner Balance.
              </motion.span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60 sm:text-[15px]">
              A space to slow down, breathe deeply and reconnect with yourself
              through mindful movement and conscious living.
            </p>

            {/* BUTTONS RIGHT SIDE */}
            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <Link
                to="/classes"
                className="group flex items-center gap-2 rounded-full bg-[#C9A45C] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-[#e0bb70]"
              >
                Explore Classes
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/about"
                className="group flex items-center gap-2 rounded-full border border-white/25 bg-black/10 px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] backdrop-blur-sm transition-all duration-300 hover:border-[#C9A45C]/60 hover:bg-white/5"
              >
                Our Story
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute bottom-7 left-6 hidden lg:block"
          >
            <div className="flex gap-10 text-[10px] uppercase tracking-widest text-white/45">
              <span>
                <b className="text-lg text-[#C9A45C]">10+</b>
                <br />
                Years
              </span>

              <span>
                <b className="text-lg text-[#C9A45C]">500+</b>
                <br />
                Students
              </span>

              <span>
                <b className="text-lg text-[#C9A45C]">15+</b>
                <br />
                Programs
              </span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 right-7 hidden lg:block">
          <ArrowDown
            className="animate-bounce text-[#C9A45C]"
            size={19}
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
              The Vedas Way
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Yoga is more than
              <br />
              <span className="italic text-[#C9A45C]">movement.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-white/50"
          >
            At Vedas, we believe yoga creates a deeper connection between the
            body, breath and mind. Every session is designed to help you move
            with awareness, breathe with intention and live with greater
            presence.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            [Wind, "Breathe", "Return to your natural rhythm."],
            [Heart, "Move", "Create strength through awareness."],
            [Sun, "Awaken", "Bring presence into everyday life."],
          ].map(([Icon, title, text], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
              }}
              className="border-t border-[#C9A45C]/25 pt-6"
            >
              <Icon className="mb-4 text-[#C9A45C]" size={22} />

              <h3 className="font-serif text-2xl">{title}</h3>

              <p className="mt-2 text-sm text-white/40">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLASSES */}
      <section className="bg-[#0A0A0A] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
                Explore
              </p>

              <h2 className="mt-2 font-serif text-4xl sm:text-5xl">
                Our Practices
              </h2>
            </div>

            <Link
              to="/classes"
              className="hidden items-center gap-2 text-[10px] uppercase tracking-widest text-[#C9A45C] sm:flex"
            >
              View All
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {classes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.8,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-[390px] w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#C9A45C]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-1.5 font-serif text-3xl">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-5xl rounded-3xl border border-[#C9A45C]/20 bg-[#0A0A0A] px-6 py-16 text-center"
        >
          <Sparkles className="mx-auto mb-5 text-[#C9A45C]" size={20} />

          <h2 className="font-serif text-4xl sm:text-6xl">
            Come back to
            <br />
            <span className="italic text-[#C9A45C]">yourself.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/45">
            Your first step does not need to be perfect. It simply needs to
            begin.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full bg-[#C9A45C] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#e0bb70]"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </section>
    </div>
  );
}