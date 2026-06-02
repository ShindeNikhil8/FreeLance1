import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import FadeInSection from "../common/FadeInSection";

const highlights = [
  "Advanced manufacturing capabilities",
  "Custom-engineered industrial solutions",
  "Strict quality control and testing",
  "Reliable delivery with customer-first execution",
];

export default function AboutPreview() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <FadeInSection>
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="About Company"
              title="Built on engineering strength, driven by industrial reliability"
              description="We combine technical expertise, manufacturing precision, and a solution-oriented approach to serve modern industries with confidence and consistency."
              align="left"
            />

            <p className="mb-8 text-base leading-8 text-slate-600">
              Our company is focused on delivering robust industrial products and
              engineered systems that meet demanding operational requirements. From
              design to execution, every stage is guided by performance, safety,
              and long-term value.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 text-orange-500" size={20} />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              More About Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial facility"
                loading="lazy"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-4 rounded-2xl bg-white p-6 shadow-xl sm:left-[-20px]">
              <h3 className="text-3xl font-bold text-orange-500">98%</h3>
              <p className="mt-2 text-sm text-slate-600">
                On-time project execution with strong quality commitment
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}