import available from "./../../assets/shipping-car.png";
import celular from "./../../assets/maincelular.jpg";
import "./SearchResult.css";
import "bootstrap/dist/css/bootstrap.css";

const SearchResult = () => {
  return (
    <div className="search-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrum p-0">
              <p>Note 11 - iphone - seiphone - 13 pro 128 - gbtecno mobile</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-radius-white">
        <div className="resultados">
          <div className="row">
            <div className="col-md-2">
              <img className="img-producto" src={celular} alt="producto" />
            </div>
            <div className="col-md-8">
              <p className="price">$ 1.900</p>
              <p className="description">
                Apple Ipod Touch 5g 16gb Negro igual a nuevo Completo Unico!
              </p>
            </div>
            <div className="col-md-2">
              <p className="third-text">Capital Federal</p>
            </div>
          </div>
        </div>
        <div className="resultados">
          <div className="row">
            <div className="col-md-2">
              <img className="img-producto" src={celular} alt="producto" />
            </div>
            <div className="col-md-8">
              <div className="cost">
                <p className="price">$ 1.900</p>
                <img className="shipping-img" src={available} alt="shipping" />
              </div>
              <p className="description">
                Apple Ipod Touch 5g 16gb Negro igual a nuevo Completo Unico!
              </p>
            </div>
            <div className="col-md-2">
              <p className="third-text">Capital Federal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
