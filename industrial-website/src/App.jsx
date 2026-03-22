import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <BackToTop />
    </>
  );
}

export default App;