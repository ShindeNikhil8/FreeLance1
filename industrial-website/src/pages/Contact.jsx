import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import { Mail, MapPin, Phone, Clock, Briefcase } from "lucide-react";
import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.subject ||
    !formData.message
  ) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const response = await fetch(
      "/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Enquiry sent successfully!");

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Failed to send enquiry");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                >
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
                        Plot No -9, S.No. 226 to 590/2, Nimblak Baypass Road, MIDC, Ahilyanagar - 414 111, Maharashtra, India 
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
                        +91 9923000690
                        <br/>
                        +91 8483928292
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
                        aonenagar11@gmail.com
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
                      {/* <p className="mt-2 text-sm leading-7 text-slate-600">
                        Sunday - Friday: 9:00 AM - 6:00 PM
                      </p> */}
                      <p className="mt-2 text-sm leading-7 text-slate-600">
  Sunday – Friday: Open 24 Hours
  <br />
  Saturday: Closed
</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <Briefcase className="mt-1 text-orange-500" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Office Hours
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Sunday – Friday: 10:00 AM – 3:00 PM
                        <br />
                        Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
          {/* Location Map */}
<div className="mt-24">
  <SectionTitle
    eyebrow="Our Location"
    title="Visit A One Industries"
    description="Find us easily using the map below."
  />

  <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
  <iframe
    title="A One Industries Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.02177785321!2d74.68118827497942!3d19.1505239820695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb95e0457b1eb%3A0xb2397c9e51aafaa3!2sA%20One%20Industries!5e0!3m2!1sen!2sin!4v1780471224510!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
</div>
        </section>
      </main>

      <Footer />
    </>
  );
}