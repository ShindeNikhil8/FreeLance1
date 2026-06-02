import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import products from "../data/products";

export default function Products() {
  const [showAll, setShowAll] = useState(false);
  const [isCompactView, setIsCompactView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedProducts =
    isCompactView && !showAll
      ? products.slice(0, 8)
      : products;

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section
          className="relative flex items-center text-white min-h-[60vh] sm:min-h-[70vh] px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:px-8"
          style={{
            backgroundImage:
              "url('https://prototool.com/wp-content/uploads/2023/01/CNC-parts-1024x576.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/80"></div>

          {/* Content */}
          <div className="relative max-w-4xl text-left">
            <p className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
              Our Products
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Precision engineered components and manufacturing solutions built
              with accuracy and reliability
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200">
              We specialize in high-precision machining, custom component
              manufacturing, and advanced finishing solutions tailored to meet
              diverse industrial requirements.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Our Machined Products"
              title="Precision Machined Components"
              description="Manufactured with accuracy, consistency, and quality to meet diverse industrial requirements."
            />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {displayedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden p-0 border border-slate-200 rounded-2xl transition duration-300 hover:shadow-xl hover:border-orange-400 hover:-translate-y-1"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-56 w-full object-contain transition duration-500 hover:scale-110"
                    />
                  </div>
                </Card>
              ))}
            </div>

            {/* Show More / Show Less Button */}
            {isCompactView && products.length > 8 && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
                >
                  {showAll ? "Show Less" : "Show More Products"}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}