import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Search } from "./Search";
import { BrowserRouter } from "react-router-dom";

test("Search test", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );

  const searchBtn = getByTestId("search_button");
  fireEvent.click(searchBtn);

  const homeBtn = getByTestId("home_button");
  fireEvent.click(homeBtn);

  const inputSearch = getByTestId("input_search");
  fireEvent.change(inputSearch, { target: { value: "iphone" } });
});
