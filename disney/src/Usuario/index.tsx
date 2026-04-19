import { useEffect, useState } from "react";
import "./style.css";

function Usuario() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(data);
  }, []);

  return (
    <div className="user">

      {/* PERFIL */}
      <div className="perfil">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
        />
        <h2>Helen Linares</h2>
       
      </div>

      {/* ESTADÍSTICAS */}
      <div className="stats">
        <div className="stat">
          <h3>{favorites.length}</h3>
          <p>Favoritos</p>
        </div>

        <div className="stat">
          <h3>Disney</h3>
          <p>API</p>
        </div>

        <div className="stat">
          <h3>2026</h3>
          <p>Año</p>
        </div>
      </div>

      {/* FAVORITOS */}
      <h2 className="titulo">⭐ Tus personajes</h2>

      <div className="grid">
        {favorites.length === 0 ? (
          <p>No tienes favoritos aún</p>
        ) : (
          favorites.map((c) => (
            <div key={c._id} className="card">
              <img src={c.imageUrl} />
              <p>{c.name}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Usuario;