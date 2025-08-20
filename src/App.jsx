import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Projects from "./pages/Projects.jsx";
import Project from "./pages/Project.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:name" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
