import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";

const industries = [
  {
    title: "Automotive",
    description:
      "Precision-engineered solutions supporting modern automotive manufacturing, production systems, and component reliability.",
  },
  {
    title: "Oil & Gas",
    description:
      "Durable industrial products built for critical environments where safety, strength, and performance are essential.",
  },
  {
    title: "Power & Energy",
    description:
      "Reliable systems and support for conventional and advanced energy infrastructure requirements.",
  },
  {
    title: "Process Industries",
    description:
      "Industrial solutions tailored for production continuity, process efficiency, and dependable operations.",
  },
  {
    title: "Water & Utilities",
    description:
      "Engineered capabilities that support treatment systems, utility networks, and operational reliability.",
  },
  {
    title: "Heavy Engineering",
    description:
      "Strong manufacturing support for large-scale equipment, plant requirements, and industrial infrastructure.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-slate-950 px-6 pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:px-8">
  <div className="max-w-7xl">
    <p className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
      Industries We Serve
    </p>

    <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
      Supporting diverse industries with dependable engineering solutions
    </h1>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
      Our capabilities are aligned with the operational needs of modern
      industries that demand quality, precision, and consistent execution.
    </p>
  </div>
</section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Sector Expertise"
              title="Serving industrial sectors with focused technical understanding"
              description="We adapt our solutions to industry-specific performance needs, operating conditions, and quality expectations."
            />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => (
                <Card key={industry.title}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                    {industry.title.charAt(0)}
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                    {industry.title}
                  </h3>

                  <p className="text-sm leading-8 text-slate-600">
                    {industry.description}
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