import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import Stats from "../components/home/Stats";
import Solutions from "../components/home/Solutions";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Infrastructure from "../components/home/Infrastructure";
import Clients from "../components/home/Clients";
import CtaBanner from "../components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>



        <section id="stats">
          <Stats />
        </section>


        <section id="why-choose-us">
          <WhyChooseUs />
        </section>



        <section id="contact-cta">
          <CtaBanner />
        </section>
      </main>
      <Footer />
    </>
  );
}