import { useParams, useSearchParams } from "react-router-dom";
import { detailService, searchService } from "./../../api/apiUtils";
import { reorderSearch } from "../../utils/reorderSearch";
import { useState, useEffect } from "react";
import { Context } from "../../context/context";
import { useContext } from "react";
import available from "./../../assets/shipping-car.png";
import celular from "./../../assets/maincelular.jpg";
import { useNavigate } from "react-router-dom";
import "./SearchResult.css";
import "bootstrap/dist/css/bootstrap.css";

const SearchResult = (props: {}) => {
  const [searchResult, setSearchResult] = useState({}) as any;
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();
  let productSearch = searchParams.get("search");

  useEffect(() => {
    const search = async () => {
      const response = (await searchService(productSearch as string)) as any;
      const reorderSeaarch = reorderSearch(response.data);
      await setSearchResult(reorderSeaarch);
    };

    search();
  }, []);

  function items() {
    if (searchResult.items !== undefined) {
      const listItems = searchResult.items.map(
        (item: any, index: any) =>
          index < 4 && (
            <div className="resultados" key={index}>
              <div className="row">
                <div className="col-md-2">
                  <img
                    className="img-producto"
                    src={item.picture}
                    alt="producto"
                    onClick={() => detailProduct(item.id)}
                  />
                </div>
                <div className="col-md-8">
                  <div className="cost">
                    <p className="price">$ {item.price.amount}</p>
                    {item.free_shipping && (
                      <img
                        className="shipping-img"
                        src={available}
                        alt="shipping"
                      />
                    )}
                  </div>
                  <p className="description">{item.title}</p>
                </div>
                <div className="col-md-2">
                  <p className="third-text">{item.price.currency}</p>
                </div>
              </div>
            </div>
          )
      );

      return <div className="container border-radius-white">{listItems}</div>;
    }
  }

  function detailProduct(id: string) {
    navigate({
      pathname: "/items/" + id,
    });
  }

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
      {items()}
    </div>
  );
};

export default SearchResult;
