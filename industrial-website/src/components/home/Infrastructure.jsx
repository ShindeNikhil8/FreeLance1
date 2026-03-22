import { Factory, Wrench, ScanSearch, Settings2 } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import cncmachinery from "../../data/machine/cncmachinery"; 
import vmcmachinery from "../../data/machine/vmcmachinery";
import Card from "../common/Card";
import image1 from "../../assets/images/facilities/image1.png";
import image2 from "../../assets/images/facilities/image2.png";
import image3 from "../../assets/images/facilities/image3.png";
import image4 from "../../assets/images/facilities/image4.png";
import image5 from "../../assets/images/facilities/image5.png";

// In-House Facilities
const inHouse = [
  { icon: <Factory size={24} />, title: "Machining" },
  { icon: <Wrench size={24} />, title: "Cutting" },
  { icon: <Settings2 size={24} />, title: "Tool Room" },
  { icon: <ScanSearch size={24} />, title: "High Tolerance Job Work" },
  { icon: <Factory size={24} />, title: "Milling Operations" },
];

// Outsource Facilities
const outsource = [
  { title: "Aluminium Extrusion", image: image1 },
  { title: "Anodizing", image: image2 },
  { title: "Plating", image: image3 },
  { title: "CMM Inspection", image: image4 },
  { title: "Buffing & Polishing", image: image5 },
];

export default function Infrastructure() {
  return (
    <section className="bg-slate-50 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* 1. Intro */}
        <SectionTitle
          eyebrow="Our Facilities"
          title=""
          description={
            <>
              <strong>A-One Industries operates from a 10,000 sq.ft facility</strong>
              <br />
              Equipped with modern infrastructure for precision engineering,
              quality control, and efficient production.
            </>
          }   
          className="text-center"
        />

       {/* 2. In-House & 3. Outsourced Facilities */}
<div className="mt-16 grid gap-12 lg:grid-cols-2">
  {/* In-House Facilities */}
  <div className="border border-slate-300 rounded-2xl p-6 bg-white shadow-sm">
    <SectionTitle eyebrow="In-House Facilities"  title="" description="" />
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {inHouse.map((item) => (
        <Card
          key={item.title}
          className="group flex flex-col items-center gap-4 p-6 min-h-[200px] border border-slate-200 rounded-2xl bg-white shadow-sm transition hover:shadow-xl hover:border-orange-400 hover:-translate-y-1"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl mb-4">
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-500 transition">{item.title}</h3>
        </Card>
      ))}
    </div>
  </div>

  {/* Outsourced Facilities */}
  <div className="border border-slate-300 rounded-2xl p-6 bg-white shadow-sm">
    <SectionTitle eyebrow="Outsourced Facilities"  title="" description="" />
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {outsource.map((item, index) => (
        <Card
          key={index}
          className="group flex flex-col items-center gap-4 p-6 min-h-[200px] border border-slate-200 rounded-2xl bg-white shadow-sm transition hover:shadow-xl hover:border-orange-400 hover:-translate-y-1"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 mb-4 overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />
</div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-500 transition">{item.title}</h3>
        </Card>
      ))}
    </div>
  </div>
</div>

        {/* 4. Machinery Section */}
        <div className="mt-24">
          <SectionTitle eyebrow="Machinery & Equipment" title="" description="" />

          {/* CNC Lathe */}
          <h2 className="text-center text-3xl font-extrabold mt-12 mb-8 text-slate-900">CNC LATHE</h2>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {cncmachinery.map((machine) => (
              <Card
                key={machine.id}
                className="group flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 min-h-[200px] border border-slate-200 rounded-2xl bg-white shadow-sm transition hover:shadow-xl hover:border-orange-400 hover:-translate-y-1"
              >
                {/* Left Content */}
                <div className="flex-1 md:pr-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-orange-500 transition">
                    {machine.name}
                  </h3>
                  <ul className="space-y-1 text-slate-600">
                    {machine.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Image */}
                <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100 p-2">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* VMC Machines */}
          <h2 className="text-center text-3xl font-extrabold mt-16 mb-8 text-slate-900">VMC (Vertical Machining Centre)</h2>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {vmcmachinery.map((machine) => (
              <Card
                key={machine.id}
                className="group flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 min-h-[200px] border border-slate-200 rounded-2xl bg-white shadow-sm transition hover:shadow-xl hover:border-orange-400 hover:-translate-y-1"
              >
                <div className="flex-1 md:pr-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-orange-500 transition">
                    {machine.name}
                  </h3>

                  <div className="mb-3">
                    <p className="font-medium text-slate-800 mb-1">Travel:</p>
                    <ul className="space-y-1 text-slate-600">
                      {machine.Travel.map((travel, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          {travel}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-base text-slate-600 mb-1">
                    <span className="font-medium text-slate-800">Max Spindle Speed:</span>{" "}
                    {machine.SpindleSpeed}
                  </p>

                  <p className="text-base text-slate-600">
                    <span className="font-medium text-slate-800">Controller:</span>{" "}
                    {machine.Controller}
                  </p>
                </div>

                <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100 p-2">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 5. Closing */}
        <div className="mt-20 text-center text-lg font-semibold text-slate-700">
          Our facilities reflect our commitment to <span className="text-orange-500">quality</span>, <span className="text-orange-500">innovation</span>, and customer satisfaction.
        </div>
      </div>
    </section>
  );
}