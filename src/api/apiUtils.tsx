import axios from "axios";

const search = "https://api.mercadolibre.com/sites/MLA/search?q=​:";
const detail = "https://api.mercadolibre.com/items/​:";

export const searchService = async (query: string) => {
  const response = await axios.get(search + query);
  return response;
};

export const detailService = async (id: string) => {
  try {
    const response = await axios.get(detail + id);

    return response;
  } catch (error: any) {
    console.log(error);
  }
};

export const descriptionService = async (id: string) => {
  try {
    const response = await axios.get(detail + id + "/description");

    return response;
  } catch (error: any) {
    console.log(error);
  }
};
