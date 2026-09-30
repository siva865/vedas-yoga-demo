import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const classes = [
  {
    number: "01",
    title: "Hatha Yoga",
    subtitle: "Strength & Stillness",
    text: "Build strength, flexibility and awareness through intentional postures and controlled breathing.",
    image:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    number: "02",
    title: "Vinyasa Flow",
    subtitle: "Movement & Breath",
    text: "A flowing practice connecting breath with movement to create energy and balance.",
    image:
        "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    number: "03",
    title: "Meditation",
    subtitle: "Stillness & Clarity",
    text: "Create space within through guided meditation, awareness and conscious presence.",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "04",
    title: "Pranayama",
    subtitle: "Breath & Energy",
    text: "Explore traditional breathing techniques designed to calm the mind and energise the body.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function Classes() {
  return (
    <main className="relative overflow-hidden bg-[#050505] px-6 pb-28 pt-32 text-white">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#173c2b]/20 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-15%] top-[55%] h-[400px] w-[400px] rounded-full bg-[#C9A45C]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 text-[#C9A45C]">
            <Sparkles size={15} />

            <p className="text-[10px] uppercase tracking-[0.4em]">
              Our Classes
            </p>
          </div>

          <h1 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-7xl lg:text-[6.5rem]">
            Practice with
            <br />

            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="italic text-[#C9A45C]"
            >
              intention.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-[15px]"
          >
            Explore practices designed to strengthen the body, calm the mind
            and create a deeper connection with yourself.
          </motion.p>
        </motion.div>

        {/* CLASSES */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {classes.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="group overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#0A0A0A] transition-colors duration-500 hover:border-[#C9A45C]/20"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-[300px] w-full object-cover sm:h-[340px]"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />

                {/* image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />

                {/* NUMBER */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A45C]/30 bg-black/50 backdrop-blur-md">
                  <span className="text-[10px] tracking-widest text-[#C9A45C]">
                    {item.number}
                  </span>
                </div>

                {/* TOP RIGHT */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight
                    size={16}
                    className="text-white"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
                  {item.subtitle}
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <h2 className="font-serif text-3xl sm:text-4xl">
                    {item.title}
                  </h2>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/40">
                  {item.text}
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="group/link inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C9A45C]"
                  >
                    Join Class

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/8 pt-12 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
            Your practice · Your pace · Your journey
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
            Find the practice that feels
            <span className="italic text-[#C9A45C]"> right for you.</span>
          </h2>
        </motion.div>
      </div>
    </main>
  );
}