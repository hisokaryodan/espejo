import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import celularGrande from "./../../assets/maincelular.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./Detail.css";

export const Detail = (props: {}) => {
  const { name, lastName }: any = useContext(Context);
  return (
    <div className="detail-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrum p-0">
              <p>Note 11 - iphone - seiphone - 13 pro 128 - gbtecno mobile</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-radius-white resultados">
        <div className="row">
          <div className="col-md-9">
            <img
              className="img-producto-detail"
              src={celularGrande}
              alt="producto"
            />
            <h3 className="title-description">Descripción del producto</h3>
            <p className="general-descrip">
              Funcionamiento fluido, rendimiento fuerte: alimentado por el
              último procesador MTK6580P GHz Quad Core y funciona en el último
              sistema operativo Android 6.0 Torta todo en uno, cuerpo de
              aleación de magnesio y aluminio, cubierta trasera de vidrio
              doblado en caliente de color degradado galvanizado nano 3D,
              pantalla de Telefingers de 5 puntos, desbloqueo facial,
              despertador inteligente
            </p>
          </div>
          <div className="col-md-3">
            <p className="detail-product">Nuevo - 234 vendidos</p>
            <p className="product-name">Deco Reverse Sombrero Oxford</p>
            <p className="price-detail">$ 1.980</p>
            <button className="btn btn-primary btn-detail-buy">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
