import React from "react";
import Nike from "../Imagenes/Nike.jpg";
import NikeRojo from "../Imagenes/nikerojo.jpg";
import NikeRyB from "../Imagenes/nikeryb.jpg";
import Puma from "../Imagenes/puma.jpg";
import PumaAmarillos from "../Imagenes/pumaamarillos.jfif";
import BotitaAzul from "../Imagenes/botitaazul.jpg";

import { useHistory } from "react-router-dom";

export default function ItemList({ list }) {
  let history = useHistory();

  return (
    <div>
      <h1 className="titulo"> PRODUCTOS</h1>
      <div className="productos">
        {/* PRODUCTO 1 */}
        <div>
          <div className="producto">
            <a href="#">
              <div className="producto-img">
                <img src={Nike} alt="" />
              </div>
            </a>
            <div className="producto-footer">
              <h1>Botines Nike</h1>
              <p>Botines Hombre Phantom Gt Elite Df Sg-pro - 43</p>
              <p className="precio">$18.000</p>
            </div>
            <div className="buttom">
              <button className="btn">Añadir al Carrito</button>
              <button onClick={() => history.push("/1")} className="btn">
                Ver producto
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCTO 2 */}
        <div className="producto">
          <a href="#">
            <div className="producto-img">
              <img src={BotitaAzul} alt="" />
            </div>
          </a>
          <div className="producto-footer">
            <h1>Botines NIKE MERCURIAL</h1>
            <p>
              BOTINES DE FUTBOL NIKE MERCURIAL SUPERFLY 7 ACADEMY FG/MG AZUL
            </p>
            <p className="precio">$20.000</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <button onClick={() => history.push("/2")} className="btn">
              Ver producto
            </button>
          </div>
        </div>

        {/* PRODUCTO 3 */}
        <div className="producto">
          <a href="#">
            <div className="producto-img">
              <img src={NikeRojo} alt="" />
            </div>
          </a>
          <div className="producto-footer">
            <h1>Botines NIKE MERCURIAL</h1>
            <p>
              BOTINES DE FUTBOL NIKE MERCURIAL SUPERFLY 8 ACADEMY FG/MG UNISEX
              ROJO
            </p>
            <p className="precio">$17.000</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <button onClick={() => history.push("/3")} className="btn">
              Ver producto
            </button>
          </div>
        </div>

        {/* PRODUCTO 4 */}
        <div className="producto">
          <a href="#">
            <div className="producto-img">
              <img src={NikeRyB} alt="" />
            </div>
          </a>
          <div className="producto-footer">
            <h1>Botines NIKE PHANTOM</h1>
            <p>Botines Nike Phantom GT Academy FG/MG</p>
            <p className="precio">$14.000</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <button onClick={() => history.push("/4")} className="btn">
              Ver producto
            </button>
          </div>
        </div>

        {/* PRODUCTO 5 */}
        <div>
          <div className="producto">
            <a href="#">
              <div className="producto-img">
                <img src={Puma} alt="" />
              </div>
            </a>
            <div className="producto-footer">
              <h1>Botines PUMA ULTRA</h1>
              <p>Botines Ultra 2.3 FG/AG de fútbol para hombre</p>
              <p className="precio">$15.000</p>
            </div>
            <div className="buttom">
              <button className="btn">Añadir al Carrito</button>
              <button onClick={() => history.push("/5")} className="btn">
                Ver producto
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCTO 6 */}
        <div>
          <div className="producto">
            <a href="#">
              <div className="producto-img">
                <img src={PumaAmarillos} alt="" />
              </div>
            </a>
            <div className="producto-footer">
              <h1>Botines PUMA</h1>
              <p>Botines Future Z 3.2 FG/AG de fútbol para hombre</p>
              <p className="precio">$12.000</p>
            </div>
            <div className="buttom">
              <button className="btn">Añadir al Carrito</button>
              <button onClick={() => history.push("/6")} className="btn">
                Ver producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
