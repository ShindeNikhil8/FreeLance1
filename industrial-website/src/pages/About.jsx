import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { CheckCircle2, Target, Eye, Award, Users, Factory } from "lucide-react";
import about1 from "../assets/images/aboutus/aboutus1.png";
const values = [
  {
    icon: <Target size={24} />,
    title: "Mission",
    description:
      "Our mission is to deliver high-quality, cost-effective, and innovative manufacturing solutions through advanced practices while deeply understanding customer needs and providing reliable, customized services.",
  },
  {
    icon: <Eye size={24} />,
    title: "Vision",
    description:
      "To become a global leader in sustainable manufacturing, delivering innovative, high-quality products while being the most trusted partner through superior quality, timely delivery, and exceptional customer value.",
  },
  {
    icon: <Award size={24} />,
    title: "Quality Promise",
    description:
      "We aim to maintain consistency, safety, and operational confidence in every solution we deliver.",
  },
];

const strengths = [
  "Experienced technical team and industrial know-how",
  "Strong focus on quality, reliability, and process discipline",
  "Flexible manufacturing support for varied requirements",
  "Customer-first communication and timely delivery mindset",
];

const milestones = [
  { number: "25+", label: "Years of Experience" },
  { number: "300+", label: "Projects Completed" },
  { number: "50+", label: "Trusted Clients" },
  { number: "10+", label: "Countries Served" },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section
  className="relative flex items-center text-white min-h-[60vh] sm:min-h-[70vh] px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:px-8"
  style={{
    backgroundImage: `url('http://www.milansmachining.com/wp-content/uploads/2011/08/IMAGE_558.jpg')`,
    backgroundSize: "cover",          // fill section
    backgroundPosition: "center",     // center image
    backgroundRepeat: "no-repeat",    // avoid tiling
    backgroundAttachment: "fixed",    // parallax effect
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-slate-950/80"></div>

  {/* Content aligned to left */}
  <div className="relative max-w-4xl text-left">
    <p className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
      About Us
    </p>

    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
      Delivering precision-engineered manufacturing solutions with quality and innovation
    </h1>

    <p className="mt-6 text-lg leading-8 text-slate-200">
      At &nbsp;A-One Industries, we provide high-quality machining and manufacturing services
      tailored to meet the evolving needs of modern industries with a strong focus on
      performance, efficiency, and customer satisfaction.
    </p>
  </div>
</section>

        <section className="px-6 py-20 lg:px-8">
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
    
    {/* LEFT CONTENT */}
   <div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
  
  <SectionTitle
    eyebrow="Who We Are"
    title={
      <>
        A precision-driven manufacturing company
        <br />
        focused on quality, innovation, and timely execution
      </>
    }
    description= ""
    align="left"
  />

  <div className="mt-3 space-y-5 text-justify">
    <p className="text-base leading-8 text-slate-600">
      Our strength lies in blending engineering understanding, manufacturing capability, and quality discipline to meet demanding industry requirements.
    </p>
    <p className="text-base leading-8 text-slate-600">
      Our company is equipped with advanced technology, modern infrastructure, and a
      skilled workforce, enabling us to handle high-precision machining work with
      consistency and accuracy. From milling and cutting operations to high-tolerance
      jobs, we ensure that every product meets strict quality standards.
    </p>

    <p className="text-base leading-8 text-slate-600">
      We specialize in providing customized manufacturing solutions by understanding
      our customers’ requirements. Our flexible approach allows us to adapt quickly,
      develop samples, and deliver tailored solutions within committed timelines.
    </p>

    <p className="text-base leading-8 text-slate-600">
      In addition to our in-house capabilities, we collaborate with trusted partners
      for aluminium extrusion, anodizing, plating, CMM inspection, and polishing,
      ensuring complete end-to-end manufacturing support.
    </p>
  </div>

  <div className="mt-8">
    <Button to="/contact" variant="primary">
      Work With Us
    </Button>
  </div>

</div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={about1}
          alt="Industrial team and facility"
          loading="lazy"
          className="h-150 w-full object-cover"
        />
      </div>
    </div>

  </div>
</section>

        <section className="bg-slate-950 px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Core Foundation"
              title="Mission, vision, and quality values that guide our work"
              description="Everything we do is built around performance, trust, and disciplined execution."
              titleClass="text-white"
            descriptionClass="text-slate-300"
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {values.map((item) => (
    <div
      key={item.title}
      className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/10"
    >
      <div className="mb-5 inline-flex rounded-2xl bg-orange-500/15 p-4 text-orange-400 transition hover:scale-110">
        {item.icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-slate-100">{item.title}</h3>
      <p className="text-sm leading-7 text-slate-300">{item.description}</p>
    </div>
  ))}
</div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Why We Stand Out"
                title="Focused on reliability, responsiveness, and long-term value"
                description="We aim to be more than a supplier by becoming a dependable industrial partner."
                align="left"
              />

              <div className="space-y-4">
                {strengths.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 text-orange-500" size={20} />
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {milestones.map((item) => (
                <Card
                  key={item.label}
                  className="flex min-h-[170px] flex-col justify-center text-center"
                >
                  <h3 className="text-4xl font-bold text-orange-500">
                    {item.number}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-wide text-slate-600">
                    {item.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <Users className="mb-4 text-orange-400" size={28} />
                <h3 className="mb-3 text-xl font-semibold">People</h3>
                <p className="text-sm leading-7 text-slate-300">
                  Skilled professionals committed to quality execution and customer support.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <Factory className="mb-4 text-orange-400" size={28} />
                <h3 className="mb-3 text-xl font-semibold">Infrastructure</h3>
                <p className="text-sm leading-7 text-slate-300">
                  Modern manufacturing capabilities built to support consistent industrial output.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <Award className="mb-4 text-orange-400" size={28} />
                <h3 className="mb-3 text-xl font-semibold">Commitment</h3>
                <p className="text-sm leading-7 text-slate-300">
                  A disciplined quality mindset focused on performance, trust, timely delivery, and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}