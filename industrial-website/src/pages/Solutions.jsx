import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Solutions from "../components/home/Solutions";

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        
        {/* ✅ HERO SECTION (FIXES NAVBAR ISSUE) */}
        <section
  className="relative flex items-center text-white min-h-[60vh] sm:min-h-[70vh] px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:px-8"
  style={{
    backgroundImage: `url('https://community.connection.com/wp-content/uploads/2023/01/2034074-Manufacturing-2023-Blog.jpg')`, // replace with your actual image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-slate-950/80"></div>

  {/* Content */}
  <div className="relative max-w-4xl text-left">
    <p className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
      Our Solutions
    </p>

    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
      Engineered solutions designed for performance and reliability
    </h1>

    <p className="mt-6 text-lg leading-8 text-slate-200">
      We deliver advanced industrial products and systems focused on quality,
      customization, and long-term operational value.
    </p>
  </div>
</section>

        {/* ✅ YOUR EXISTING COMPONENT */}
        <Solutions />

      </main>

      <Footer />
    </>
  );
}