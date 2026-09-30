import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoSparklesSharp } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
const location =
  "Mahindra Bank, Dombivli, Ramnagar, Dombivli East, Mumbai, Kalyan, Maharashtra 421201, India";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Mahindra+Bank%2C+Dombivli%2C+Ramnagar%2C+Dombivli+East%2C+Mumbai%2C+Kalyan%2C+Maharashtra+421201%2C+India";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-28 pt-32 text-white sm:pt-40">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Green glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#0D3B2E]/20 blur-[150px]"
        />

        {/* Gold glow */}
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-15%] top-[25%] h-[450px] w-[450px] rounded-full bg-[#C9A45C]/10 blur-[150px]"
        />

        {/* Bottom green */}
        <div className="absolute bottom-[-15%] left-[35%] h-[450px] w-[450px] rounded-full bg-[#0D3B2E]/10 blur-[150px]" />

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative mx-auto max-w-7xl">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.55fr]">
          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/5">
                <IoSparklesSharp
                  size={13}
                  className="text-[#C9A45C]"
                />
              </span>

              <p className="text-[10px] uppercase tracking-[0.45em] text-[#C9A45C]">
                Contact Vedas
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-5xl font-serif text-5xl leading-[0.92] sm:text-7xl lg:text-[92px]"
            >
              Your journey
              <br />
              <span className="italic text-[#C9A45C]">
                begins here.
              </span>
            </motion.h1>
          </motion.div>

          {/* RIGHT INTRO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
            }}
            className="max-w-md lg:ml-auto"
          >
            <p className="text-sm leading-8 text-white/45 sm:text-base">
              Whether you are completely new to yoga or looking
              to deepen an existing practice, we would love to
              welcome you into the Vedas space.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-14 bg-[#C9A45C]/50" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Come as you are
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="relative mx-auto mt-20 max-w-7xl sm:mt-28">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr]">
          {/* =================================================
              FORM
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="
              group relative overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-[#090B0A]
              p-7
              sm:p-10
              lg:p-12
            "
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C9A45C]/[0.07] blur-[90px] transition-all duration-700 group-hover:bg-[#C9A45C]/[0.12]" />

            {/* Decorative circle */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute right-8 top-8 hidden h-24 w-24 rounded-full border border-dashed border-[#C9A45C]/20 sm:block"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
                    Start your practice
                  </p>

                  <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                    Book a Class
                  </h2>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black sm:flex">
                  < FaArrowDown 
                    size={17}
                    className="text-[#C9A45C]"
                  />
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                Tell us a little about yourself and we'll get back
                to you with the right practice for your journey.
              </p>

              {/* FORM */}
              <form className="mt-9 space-y-4">
                {/* Name */}
                <div className="group/input relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      peer w-full rounded-2xl
                      border border-white/10
                      bg-black/50
                      px-5 py-4
                      text-sm text-white
                      placeholder:text-white/25
                      outline-none
                      transition-all duration-300
                      focus:border-[#C9A45C]/60
                      focus:bg-black
                      focus:ring-1
                      focus:ring-[#C9A45C]/20
                    "
                  />

                  <span className="pointer-events-none absolute bottom-0 left-5 h-px w-0 bg-[#C9A45C] transition-all duration-500 peer-focus:w-[calc(100%-40px)]" />
                </div>

                {/* Email + Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group/input relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="
                        peer w-full rounded-2xl
                        border border-white/10
                        bg-black/50
                        px-5 py-4
                        text-sm text-white
                        placeholder:text-white/25
                        outline-none
                        transition-all duration-300
                        focus:border-[#C9A45C]/60
                        focus:bg-black
                        focus:ring-1
                        focus:ring-[#C9A45C]/20
                      "
                    />

                    <span className="pointer-events-none absolute bottom-0 left-5 h-px w-0 bg-[#C9A45C] transition-all duration-500 peer-focus:w-[calc(100%-40px)]" />
                  </div>

                  <div className="group/input relative">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="
                        peer w-full rounded-2xl
                        border border-white/10
                        bg-black/50
                        px-5 py-4
                        text-sm text-white
                        placeholder:text-white/25
                        outline-none
                        transition-all duration-300
                        focus:border-[#C9A45C]/60
                        focus:bg-black
                        focus:ring-1
                        focus:ring-[#C9A45C]/20
                      "
                    />

                    <span className="pointer-events-none absolute bottom-0 left-5 h-px w-0 bg-[#C9A45C] transition-all duration-500 peer-focus:w-[calc(100%-40px)]" />
                  </div>
                </div>

                {/* Select */}
                <div className="relative">
                  <select
                    defaultValue=""
                    className="
                      w-full appearance-none rounded-2xl
                      border border-white/10
                      bg-black/50
                      px-5 py-4
                      text-sm text-white/50
                      outline-none
                      transition-all duration-300
                      focus:border-[#C9A45C]/60
                      focus:bg-black
                      focus:ring-1
                      focus:ring-[#C9A45C]/20
                    "
                  >
                    <option value="" disabled>
                      Select a Class
                    </option>

                    <option className="bg-[#050505]">
                      Hatha Yoga
                    </option>

                    <option className="bg-[#050505]">
                      Vinyasa Flow
                    </option>

                    <option className="bg-[#050505]">
                      Meditation
                    </option>

                    <option className="bg-[#050505]">
                      Pranayama
                    </option>
                  </select>

                  <FiArrowUpRight
                    size={16}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#C9A45C]"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="
                      peer w-full resize-none rounded-2xl
                      border border-white/10
                      bg-black/50
                      px-5 py-4
                      text-sm text-white
                      placeholder:text-white/25
                      outline-none
                      transition-all duration-300
                      focus:border-[#C9A45C]/60
                      focus:bg-black
                      focus:ring-1
                      focus:ring-[#C9A45C]/20
                    "
                  />

                  <span className="pointer-events-none absolute bottom-0 left-5 h-px w-0 bg-[#C9A45C] transition-all duration-500 peer-focus:w-[calc(100%-40px)]" />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="
                    group/button relative flex w-full
                    items-center justify-center gap-3
                    overflow-hidden rounded-full
                    bg-[#C9A45C]
                    py-4
                    text-xs font-semibold
                    uppercase tracking-[0.2em]
                    text-black
                    transition-all duration-500
                    hover:bg-[#E0C27A]
                  "
                >
                  <span className="relative z-10">
                    Send Enquiry
                  </span>


                  < FiArrowUpRight
                    size={16}
                    className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                  />

                  <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover/button:translate-y-0" />
                </motion.button>
              </form>

              <p className="mt-5 text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
                We usually respond within 24 hours
              </p>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="space-y-5">
            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                group relative overflow-hidden
                rounded-[32px]
                border border-[#C9A45C]/20
                bg-[#090B0A]
                p-7 sm:p-10
              "
            >
              {/* Animated glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C9A45C]/10 blur-[80px]"
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/5">
                    < FaMapPin 
                      size={20}
                      className="text-[#C9A45C]"
                    />
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                    Studio
                  </span>
                </div>

                <h2 className="mt-7 font-serif text-4xl sm:text-5xl">
                  Visit Our
                  <br />
                  <span className="italic text-[#C9A45C]">
                    Studio.
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-white/45">
                  {location}
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group/map mt-7 inline-flex
                    items-center gap-3
                    rounded-full
                    border border-[#C9A45C]/30
                    px-6 py-3
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#C9A45C]
                    transition-all duration-300
                    hover:border-[#C9A45C]
                    hover:bg-[#C9A45C]/10
                  "
                >
                  Open Google Maps

                  <FiArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/map:translate-x-1 group-hover/map:-translate-y-1"
                  />
                </a>
              </div>
            </motion.div>

            {/* INFO CARDS */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* PHONE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-[#090B0A]
                  p-7
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#C9A45C]/30
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black transition-all duration-500 group-hover:border-[#C9A45C]/30">
                  <CiPhone 
                    size={17}
                    className="text-[#C9A45C]"
                  />
                </div>

                <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-white/30">
                  Phone
                </p>

                <p className="mt-3 text-sm text-white/70">
                  +91 XXXXX XXXXX
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A45C] transition-all duration-500 group-hover:w-full" />
              </motion.div>

              {/* EMAIL */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-[#090B0A]
                  p-7
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#C9A45C]/30
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black transition-all duration-500 group-hover:border-[#C9A45C]/30">
                  <IoMdMail
                    size={17}
                    className="text-[#C9A45C]"
                  />
                </div>

                <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-white/30">
                  Email
                </p>

                <p className="mt-3 break-all text-sm text-white/70">
                  hello@vedasyoga.com
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A45C] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </div>

            {/* HOURS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                group rounded-[28px]
                border border-white/10
                bg-[#090B0A]
                p-7
                transition-all duration-500
                hover:border-[#C9A45C]/20
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black">
                  <FaClock 
                    size={17}
                    className="text-[#C9A45C]"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                    Studio Hours
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    Mon — Sat &nbsp; 6:00 AM — 9:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                flex items-center justify-between
                rounded-[28px]
                border border-white/10
                bg-[#090B0A]
                p-6
              "
            >
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                  Follow our journey
                </p>

                <p className="mt-2 font-serif text-xl">
                  @vedasyoga
                </p>
              </div>

              <a
                href="#"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-white/10
                  transition-all duration-300
                  hover:border-[#C9A45C]
                  hover:bg-[#C9A45C]
                  hover:text-black
                "
              >
                <FaInstagram size={17} />
              </a>
            </motion.div>

            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                group relative overflow-hidden
                rounded-[32px]
                border border-white/10
              "
            >
              <iframe
                title="Vedas Yoga Studio Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  location
                )}&output=embed`}
                className="
                  h-[330px]
                  w-full
                  border-0
                  grayscale
                  opacity-60
                  transition-all duration-700
                  group-hover:grayscale-0
                  group-hover:opacity-80
                "
                loading="lazy"
              />

              {/* Map overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />

              <div className="pointer-events-none absolute bottom-5 left-5">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md">
                  <FaMapPin
                    size={12}
                    className="text-[#C9A45C]"
                  />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                    Find Vedas
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM STATEMENT
      ====================================================== */}

      <section className="relative mx-auto mt-28 max-w-7xl border-t border-white/10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid items-end gap-10 md:grid-cols-2"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#C9A45C]">
              One breath at a time
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
              Make space for
              <br />
              <span className="italic text-[#C9A45C]">
                yourself.
              </span>
            </h2>
          </div>

          <div className="md:ml-auto md:max-w-sm">
            <p className="text-sm leading-7 text-white/40">
              A conversation can be the first step toward a
              practice that changes how you move, breathe and
              experience your everyday life.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <div className="h-px w-12 bg-[#C9A45C]/50" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Vedas Yoga Studio
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}