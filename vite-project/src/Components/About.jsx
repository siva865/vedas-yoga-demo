import { motion } from "framer-motion";
import {
  Heart,
  Wind,
  Sparkles,
  ArrowUpRight,
  Leaf,
} from "lucide-react";

const studioImage =
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=90"

const values = [
  {
    icon: Heart,
    title: "Mindful Living",
    text: "Create more awareness in the way you move and live.",
  },
  {
    icon: Wind,
    title: "Conscious Breath",
    text: "Use the breath as a bridge between body and mind.",
  },
  {
    icon: Sparkles,
    title: "Inner Growth",
    text: "Build a deeper connection with yourself through practice.",
  },
];

export default function About() {
  return (
    <main className="relative overflow-hidden bg-[#050505] pt-24 text-white">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#173c2b]/20 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-15%] top-[45%] h-[450px] w-[450px] rounded-full bg-[#C9A45C]/5 blur-[130px]" />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-3 text-[#C9A45C]">
            <Leaf size={15} />

            <p className="text-[10px] uppercase tracking-[0.4em]">
              About Vedas
            </p>
          </div>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] sm:text-7xl lg:text-[6.5rem]">
            A practice for the
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="italic text-[#C9A45C]"
            >
              whole self.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-[15px]"
          >
            A calm space where movement, breath and awareness come together
            to create a more meaningful yoga practice.
          </motion.p>
        </motion.div>

        {/* MAIN STORY */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-20">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-[#C9A45C]/10" />

            <div className="relative overflow-hidden rounded-[1.7rem]">
              <motion.img
                src={studioImage}
                alt="Vedas Yoga Studio"
                className="h-[420px] w-full object-cover sm:h-[480px]"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <div className="rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-md">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/75">
                    A space to breathe
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
              Our Philosophy
            </p>

            <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              Where movement meets
              <span className="italic text-[#C9A45C]"> awareness.</span>
            </h2>

            <div className="mt-7 max-w-xl space-y-5">
              <p className="text-sm leading-7 text-white/50">
                Vedas Yoga Studio is a space created for people who want to
                slow down, reconnect and create a more mindful relationship
                with themselves.
              </p>

              <p className="text-sm leading-7 text-white/50">
                Our approach combines traditional yoga practices with a
                modern, welcoming environment where every body and every
                level is respected.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[#C9A45C]">
              <span className="h-px w-10 bg-[#C9A45C]/40" />

              <span className="text-[9px] uppercase tracking-[0.3em]">
                Move with intention
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-white/5 bg-[#08100C]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
                What We Believe
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                The Vedas way.
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-6 text-white/35">
              A practice that goes beyond the mat and becomes part of how you
              experience everyday life.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-white/8 bg-white/[0.025] p-7 transition-all duration-500 hover:border-[#C9A45C]/25 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A45C]/20 bg-[#C9A45C]/5">
                      <Icon
                        size={19}
                        className="text-[#C9A45C]"
                      />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C9A45C]"
                    />
                  </div>

                  <h3 className="mt-8 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles
            className="mx-auto mb-5 text-[#C9A45C]"
            size={20}
          />

          <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
            Come as you are.
            <br />
            <span className="italic text-[#C9A45C]">
              Leave more connected.
            </span>
          </h2>
        </motion.div>
      </section>
    </main>
  );
}