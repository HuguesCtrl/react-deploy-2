import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modale from "./pages/Modale";
import Onglets from "./pages/Onglets";
import NavResponsive from "./pages/NavResponsive";
import Validation from "./pages/Validation";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/react-deploy-2/" element={<Home />} />
          <Route path="/react-deploy-2/modale" element={<Modale />} />
          <Route path="/react-deploy-2/onglets" element={<Onglets />} />
          <Route path="/react-deploy-2/navbar" element={<NavResponsive />} />
          <Route path="/react-deploy-2/validation" element={<Validation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
