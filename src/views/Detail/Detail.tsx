import { useEffect, useState } from "react";
import { detailService, descriptionService } from "./../../api/apiUtils";
import { useParams } from "react-router-dom";
import {
  reorderDetail,
  DetailResultInterface,
} from "./../../utils/redorderDetail";
import "bootstrap/dist/css/bootstrap.css";
import "./Detail.css";

/**
 * Estado Inicial del resultado del detalle basada en una interface para asegurar le integridad del resultado
 */
const DetailInitialState: DetailResultInterface = {
  author: {
    name: "",
    lastname: "",
  },
  item: {
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
    },
    picture: "",
    condition: "",
    free_shipping: false,
    sold_quantity: 0,
    description: "",
  },
};

/**
 * Este Componente muestra el detalle del producto y su descripción
 */
export const Detail = () => {
  const [detailResult, setDetailResult] =
    useState<DetailResultInterface>(DetailInitialState);
  let params = useParams() as any;

  useEffect(() => {
    service();
  }, []);

  const service = async () => {
    /**
     * Usamos esta funcion para realizar de manera conjunta el consumo de los servicios detalle y descripcion.
     * Esto debido a que al no ser dependientes una de otra es perfectamente viable hacerlas en simultaneo.
     */
    const [detail, description] = await Promise.all([
      detailService(params.id),
      descriptionService(params.id),
    ]);

    /**
     * Reordenamos las respuesta creando un objeto unico
     */
    setDetailResult(reorderDetail(detail, description));
  };

  return (
    <div className="detail-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrum p-0"></div>
          </div>
        </div>
      </div>
      <div className="container border-radius-white resultados">
        <div className="row">
          <div className="col-md-9">
            <img
              className="img-producto-detail"
              src={detailResult.item.picture}
              alt="producto"
            />
            <h3 className="title-description">Descripción del producto</h3>
            <p className="general-descrip">{detailResult.item.description}</p>
          </div>
          <div className="col-md-3">
            <p className="detail-product">
              Nuevo - {detailResult.item.sold_quantity} vendidos
            </p>
            <p className="product-name">{detailResult.item.title}</p>
            <p className="price-detail">
              {detailResult.item.price.currency}{" "}
              {detailResult.item.price.amount}
            </p>
            <button className="btn btn-primary btn-detail-buy">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
