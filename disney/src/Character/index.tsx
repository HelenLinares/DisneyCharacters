import { useParams } from "react-router"
import { useEffect, useState } from "react";
import "./style.css";

function Character() {
  const { id } = useParams();
  const [char, setChar] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.disneyapi.dev/character/${id}`)
      .then(res => res.json())
      .then(data => setChar(data.data)); 
  }, [id]);

  const addFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");

    const existe = stored.find((f: any) => f._id === char._id);
    if (!existe) {
      localStorage.setItem("favorites", JSON.stringify([...stored, char]));
      alert("Agregado a favoritos ");
    }
  };

  if (!char) return <p>Cargando...</p>;

  return (
    <div className="detail">
      <h1>{char.name}</h1>

      <img src={char.imageUrl} alt={char.name} />

      <button onClick={addFavorite}>Añadir a favoritos</button>

      <div className="info">
        <h3>Películas</h3>
        <ul>
          {char.films.length > 0 ? (
            char.films.map((f: string, i: number) => <li key={i}>{f}</li>)
          ) : (
            <p>No tiene películas</p>
          )}
        </ul>

        <h3>Series</h3>
        <ul>
          {char.tvShows.map((s: string, i: number) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Character;