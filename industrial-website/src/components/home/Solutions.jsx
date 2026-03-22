import { Cog, Factory, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import FadeInSection from "../common/FadeInSection";
import StaggerGrid from "../common/StaggerGrid";
import StaggerItem from "../common/StaggerItem";

const solutions = [
  {
    icon: <Cog size={28} />,
    title: "Precision Components",
    description:
      "High-performance engineered components built for demanding industrial applications.",
  },
  {
    icon: <Factory size={28} />,
    title: "Manufacturing Systems",
    description:
      "Integrated production solutions focused on efficiency, quality, and repeatability.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Custom Fabrication",
    description:
      "Tailor-made fabrication and assembly services aligned with client requirements.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive inspection and validation processes to ensure dependable performance.",
  },
];

export default function Solutions() {
  return (
    <section className="border-t border-slate-200/70 bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
  {solutions.map((item) => (
    <StaggerItem key={item.title} className="h-full">
      <div className="group h-full flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl">
        
        <div>
          <div className="mb-5 inline-flex rounded-2xl bg-orange-100 p-4 text-orange-500 transition group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
            {item.icon}
          </div>

          <h3 className="mb-3 text-xl font-semibold text-slate-900">
            {item.title}
          </h3>

          <p className="mb-6 text-sm leading-7 text-slate-600">
            {item.description}
          </p>
        </div>

      </div>
    </StaggerItem>
  ))}
</StaggerGrid>
      </div>
    </section>
  );
}