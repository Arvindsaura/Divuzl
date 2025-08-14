import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./routes";
import SmoothLayout from "./components/SmoothLayout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SmoothLayout>
        <main className="min-h-[80vh] dm-sans-heading">
          <AllRoutes />
        </main>
       
      </SmoothLayout>
       <Footer /> 
    </BrowserRouter>
  );
}

export default App;
