import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import TheNav from "./components/TheNav";
import TheFooter from "./components/TheFooter";
import TheSidebar from "./components/TheSidebar";

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
            <Route path="/about/*" element={<About />} />
            <Route path="/events/*" element={<Events />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
        <TheFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
