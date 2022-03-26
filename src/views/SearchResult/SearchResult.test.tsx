import { render, fireEvent, screen } from "@testing-library/react";
import { SearchResult } from "./SearchResult";
import { BrowserRouter } from "react-router-dom";

test("SearchResult Test", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <SearchResult />
    </BrowserRouter>
  );

  //   const detailBtn = getByTestId("detail_button");
  //   fireEvent.click(detailBtn);
});
