import SectionTitle from "../common/SectionTitle";
import FadeInSection from "../common/FadeInSection";
import StaggerGrid from "../common/StaggerGrid";
import StaggerItem from "../common/StaggerItem";
import { Quote } from "lucide-react";
import img1 from "../../assets/images/customers/nm.jpeg";
import img2 from "../../assets/images/customers/tataAutoComp.jpeg";
import img3 from "../../assets/images/customers/tatamotors.jpeg";
import img4 from "../../assets/images/customers/nwi.jpeg";
import img5 from "../../assets/images/customers/cromtom.jpeg";
import img6 from "../../assets/images/customers/suyog.jpeg";
import img7 from "../../assets/images/customers/duroshox.jpeg";


const industries = [
  {
    title: "Automotive",
    description:
      "Reliable systems and components for modern automotive manufacturing and operations.",
  },
  {
    title: "Oil & Gas",
    description:
      "Durable industrial solutions built for high-pressure and critical process environments.",
  },
  {
    title: "Power & Energy",
    description:
      "Engineered products supporting conventional and next-generation energy infrastructure.",
  },
  {
    title: "Process Industries",
    description:
      "Performance-focused solutions for continuous production and industrial processing sectors.",
  },
  {
    title: "Water & Utilities",
    description:
      "Efficient and robust products for utility operations, treatment, and distribution systems.",
  },
  {
    title: "Heavy Engineering",
    description:
      "Strong manufacturing support for large-scale industrial equipment and infrastructure.",
  },
];


const testimonials = [
  {
    name: "Operations Head",
    company: "Leading Manufacturing Group",
    text: "Their engineering approach, professionalism, and execution quality have made them a dependable long-term partner for our industrial requirements.",
  },
  {
    name: "Project Manager",
    company: "Energy Sector Client",
    text: "What stood out most was their responsiveness, technical understanding, and ability to deliver with consistency and confidence.",
  },
  {
    name: "Procurement Lead",
    company: "Industrial Solutions Company",
    text: "The team demonstrated strong quality discipline and a practical problem-solving mindset throughout the project lifecycle.",
  },
];

export default function Clients() {
  return (
    <div>
      <section className="border-t border-slate-200/70 bg-slate-50 px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <FadeInSection>
                <SectionTitle
                  eyebrow="Industries We Serve"
                  title="Serving diverse industries with dependable engineering capabilities"
                  description="Our solutions are tailored to match industry-specific standards, operational demands, and performance expectations."
                />
              </FadeInSection>
      
              <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {industries.map((industry, index) => (
                  <StaggerItem key={industry.title}>
                    <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-slate-900">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white transition group-hover:scale-110">
                        {index + 1}
                      </div>
      
                      <h3 className="mb-3 text-xl font-semibold text-slate-900 transition group-hover:text-white">
                        {industry.title}
                      </h3>
      
                      <p className="text-sm leading-7 text-slate-600 transition group-hover:text-slate-300">
                        {industry.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </section>
          <section className="border-t border-slate-200/70 bg-slate-50 px-6 py-20 lg:px-8">
      <FadeInSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Trusted By"
          title="Building long-term relationships with industry-focused clients"
          description="Our commitment to quality, technical support, and timely execution has helped us earn the trust of clients across multiple sectors."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          
          <div className="flex min-h-120px items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
            <img src={img1} alt="Client Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex min-h-120px items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
            <img src={img2} alt="Client Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex min-h-120px items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
            <img src={img3} alt="Client Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex min-h-120px items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
            <img src={img4} alt="Client Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex min-h-120px items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
            <img src={img5} alt="Client Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex min-h-120px items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
            <img src={img6} alt="Client Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex min-h-120px items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg">
            <img src={img7} alt="Client Logo" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
      </FadeInSection>
    </section>
    <section className="border-t border-slate-200/70 bg-slate-50 px-6 py-20 lg:px-8">
          <FadeInSection>
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Testimonials"
              title="What our clients appreciate most about working with us"
              description="Strong delivery, consistent quality, and responsive collaboration are some of the reasons clients continue to work with us."
            />
    
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name + item.company}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
                >
                  <Quote className="mb-5 text-orange-500" size={34} />
                  <p className="text-sm leading-8 text-slate-600">{item.text}</p>
    
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-500">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </FadeInSection>
        </section>
    </div>
   
  );
}