import { useEffect, useState } from "react";
import "./style.css";

function Original() {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.disneyapi.dev/character")
      .then(res => res.json())
      .then(data => {
        // cantidad de películas
        const ordenados = data.data.sort(
          (a: any, b: any) => b.films.length - a.films.length
        );

        setCharacters(ordenados.slice(0, 10)); // top 10
      });
  }, []);

  return (
    <div className="original">
      <h1>Top personajes Disney</h1>

      {characters.map((c, index) => (
        <div className="card" key={c._id}>
          <h2>#{index + 1}</h2>
          <img src={c.imageUrl} />
          <h3>{c.name}</h3>
          <p> {c.films.length} películas</p>
        </div>
      ))}
    </div>
  );
}

export default Original;