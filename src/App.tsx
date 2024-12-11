import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GotopBtn from "./components/buttons/GotopBtn";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-third overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <GotopBtn />
      </div>
    </Router>
  );
}

export default App;
