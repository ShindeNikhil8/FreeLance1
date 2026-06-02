import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section
  className="relative flex items-center text-white min-h-[60vh] sm:min-h-[70vh] px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:px-8"
  style={{
    backgroundImage: `url('https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-260nw-2521386695.jpg')`, // replace with your actual image
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
      Contact Us
    </p>

    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
      Let's discuss your industrial requirements
    </h1>

    <p className="mt-6 text-lg leading-8 text-slate-200">
      Reach out to us for product enquiries, project discussions, or any
      information related to our industrial capabilities and services.
    </p>
  </div>
</section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Get In Touch"
                title="We’re here to support your business needs"
                description="Send us your enquiry and our team will connect with you to understand your requirements."
                align="left"
              />

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter company name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Write your message"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary">
                  Send Enquiry
                </Button>
              </form>
            </div>

            <div>
              <SectionTitle
                eyebrow="Contact Information"
                title="Connect with us through the following details"
                description="You can also reach us directly using the contact details below."
                align="left"
              />

              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 text-orange-500" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Address
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 text-orange-500" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Phone
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 text-orange-500" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Email
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        info@eliteindustrial.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 text-orange-500" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Working Hours
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Office location"
                  loading="lazy"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}