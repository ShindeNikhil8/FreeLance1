import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";

const clientGroups = [
  {
    title: "Automotive Partners",
    description:
      "Trusted by companies looking for consistency, technical support, and strong manufacturing reliability.",
  },
  {
    title: "Energy Sector Clients",
    description:
      "Serving organizations that require dependable industrial products for demanding operational conditions.",
  },
  {
    title: "Process Industry Customers",
    description:
      "Supporting process-focused businesses with quality-driven industrial solutions and execution.",
  },
  {
    title: "Infrastructure Firms",
    description:
      "Working with industrial and infrastructure-oriented businesses on reliable project requirements.",
  },
  {
    title: "OEMs & Manufacturers",
    description:
      "Helping equipment manufacturers and industrial businesses with product and systems support.",
  },
  {
    title: "Utility & Engineering Companies",
    description:
      "Providing dependable engineering capabilities for utility networks and industrial operations.",
  },
];

const testimonials = [
  {
    name: "Procurement Manager",
    company: "Industrial Manufacturing Company",
    text: "Their responsiveness, quality discipline, and project understanding made the engagement very smooth and dependable.",
  },
  {
    name: "Operations Lead",
    company: "Engineering Sector Client",
    text: "We value their ability to combine technical understanding with practical execution and timely delivery.",
  },
  {
    name: "Project Head",
    company: "Infrastructure Partner",
    text: "The team maintained professionalism and consistency throughout the project lifecycle.",
  },
];

export default function ClientsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-slate-950 px-6 pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
              Clients
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
              Trusted relationships built through quality, service, and execution
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              We work with industry-focused clients who value dependable delivery,
              responsive support, and a long-term partnership approach.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Client Segments"
              title="Supporting a wide range of industrial customers"
              description="Our experience spans multiple sectors, allowing us to adapt to different operational requirements and business expectations."
            />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {clientGroups.map((item) => (
                <Card key={item.title}>
                  <h3 className="mb-3 text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-8 text-slate-600">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Client Feedback"
              title="What clients value most in working with us"
              description="Our focus on quality, professionalism, and timely response helps us build lasting confidence."
            />

            <div className="grid gap-8 lg:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.name + item.company}>
                  <p className="text-sm leading-8 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-500">{item.company}</p>
                  </div>
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