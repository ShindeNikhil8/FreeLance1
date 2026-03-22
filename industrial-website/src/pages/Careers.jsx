import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-slate-900">Careers</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}