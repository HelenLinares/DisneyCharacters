import { useEffect, useState } from "react";
import { Link } from "react-router"
import "./style.css";

function Favoritos() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(data);
  }, []);

  // eliminar favorito
  const removeFavorite = (id: number) => {
    const updated = favorites.filter((c) => c._id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="fav">
      <h1>Favoritos</h1>

      {favorites.length === 0 ? (
        <p>No tienes favoritos</p>
      ) : (
        <div className="grid">
          {favorites.map((c) => (
            <div key={c._id} className="card">
              <img src={c.imageUrl} />
              <h3>{c.name}</h3>

              <Link to={`/character/${c._id}`}>Ver</Link>

              <button onClick={() => removeFavorite(c._id)}>
                ❌ Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;