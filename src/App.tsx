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

import BgContainer from "./components/BgContainer";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-third overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/events"
            element={
              <BgContainer>
                <Events />
              </BgContainer>
            }
          />
          <Route
            path="/events/:id"
            element={
              <BgContainer>
                <EventDetail />
              </BgContainer>
            }
          />
          <Route
            path="/about"
            element={
              <BgContainer>
                <About />
              </BgContainer>
            }
          />
          <Route
            path="/menu"
            element={
              <BgContainer>
                <Menu />
              </BgContainer>
            }
          />
          <Route
            path="/menu/inner"
            element={
              <BgContainer>
                <MenuContent />
              </BgContainer>
            }
          />
          <Route
            path="/menu/outer"
            element={
              <BgContainer>
                <MenuContent />
              </BgContainer>
            }
          />
          <Route
            path="/reservation"
            element={
              <BgContainer>
                <Reservation />
              </BgContainer>
            }
          />
        </Routes>
        <Footer />
        <GotopBtn />
      </div>
    </Router>
  );
}

export default App;
