import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import products from "../data/products";
import Button from "../components/common/Button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Product not found
            </h1>
            <p className="mt-4 text-slate-600">
              The product you are looking for does not exist.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="bg-slate-950 px-6 pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/products"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>

            <span className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-300">
              {product.category}
            </span>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {product.shortDescription}
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Product Overview
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                {product.description}
              </p>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  Key Features
                </h3>
                <div className="space-y-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 text-orange-500" size={20} />
                      <p className="text-base leading-7 text-slate-700">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Button to="/contact" variant="primary">
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Applications
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This solution is suitable for a wide range of industrial use cases
              where performance, reliability, and quality are essential.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {product.applications.map((application) => (
                <div
                  key={application}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}