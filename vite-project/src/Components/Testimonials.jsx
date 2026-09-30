import { motion } from "framer-motion";
import { Quote, Star, Sparkles, ArrowUpRight } from "lucide-react";

const topReviews = [
  {
    name: "Ananya Mehta",
    role: "Member",
    text: "The practice gave me something I didn't know I was missing — a little more space within myself.",
  },
  {
    name: "Rohan Sharma",
    role: "Member",
    text: "The sessions have completely changed the way I approach my mornings and my daily routine.",
  },
  {
    name: "Priya Nair",
    role: "Member",
    text: "A beautiful space, thoughtful teachers and a practice that feels genuinely personal.",
  },
  {
    name: "Meera Kapoor",
    role: "Member",
    text: "Every class leaves me feeling lighter, calmer and more connected to myself.",
  },
  {
    name: "Arjun Malhotra",
    role: "Member",
    text: "Vedas has become a quiet part of my week that I genuinely look forward to.",
  },
  {
    name: "Ishita Rao",
    role: "Member",
    text: "The atmosphere is peaceful and the teaching feels intentional without ever feeling intimidating.",
  },
];

const bottomReviews = [
  {
    name: "Kavya Menon",
    role: "Member",
    text: "I came for the physical practice and stayed for the sense of calm I found along the way.",
  },
  {
    name: "Aditya Verma",
    role: "Member",
    text: "The teachers make every session feel personal. It is easily one of the best parts of my week.",
  },
  {
    name: "Nisha Patel",
    role: "Member",
    text: "There is something beautifully grounding about practicing here. I leave every class feeling renewed.",
  },
  {
    name: "Vikram Singh",
    role: "Member",
    text: "From the space to the teaching, everything feels thoughtfully designed around the practice.",
  },
  {
    name: "Sara Thomas",
    role: "Member",
    text: "Yoga here has become more than exercise for me. It has become a way to slow down and listen.",
  },
  {
    name: "Rahul Mehta",
    role: "Member",
    text: "The sessions have helped me build a practice that feels sustainable, peaceful and genuinely enjoyable.",
  },
];

function ReviewCard({ review }) {
  return (
    <div
      className="
        group relative w-[320px] shrink-0 overflow-hidden
        rounded-[28px] border border-white/10
        bg-[#0A0D0B] p-7
        transition-all duration-500
        hover:-translate-y-2
        hover:border-[#C9A45C]/40
        hover:bg-[#0D120F]
        sm:w-[390px]
      "
    >
      {/* Top Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C9A45C]/10 blur-3xl transition-all duration-500 group-hover:bg-[#C9A45C]/20" />

      {/* Number */}
      <div className="absolute right-6 top-6">
        <span className="font-serif text-sm text-white/20">01</span>
      </div>

      {/* Quote */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/5">
        <Quote size={18} className="text-[#C9A45C]" />
      </div>

      {/* Stars */}
      <div className="mt-7 flex gap-1 text-[#C9A45C]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={13}
            fill="currentColor"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-6 min-h-[120px] font-serif text-[19px] leading-8 text-white/85">
        “{review.text}”
      </p>

      {/* Divider */}
      <div className="my-7 h-px w-full bg-white/10" />

      {/* Person */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-serif text-xl text-white">{review.name}</p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#C9A45C]">
            {review.role}
          </p>
        </div>

        <ArrowUpRight
          size={19}
          className="
            text-white/20 transition-all duration-500
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-[#C9A45C]
          "
        />
      </div>

      {/* Bottom Gold Line */}
      <div
        className="
          absolute bottom-0 left-0 h-[2px] w-0
          bg-[#C9A45C]
          transition-all duration-500
          group-hover:w-full
        "
      />
    </div>
  );
}

function ReviewRow({ reviews, direction = "left" }) {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div
      className="review-marquee group relative overflow-hidden"
      style={{
        "--direction": direction === "left" ? "normal" : "reverse",
      }}
    >
      {/* Side Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#050505] to-transparent sm:w-32" />

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#050505] to-transparent sm:w-32" />

      {/* Moving Track */}
      <div
        className="
          flex w-max gap-5
          animate-review-marquee
          group-hover:[animation-play-state:paused]
        "
      >
        {duplicatedReviews.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${index}`}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[8%] h-[450px] w-[450px] rounded-full bg-[#0D3B2E]/20 blur-[140px]" />

        <div className="absolute right-[-10%] top-[35%] h-[500px] w-[500px] rounded-full bg-[#C9A45C]/[0.06] blur-[150px]" />

        <div className="absolute bottom-[10%] left-[30%] h-[350px] w-[350px] rounded-full bg-[#0D3B2E]/15 blur-[130px]" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-6 pb-24 pt-36 sm:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <Sparkles
                  size={15}
                  className="text-[#C9A45C]"
                />

                <p className="text-[10px] uppercase tracking-[0.45em] text-[#C9A45C]">
                  Member Stories
                </p>
              </div>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] sm:text-7xl lg:text-[92px]">
                Words from the
                <br />
                <span className="italic text-[#C9A45C]">
                  journey.
                </span>
              </h1>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md lg:ml-auto"
            >
              <p className="text-sm leading-7 text-white/50 sm:text-base">
                Every practice is personal. Every journey unfolds
                differently. Here are a few words from the people
                who have made Vedas part of their everyday lives.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex gap-1 text-[#C9A45C]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <span className="h-4 w-px bg-white/20" />

                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  4.9 / 5 Experience
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REVIEWS
      ====================================================== */}

      <section className="relative pb-28">
        {/* Top Row — LEFT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <ReviewRow reviews={topReviews} direction="left" />
        </motion.div>

        {/* Gap */}
        <div className="h-6 sm:h-8" />

        {/* Bottom Row — RIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <ReviewRow reviews={bottomReviews} direction="right" />
        </motion.div>
      </section>

      {/* =====================================================
          EXPERIENCE STATS
      ====================================================== */}

      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-white/10 bg-[#080A09] px-7 py-12 sm:px-12 lg:px-16">
            <div className="grid gap-12 md:grid-cols-3 md:gap-0">
              {/* Rating */}
              <div className="text-center md:border-r md:border-white/10">
                <div className="font-serif text-6xl text-[#C9A45C]">
                  4.9
                </div>

                <div className="mt-4 flex justify-center gap-1 text-[#C9A45C]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/35">
                  Member Experience
                </p>
              </div>

              {/* Members */}
              <div className="text-center md:border-r md:border-white/10">
                <div className="font-serif text-6xl">
                  500<span className="text-[#C9A45C]">+</span>
                </div>

                <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-white/35">
                  Members & Students
                </p>
              </div>

              {/* Classes */}
              <div className="text-center">
                <div className="font-serif text-6xl">
                  12<span className="text-[#C9A45C]">+</span>
                </div>

                <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-white/35">
                  Weekly Practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL STATEMENT
      ====================================================== */}

      <section className="relative border-t border-white/10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#C9A45C]">
              Your journey starts here
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">
              Begin your own
              <br />
              <span className="italic text-[#C9A45C]">
                journey with Vedas.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/45">
              A little time for yourself can change the way you
              move through everything else.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MARQUEE CSS
      ====================================================== */}

      <style>{`
        @keyframes reviewMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        .animate-review-marquee {
          animation: reviewMarquee 45s linear infinite;
          animation-direction: var(--direction);
          will-change: transform;
        }

        @media (max-width: 640px) {
          .animate-review-marquee {
            animation-duration: 38s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-review-marquee {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}