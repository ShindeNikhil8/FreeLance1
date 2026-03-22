import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-md">
              EI
            </div>
            <div>
              <h2 className="text-lg font-bold">Elite Industrial</h2>
              <p className="text-sm text-slate-400">Engineering Excellence</p>
            </div>
          </div>

          <p className="text-sm leading-7 text-slate-400">
            Delivering reliable industrial solutions with precision
            engineering, modern infrastructure, and customer-focused execution.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link to="/" className="transition hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-orange-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="transition hover:text-orange-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/industries" className="transition hover:text-orange-400">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-orange-500" />
              <span>Pune, Maharashtra, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              <span>info@eliteindustrial.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
          <p className="mb-4 text-sm leading-7 text-slate-400">
            Stay updated with our latest products, solutions, and industry
            developments.
          </p>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-orange-500"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-slate-500 lg:flex-row lg:px-8">
          <p>© 2026 Elite Industrial. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/" className="transition hover:text-orange-400">
              Privacy Policy
            </a>
            <a href="/" className="transition hover:text-orange-400">
              Terms & Conditions
            </a>
            <a href="/" className="transition hover:text-orange-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}