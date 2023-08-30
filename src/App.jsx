import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Me from "./components/Me/Me";
import ContactPage from "./components/Contact/ContactPage";
import Proyects from "./components/Proyects/Proyects";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <nav id="navBar">
        <NavBar />
      </nav>
      <div id="main">
        <Routes>
          <Route path="/" element={<Navigate to="/me" replace />} />
          <Route path="/me/*" element={<Me />} />
          <Route path="/me" element={<Navigate to="/me/personal" replace />} />
          <Route path="proyects" element={<Proyects />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
{
  /* <Route path="/" element={<Proyects />} */
}
export default App;
