import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.png";
import searchImg from "./../../assets/search.png";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";

export const Search = (props: {}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);
  };

  const search = () => {
    navigate({
      pathname: "/items?search=" + query,
    });
  };

  return (
    <div className="bar pt-2 pb-2">
      <div className="container">
        <div className="row">
          <div className="head-meli">
            <div className="logo mx-3">
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
                />
                <div className="input-group-prepend">
                  <input
                    className="btn btn-outline-secondary btn-search"
                    type="image"
                    name="submit"
                    src={searchImg}
                    alt="Submit"
                    onClick={() => search()}
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
