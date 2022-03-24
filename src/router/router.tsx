import { Provider } from "../context/context";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Home } from "../views/Home/Home";
import SearchResult from "../views/SearchResult/SearchResult";
import Layout from "../components/Layout";
import { Detail } from "../views/Detail/Detail";

export default function Router() {
  return (
    <Provider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<SearchResult />} />
            <Route path="/items/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
