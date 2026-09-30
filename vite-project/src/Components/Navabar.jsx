import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Classes", path: "/classes" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: -12,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    scale: 0.97,
    y: -8,
    filter: "blur(6px)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const backdropVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  /* ============================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ============================================ */

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ============================================
     LOCK BODY SCROLL WHEN MENU IS OPEN
  ============================================ */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ============================================
     ESC KEY
  ============================================ */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* =================================================
          DESKTOP / MAIN NAVBAR
      ================================================== */}

      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed left-1/2 top-4 z-50
          w-[calc(100%-24px)]
          -translate-x-1/2
          sm:top-5
          sm:w-[92%]
          sm:max-w-6xl
        "
      >
        <div
          className="
            group relative
            flex items-center justify-between
            rounded-full
            border border-[#C9A45C]/25
            bg-[#050505]/80
            px-4 py-2.5
            backdrop-blur-2xl
            transition-all duration-500
            hover:border-[#C9A45C]/40
            hover:bg-[#050505]/90
            sm:px-5 sm:py-3
          "
        >
          {/* Navbar glow */}

          <div
            className="
              pointer-events-none
              absolute inset-0
              rounded-full
              opacity-0
              shadow-[0_0_40px_rgba(201,164,92,0.08)]
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            className="group/logo relative z-10 flex items-center gap-2.5"
          >
            <motion.div
              whileHover={{
                rotate: 90,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-full
                border border-[#C9A45C]/70
                bg-[#C9A45C]/5
                text-[#C9A45C]
                transition-all duration-500
                group-hover/logo:bg-[#C9A45C]/10
                group-hover/logo:shadow-[0_0_25px_rgba(201,164,92,0.15)]
                sm:h-10 sm:w-10
              "
            >
              <Sparkles size={16} />
            </motion.div>

            <div className="leading-none">
              <p className="font-serif text-lg text-white sm:text-xl">
                Vedas
              </p>

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-[#C9A45C]
                  sm:text-[8px]
                  sm:tracking-[0.35em]
                "
              >
                Yoga Studio
              </span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="relative z-10 hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  group/link relative
                  py-2
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  transition-colors
                  duration-300
                  lg:text-xs
                  ${
                    isActive
                      ? "text-[#E0C27A]"
                      : "text-white/55 hover:text-[#E0C27A]"
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {/* Active / hover line */}

                    <span
                      className={`
                        absolute
                        -bottom-0.5
                        left-0
                        h-px
                        bg-[#C9A45C]
                        transition-all duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover/link:w-full"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* BOOK BUTTON */}

            <Link
              to="/contact"
              className="
                group/book relative
                flex items-center gap-2
                overflow-hidden
                rounded-full
                bg-[#C9A45C]
                px-5 py-2.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-black
                transition-all duration-500
                hover:bg-[#E0C27A]
                hover:shadow-[0_8px_30px_rgba(201,164,92,0.18)]
              "
            >
              <span className="relative z-10">
                Book Class
              </span>

              <ArrowUpRight
                size={14}
                className="
                  relative z-10
                  transition-transform duration-300
                  group-hover/book:-translate-y-0.5
                  group-hover/book:translate-x-0.5
                "
              />

              {/* Hover sweep */}

              <span
                className="
                  absolute inset-0
                  translate-y-full
                  bg-white
                  transition-transform duration-500
                  group-hover/book:translate-y-0
                "
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="
              relative z-10
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-[#C9A45C]/35
              bg-[#C9A45C]/5
              text-[#C9A45C]
              transition-all duration-300
              hover:border-[#C9A45C]/70
              hover:bg-[#C9A45C]/10
              md:hidden
            "
          >
            <Menu size={19} />
          </motion.button>
        </div>
      </motion.nav>

      {/* =================================================
          MOBILE MENU
      ================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}

            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
              className="
                fixed inset-0 z-[90]
                bg-black/70
                backdrop-blur-md
                md:hidden
              "
            />

            {/* MOBILE PANEL */}

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="
                fixed
                left-3 right-3
                top-3 bottom-3
                z-[100]
                overflow-hidden
                rounded-[30px]
                border border-[#C9A45C]/30
                bg-[#080909]
                shadow-[0_30px_100px_rgba(0,0,0,0.7)]
                md:hidden
              "
            >
              {/* =================================================
                  PANEL BACKGROUND EFFECTS
              ================================================== */}

              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Green glow */}

                <motion.div
                  animate={{
                    x: [0, 40, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -left-32
                    -top-32
                    h-72
                    w-72
                    rounded-full
                    bg-[#0D3B2E]/30
                    blur-[90px]
                  "
                />

                {/* Gold glow */}

                <motion.div
                  animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -right-32
                    top-[35%]
                    h-64
                    w-64
                    rounded-full
                    bg-[#C9A45C]/[0.07]
                    blur-[90px]
                  "
                />

                {/* Decorative circle */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    -bottom-28
                    -right-28
                    h-64
                    w-64
                    rounded-full
                    border
                    border-dashed
                    border-[#C9A45C]/10
                  "
                />
              </div>

              {/* =================================================
                  PANEL HEADER
              ================================================== */}

              <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8 sm:py-6">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-[#C9A45C]/50
                      bg-[#C9A45C]/5
                    "
                  >
                    <Sparkles
                      size={15}
                      className="text-[#C9A45C]"
                    />
                  </div>

                  <div className="leading-none">
                    <p className="font-serif text-xl">
                      Vedas
                    </p>

                    <p
                      className="
                        mt-1
                        text-[7px]
                        uppercase
                        tracking-[0.35em]
                        text-[#C9A45C]
                      "
                    >
                      Yoga Studio
                    </p>
                  </div>
                </Link>

                {/* CLOSE */}

                <motion.button
                  whileHover={{
                    rotate: 90,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-[#C9A45C]/35
                    bg-[#C9A45C]/5
                    text-[#C9A45C]
                    transition-colors duration-300
                    hover:bg-[#C9A45C]/10
                  "
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* =================================================
                  MENU ITEMS
              ================================================== */}

              <div
                className="
                  relative
                  flex h-[calc(100%-82px)]
                  flex-col
                  overflow-y-auto
                  px-6
                  pb-28
                  pt-10
                  sm:px-8
                  sm:pt-12
                "
              >
                <div className="flex flex-col">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: -25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.15 + index * 0.09,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `
                          group/mobile relative
                          flex items-center
                          justify-between
                          border-b
                          py-5
                          sm:py-6
                          ${
                            isActive
                              ? "border-[#C9A45C]/30"
                              : "border-white/10"
                          }
                        `
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className="flex items-center gap-4">
                              {/* Number */}

                              <span
                                className={`
                                  text-[9px]
                                  tracking-[0.2em]
                                  transition-colors duration-300
                                  ${
                                    isActive
                                      ? "text-[#C9A45C]"
                                      : "text-white/20"
                                  }
                                `}
                              >
                                0{index + 1}
                              </span>

                              {/* Name */}

                              <span
                                className={`
                                  font-serif
                                  text-4xl
                                  leading-none
                                  transition-all duration-300
                                  sm:text-5xl
                                  ${
                                    isActive
                                      ? "italic text-[#C9A45C]"
                                      : "text-white group-hover/mobile:text-[#C9A45C]"
                                  }
                                `}
                              >
                                {item.name}
                              </span>
                            </div>

                            {/* Arrow */}

                            <motion.span
                              animate={{
                                x: isActive ? 0 : -5,
                                opacity: isActive ? 1 : 0.25,
                              }}
                              whileHover={{
                                x: 0,
                                opacity: 1,
                              }}
                              className={`
                                flex h-9 w-9
                                items-center justify-center
                                rounded-full
                                border
                                ${
                                  isActive
                                    ? "border-[#C9A45C]/40 text-[#C9A45C]"
                                    : "border-white/10 text-white/30"
                                }
                              `}
                            >
                              <ArrowUpRight size={15} />
                            </motion.span>

                            {/* Active gold line */}

                            <span
                              className={`
                                absolute
                                bottom-[-1px]
                                left-0
                                h-px
                                bg-[#C9A45C]
                                transition-all duration-500
                                ${
                                  isActive
                                    ? "w-16"
                                    : "w-0 group-hover/mobile:w-10"
                                }
                              `}
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* =================================================
                    MOBILE CTA
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.65,
                    duration: 0.6,
                  }}
                  className="
                    mt-auto
                    pt-8
                  "
                >
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="
                      group/cta
                      relative
                      flex w-full
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      rounded-full
                      bg-[#C9A45C]
                      py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-black
                      transition-all duration-500
                      hover:bg-[#E0C27A]
                    "
                  >
                    <span className="relative z-10">
                      Book Your Class
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="
                        relative z-10
                        transition-transform duration-300
                        group-hover/cta:-translate-y-1
                        group-hover/cta:translate-x-1
                      "
                    />

                    <span
                      className="
                        absolute inset-0
                        translate-y-full
                        bg-white
                        transition-transform duration-500
                        group-hover/cta:translate-y-0
                      "
                    />
                  </Link>

                  <p className="mt-4 text-center text-[8px] uppercase tracking-[0.3em] text-white/20">
                    Find your balance · Live with intention
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}