import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 25, suffix: "+", label: "Years of Experience" },
  { number: 300, suffix: "+", label: "Projects Delivered" },
  { number: 50, suffix: "+", label: "Trusted Clients" },
  { number: 10, suffix: "+", label: "Countries Served" },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">

      {/* Optional subtle background image for parallax effect */}
      <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1663036749155-1400f6e6badb?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed opacity-20"></div>

      {/* Bluish gradient overlay to blend with Hero and background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent"></div>

      <div className="relative z-10 w-full px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_10px_30px_rgba(249,115,22,0.12)]"
            >
              <h3 className="text-4xl font-bold text-orange-500 sm:text-5xl">
                {inView ? <CountUp end={item.number} duration={2.5} /> : 0}
                {item.suffix}
              </h3>
              <p className="mt-3 text-sm uppercase tracking-wide text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}