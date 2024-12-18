import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuContent from "./pages/MenuContent";
import Reservation from "./pages/Reservation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GotopBtn from "./components/buttons/GotopBtn";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-third overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/inner" element={<MenuContent />} />
          <Route path="/menu/outer" element={<MenuContent />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
        <GotopBtn />
      </div>
    </Router>
  );
}

export default App;
