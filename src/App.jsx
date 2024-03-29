import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UpcomingEvents from "./pages/Events/UpcomingEvents";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import TheNav from "./components/TheNav";
import TheFooter from "./components/TheFooter";
import TheSidebar from "./components/TheSidebar";
import PreviousEvents from "./pages/Events/PreviousEvents";

function App() {
  const [istoggle, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!istoggle);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <TheNav toggle={toggle} />
        <TheSidebar toggle={toggle} istoggle={istoggle} />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/events/upcoming-events"
              element={<UpcomingEvents />}
            />
            <Route
              path="/events/previous-events"
              element={<PreviousEvents />}
            />
            <Route path="/blog/maharlika-blog" element={<Blog />} />
          </Routes>
        </div>
        <TheFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
