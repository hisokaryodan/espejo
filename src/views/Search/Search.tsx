import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.png";
import searchImg from "./../../assets/search.png";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";

/**
 * Este Componente se puede tomar como un layout ya que se repite en todas las vistas. Se encarga de realizar la busqueda
 */
export const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState({});

  /**
   * Función encargada de atrapar el valor del input de busqueda se guarda en un estado
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);
  };

  /**
   * Función que redirige a la vista de búsqueda
   */
  const search = () => {
    navigate({
      pathname: "/items?search=" + query,
    });
    window.location.reload();
  };

  return (
    <div className="bar pt-2 pb-2">
      <div className="container">
        <div className="row">
          <div className="head-meli">
            <div
              className="logo mx-3"
              onClick={() =>
                navigate({
                  pathname: "/",
                })
              }
              data-testid="home_button"
            >
              <img src={logo} alt="Logo" width="60" />
            </div>
            <div className="search-box">
              <div className="input-group group-search">
                <input
                  type="text"
                  className="search-control"
                  id="search"
                  placeholder="Nunca dejes de buscar"
                  onChange={handleChange}
                  data-testid="input_search"
                />
                <div className="input-group-prepend">
                  <input
                    className="btn btn-outline-secondary btn-search"
                    type="image"
                    name="submit"
                    src={searchImg}
                    alt="Submit"
                    onClick={() => search()}
                    data-testid="search_button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
