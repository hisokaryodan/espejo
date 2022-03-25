import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import celularGrande from "./../../assets/maincelular.jpg";
import { detailService, descriptionService } from "./../../api/apiUtils";
import { useParams } from "react-router-dom";
import {
  reorderDetail,
  DetailResultInterface,
} from "./../../utils/redorderDetail";
import "bootstrap/dist/css/bootstrap.css";
import "./Detail.css";
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

export const Detail = (props: {}) => {
  const { name, lastName }: any = useContext(Context);
  const [detailResult, setDetailResult] =
    useState<DetailResultInterface>(DetailInitialState);
  let params = useParams() as any;

  useEffect(() => {
    service();
  }, []);

  const service = async () => {
    const [detail, description] = await Promise.all([
      detailService(params.id),
      descriptionService(params.id),
    ]);

    console.log(detail, description);

    setDetailResult(reorderDetail(detail, description));
  };

  console.log("detailResult => ", detailResult);

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
