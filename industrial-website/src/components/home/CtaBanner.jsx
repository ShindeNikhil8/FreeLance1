import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInSection from "../common/FadeInSection";

export default function CtaBanner() {
  return (
    <section className="bg-slate-950 px-6 py-20 lg:px-8">
      <FadeInSection>
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-14 text-white shadow-2xl lg:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
                Let’s Build Together
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Looking for a reliable partner for your industrial project?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-orange-50">
                Connect with us to discuss your requirements, explore tailored
                solutions, and move forward with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-slate-100"
              >
                Contact Us <ArrowRight size={18} />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
    </section>
  );
}