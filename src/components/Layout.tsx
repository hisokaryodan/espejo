import React from "react";
import { Search } from "../views/Search/Search";

const Layout = ({ children }: any) => {
  return (
    <>
      <Search />
      <main>{children}</main>
    </>
  );
};

export default Layout;
