import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkHistory from "./pages/WorkHistory";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkHistory />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
