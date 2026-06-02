import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";
import logo from "../../assets/images/image.png"; 
import logo2 from "../../assets/images/img2.png";

const pageLinks = [
  {name: "Home", path: "/"},
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Solutions", path: "/solutions" },
  { name: "Facilities", path: "/infrastructure" },
  { name: "Contact", path: "/contact" },
];

// const homeSections = [
//   { name: "Home", id: "home" },
//   { name: "Solutions", id: "solutions" },
//   { name: "Infrastructure", id: "infrastructure" },
//   { name: "Customers", id: "clients" },
// ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // useEffect(() => {
  //   if (location.pathname !== "/") return;

  //   const sectionIds = homeSections.map((item) => item.id);

  //   function handleSectionScroll() {
  //     let current = "home";

  //     for (const id of sectionIds) {
  //       const element = document.getElementById(id);
  //       if (!element) continue;

  //       const rect = element.getBoundingClientRect();
  //       if (rect.top <= 140 && rect.bottom >= 140) {
  //         current = id;
  //         break;
  //       }
  //     }

  //     setActiveSection(current);
  //   }

  //   handleSectionScroll();
  //   window.addEventListener("scroll", handleSectionScroll);

  //   return () => window.removeEventListener("scroll", handleSectionScroll);
  // }, [location.pathname]);

  // const scrollToSection = async (id) => {
  //   setIsOpen(false);

  //   if (location.pathname !== "/") {
  //     navigate("/");
  //     setTimeout(() => {
  //       const element = document.getElementById(id);
  //       if (element) {
  //         const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
  //         window.scrollTo({ top: y, behavior: "smooth" });
  //       }
  //     }, 150);
  //     return;
  //   }

  //   const element = document.getElementById(id);
  //   if (element) {
  //     const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // };

  const desktopPageClass = ({ isActive }) =>
    `relative text-sm font-medium transition ${
      isActive ? "text-orange-500" : "text-slate-900 hover:text-orange-500"
    }`;

  const mobilePageClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-orange-500 text-white"
        : "text-slate-800 hover:bg-slate-100"
    }`;

  // const sectionClass = (id) =>
  //   `relative cursor-pointer text-sm font-medium transition ${
  //     location.pathname === "/" && activeSection === id
  //       ? "text-orange-500"
  //       : "text-white hover:text-orange-400"
  //   }`;

  // const mobileSectionClass = (id) =>
  //   `block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
  //     location.pathname === "/" && activeSection === id
  //       ? "bg-orange-500 text-white"
  //       : "text-slate-800 hover:bg-slate-100"
  //   }`;

  return (
    <header
  className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
    isScrolled
  ? "border-slate-200 bg-white shadow-md"
  : "border-transparent bg-white"
  }`}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between pl-2 pr-6 lg:pl-4 lg:pr-8">
        <Link to="/" className="flex items-center gap-3 -ml-2">
          
          <div className="flex items-center justify-center ">
            <img
              src={logo}
              alt="A One Industries"
              className="h-full max-h-11 w-auto object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide text-slate-900">
              A ONE INDUSTRIES
            </h1>
            <p className="text-xs text-slate-600">A company of quality</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {/* {homeSections.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={sectionClass(link.id)}
            >
              {link.name}
              {location.pathname === "/" && activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-orange-500"></span>
              )}
            </button>
          ))} */}

          {pageLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={desktopPageClass}>
              {link.name}
            </NavLink>
          ))}

          
        </nav>

        <button
          className="text-slate-900 lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-orange-500 shadow-md">
                  <img
                    src={logo2}
                    alt="Company Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  A One Industries
                </h2>
                <p className="text-xs text-slate-500">A company of quality</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-slate-700"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {/* {homeSections.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={mobileSectionClass(link.id)}
              >
                {link.name}
              </button>
            ))} */}

            {pageLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={mobilePageClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          
        </div>
      </div>
    </header>
  );
}