import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./routes";
import SmoothLayout from "./components/SmoothLayout";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar persists across all pages */}
      <Navbar />

      {/* Only dynamic content uses SmoothLayout */}
      <SmoothLayout>
        <main className="dm-sans-heading">
          <AllRoutes />
        </main>
      </SmoothLayout>

      {/* Footer persists across all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
