import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const IndustriesPage = lazy(() => import("../pages/IndustriesPage"));
const InfrastructurePage = lazy(() => import("../pages/InfrastructurePage"));
const ClientsPage = lazy(() => import("../pages/ClientsPage"));
const Careers = lazy(() => import("../pages/Careers"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Solutions = lazy(() => import("../pages/Solutions"));
const Infrastructure = lazy(() => import("../pages/Infrastructure"));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500"></div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/infrastructures" element={<InfrastructurePage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/infrastructure" element={<Infrastructure />}/>
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}