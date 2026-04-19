import "./style.css";
import fondo from "../assets/disney-bg.png";

function Informativa() {
  return (
    <div
      className="info-hero"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="overlay">

        

        <div className="box">
          <p>API con información de 
            500+ personajes</p>
        </div>

      </div>
    </div>
  );
}

export default Informativa;