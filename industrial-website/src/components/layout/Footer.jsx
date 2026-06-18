import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import logo from "../../assets/images/img2.png";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-orange-500 shadow-md">
              <img
                src={logo}
                alt="Company Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">A One Industries</h2>
              <p className="text-sm text-slate-400">A company of quality</p>
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
              <Link to="/solutions" className="transition hover:text-orange-400">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/infrastructure" className="transition hover:text-orange-400">
                Facilities
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
              <span> MIDC, Ahilyanagar, Maharashtra, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              <span>+91 84839 28292</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              <span>aonenagar11@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-5 text-sm text-slate-500 lg:flex-row lg:px-8">
          <p>© 2026 A One Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}