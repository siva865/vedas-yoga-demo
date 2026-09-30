import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="font-serif text-4xl">
              Vedas
            </Link>

            <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#C9A45C]">
              Yoga Studio
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/40">
              A mindful space for movement, breath and inner awareness.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-widest text-[#C9A45C]">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-white/50">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-widest text-[#C9A45C]">
              Connect
            </p>

            <div className="flex gap-3">
              {[ FaInstagramSquare,  FaFacebookSquare, FaYoutube ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#C9A45C] hover:text-[#C9A45C]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A45C]"
            >
              Begin Your Journey
              <FiArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-widest text-white/25 sm:flex-row">
          <p>© 2026 Vedas Yoga Studio</p>
          <p>Mind · Body · Soul</p>
        </div>
      </div>
    </footer>
  );
}