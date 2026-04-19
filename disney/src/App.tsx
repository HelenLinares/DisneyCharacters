import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

import Home from "./Home";
import Favoritos from "./Favoritos";
import Original from "./Original";
import Informativa from "./Informativa";
import Usuario from "./Usuario";
import Character from "./Character";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/original">Original</Link>
        <Link to="/informativa">Info</Link>
        <Link to="/usuario">Usuario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/original" element={<Original />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;