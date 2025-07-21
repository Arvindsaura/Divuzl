import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-[80vh]">
        <AllRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
