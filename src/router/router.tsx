import { Provider } from "../context/context";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Home } from "../views/Home/Home";
import Layout from "../components/Layout";

export default function Router() {
  return (
    <Provider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Home />} />
            <Route path="/items/:id" element={<Home />} />
            {/* <Route path="/search" element={<Search />}></Route> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
