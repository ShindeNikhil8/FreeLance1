import { ArrowRight, Factory, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
    <section className="relative min-h-[60vh] flex items-center justify-center text-white">

  {/* Background image with parallax */}
  <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1682144591991-585764d2a651?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed"></div>

  {/* Bluish gradient overlay to blend with next section */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-slate-900/40 to-slate-950/90"></div>

  <div className="relative z-10 text-center px-6">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
      A-One Industries
    </h1>

    <p className="mt-4 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
      A company of quality
    </p>
  </div>

</section>

    <section className="relative min-h-screen overflow-hidden text-white">

  {/* Visible top and bottom gradient to blend sections */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Top light fade */}
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-800/40 to-transparent"></div>

    {/* Base background */}
    <div className="absolute inset-0 bg-slate-950"></div>

    {/* Bottom light fade */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-800/40 to-transparent"></div>
  </div>

  <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-14 pt-24 sm:pb-16 sm:pt-28 lg:px-8">
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

      {/* Left content */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
          <Factory size={16} />
          Modern Industrial Engineering Solutions
        </p>

        <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Precision Manufacturing for a
          <span className="text-orange-500"> Stronger Industrial Future</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          We design, manufacture, and provide machining solutions for high-performance industrial
          systems built for reliability, efficiency, and long-term value.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Explore Solutions <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-orange-500 hover:bg-white/5"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-orange-500" size={22} />
            <span className="text-slate-300">Certified Quality Standards</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-orange-500" size={22} />
            <span className="text-slate-300">Trusted Across Industries</span>
          </div>
        </div>
      </Motion.div>

      {/* Right stats */}
      <Motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="grid gap-5 sm:grid-cols-2"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-orange-500">25+</h3>
          <p className="mt-2 text-slate-300">Years of engineering excellence</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-orange-500">300+</h3>
          <p className="mt-2 text-slate-300">Projects delivered successfully</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-orange-500">50+</h3>
          <p className="mt-2 text-slate-300">Industrial clients served</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-orange-500">10+</h3>
          <p className="mt-2 text-slate-300">Countries reached globally</p>
        </div>
      </Motion.div>

    </div>
  </div>
</section>
    </div>
  );
}