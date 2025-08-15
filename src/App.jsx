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
        <main className=" dm-sans-heading">
          <AllRoutes />
        </main>
       <Footer /> 
      </SmoothLayout>
       
    </BrowserRouter>
  );
}

export default App;
