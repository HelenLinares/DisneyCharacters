import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./style.css";

interface Character {
  _id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://api.disneyapi.dev/character")
      .then(res => res.json())
      .then(data => setCharacters(data.data));
  }, []);

  const filtrados = characters.filter(c =>
    c.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Personajes Disney</h1>

      <input
        placeholder="Buscar personaje..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="grid">
        {filtrados.map((c) => (
          <div className="card" key={c._id}>
            <img src={c.imageUrl} />
            <h3>{c.name}</h3>
            <Link to={`/character/${c._id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;