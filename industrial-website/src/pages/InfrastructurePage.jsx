import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import { Factory, Wrench, ScanSearch, Settings2 } from "lucide-react";

const capabilities = [
  {
    icon: <Factory size={24} />,
    title: "Production Facilities",
    description:
      "Modern infrastructure designed to support reliable manufacturing and consistent industrial output.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Fabrication & Assembly",
    description:
      "Strong fabrication and assembly capabilities aligned with industrial-grade project requirements.",
  },
  {
    icon: <ScanSearch size={24} />,
    title: "Inspection & Testing",
    description:
      "Comprehensive quality checks and testing support to ensure confidence in final delivery.",
  },
  {
    icon: <Settings2 size={24} />,
    title: "Process Discipline",
    description:
      "Organized workflows and execution practices that improve precision, repeatability, and efficiency.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-slate-950 px-6 pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
              Infrastructure
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
              Modern facilities built for quality manufacturing and industrial execution
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Our infrastructure supports efficient operations, quality control,
              and scalable industrial performance across project requirements.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial infrastructure"
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div>
              <SectionTitle
                eyebrow="Our Capabilities"
                title="Infrastructure that supports performance, consistency, and growth"
                description="We invest in facilities and process-driven operations to ensure that our output matches industrial expectations."
                align="left"
              />

              <p className="text-base leading-8 text-slate-600">
                Our setup is designed to support end-to-end execution with a focus
                on reliability, quality, and timely project completion. From
                fabrication to testing, each stage is aligned with disciplined
                industrial practices.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item) => (
                <Card key={item.title}>
                  <div className="mb-5 inline-flex rounded-2xl bg-orange-100 p-4 text-orange-500">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}