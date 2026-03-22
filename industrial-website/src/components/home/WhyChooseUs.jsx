import {
  BadgeCheck,
  Settings,
  TimerReset,
  Handshake,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import FadeInSection from "../common/FadeInSection";
import StaggerGrid from "../common/StaggerGrid";
import StaggerItem from "../common/StaggerItem";

const features = [
  {
    icon: <BadgeCheck size={24} />,
    title: "Proven Engineering Expertise",
    description:
      "Strong technical knowledge and practical execution across industrial and manufacturing environments.",
  },
  {
    icon: <Settings size={24} />,
    title: "Customized Solutions",
    description:
      "Every solution is designed around client requirements, technical constraints, and performance needs.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Strict Quality Standards",
    description:
      "We maintain rigorous inspection, testing, and validation to ensure consistent product reliability.",
  },
  {
    icon: <TimerReset size={24} />,
    title: "On-Time Delivery",
    description:
      "Efficient planning and execution help us meet deadlines without compromising quality.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Customer-Centric Approach",
    description:
      "We focus on long-term relationships, responsive communication, and dependable support.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Modern Manufacturing Mindset",
    description:
      "Blending industrial strength with modern processes to improve efficiency and competitiveness.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection>
          <SectionTitle
            eyebrow="Why Choose Us"
            title="A reliable industrial partner built on quality, precision, and trust"
            description="We bring together engineering capability, disciplined execution, and a quality-first mindset to deliver dependable business outcomes."
            titleClass="text-white"
            descriptionClass="text-slate-300"
          />
        </FadeInSection>

        <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/10">
                <div className="mb-5 inline-flex rounded-2xl bg-orange-500/15 p-4 text-orange-400 transition hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}