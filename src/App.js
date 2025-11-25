import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route , useLocation} from "react-router-dom";
import Home from "./pages/Home";
import WorkHistory from "./pages/WorkHistory";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
// import DraggableDateTime from "./components/DraggableDateTime";
import ContactForm from "./pages/ContactForm";

function App() {
  const [theme, setTheme] = useState("dark"); 
  const location = useLocation();
  // Toggle theme
  const toggleTheme = () => {
    if (theme === "blue") setTheme("dark");
    else if (theme === "dark") setTheme("light")
    else setTheme("blue");
  };

  return (
    <div className={`${theme === "blue" ? "bg-bgLight text-primary" : theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-primary"} flex flex-col min-h-screen transition-colors duration-500`}>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/work" element={<WorkHistory theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/education" element={<Education theme={theme} />} />
          <Route path="/contact" element={<ContactForm theme={theme} />} />
        </Routes>
      </main>
      <Footer theme={theme} />
      {/* this Section for Show dateTime in homepage */}
      {/* {location.pathname==="/" && <DraggableDateTime theme={theme}/>} */}
    </div>
  );
}

export default App;
