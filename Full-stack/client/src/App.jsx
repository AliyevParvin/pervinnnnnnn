import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import AddFood from "./pages/add-food";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App() {
  const [favorites, setFavorites] = useState([])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites}/>} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}/>} />
        <Route path="/detail:id" element={<Home />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
