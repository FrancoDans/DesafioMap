import React from "react";
import BotitaAzul from "../../Imagenes/botitaazul.jpg";
import { useHistory, Link } from "react-router-dom";

export default function Producto2() {

  let history = useHistory();

  return (
    <div className="producto">
      <a href="#">
        <div className="producto-img">
          <img src={BotitaAzul} alt="" />
        </div>
      </a>
      <div className="producto-footer">
        <h1>Botines NIKE MERCURIAL</h1>
        <p>BOTINES DE FUTBOL NIKE MERCURIAL SUPERFLY 7 ACADEMY FG/MG AZUL</p>
        <p className="precio">$20.000</p>
      </div>
      <div className="buttom">
        <button className="btn">Añadir al Carrito</button>
        <button onClick={() => history.push("/2")} className="btn">
          Ver producto
        </button>
      </div>
      <Link to={"/"} className="btn-volver">
        Volver
      </Link>
    </div>
  );
}