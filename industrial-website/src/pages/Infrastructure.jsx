import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Infrastructure from "../components/home/Infrastructure";
import parallaxImage from "../assets/images/facilitiesparallex.jpeg";

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">


<section
  className="relative flex items-center justify-center text-white min-h-[60vh] sm:min-h-[70vh] px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:px-8"
  style={{
    backgroundImage: `url(${parallaxImage})`,
    backgroundSize: "cover",          // Makes the image cover entire section
    backgroundPosition: "center",     // Centers the image
    backgroundRepeat: "no-repeat",    // Avoid tiling
    backgroundAttachment: "fixed",    // Parallax effect
  }}
>
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-slate-950/60"></div>

  {/* Content */}
  <div className="relative max-w-4xl text-left ">
    <p className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
      Facilities
    </p>

    <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
      Modern manufacturing capabilities built for precision and scale
    </h1>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
      Our infrastructure supports reliable production, technical flexibility,
      and high standards of industrial execution.
    </p>
  </div>
</section>

        {/* ✅ YOUR EXISTING COMPONENT */}
        <Infrastructure />

      </main>

      <Footer />
    </>
  );
}