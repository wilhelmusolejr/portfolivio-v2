import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop.jsx";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
