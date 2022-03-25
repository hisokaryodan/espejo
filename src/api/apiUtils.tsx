import axios from "axios";

const search = "https://api.mercadolibre.com/sites/MLA/search?q=​:";
const detail = "https://api.mercadolibre.com/items/";

export const searchService = async (query: string) => {
  const response = await axios.get(search + query);
  return response;
};

export const detailService = async (id: string) => {
  const response = await axios.get(detail + id);
  return response.data;
};

export const descriptionService = async (id: string) => {
  const response = await axios.get(detail + id + "/description");
  return response.data;
};
