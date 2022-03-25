interface AuthorInterface {
  name: string;
  lastname: string;
}

interface ItemInterface {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface SearhResultInterface {
  author: AuthorInterface;
  categories: string[];
  items: ItemInterface[];
}

////////////////////////////

interface Value2 {
  id: string;
  name: string;
  results: number;
}

interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean;
}

interface Presentation {
  display_currency: string;
}

interface Prices {
  presentation: Presentation;
}

interface Result {
  id: string;
  title: string;
  price: number;
  prices: Prices;
  currency_id: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  shipping: Shipping;
}

interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

interface SearchInterface {
  results: Result[];
  available_filters: AvailableFilter[];
}

export const reorderSearch = (
  searchResult: SearchInterface
): SearhResultInterface => {
  let result: SearhResultInterface = {
    author: { name: "Jose Camilo", lastname: "Urrego Rojas" },
    categories: [],
    items: [],
  };

  const [categories] = searchResult.available_filters;

  result.categories = categories.values.map((element: Value2) => {
    return element.name;
  });

  result.items = searchResult.results.map((element: any) => {
    return {
      id: element?.id,
      title: element.title,
      price: {
        currency: element.prices.presentation.display_currency,
        amount: element.price,
      },
      picture: element.thumbnail,
      condition: element.condition,
      free_shipping: element.shipping.free_shipping,
    };
  });

  return result;
};
