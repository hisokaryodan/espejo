import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import { useParams, useSearchParams } from "react-router-dom";
import { detailService, searchService } from "./../../api/apiUtils";
import { reorderSearch } from "./../../utils/reorder";

import "./Home.css";
import logo from "../../logo.svg";

export const Home = (props: {}) => {
  let params = useParams();
  // console.log("params =>", params);
  let [searchParams, setSearchParams] = useSearchParams();
  let searchUrl = searchParams.get("search");
  // console.log("searchUrl =>", searchUrl);
  const { id } = params;
  // console.log("id =>", id);
  const [searchResult, setSearchResult] = useState({});

  const search = async () => {
    const response = (await searchService(id as string)) as any;
    const reorderSeaarch = reorderSearch(response.data);
    setSearchResult(reorderSeaarch);
  };

  // console.log("searchResult Home => ", searchResult);

  const { name, lastName }: any = useContext(Context);
  return (
    <div className="App">
      Vista buscador solo
    </div>
  );
};
