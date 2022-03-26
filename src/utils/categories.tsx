/**
 * Creamos una función para limitar las categorias a 4
 */
export const orderCategories = (searchResult: any) => {
  let categoriesString = "";

  searchResult.categories.map((element: any, index: any) => {
    if (index < 5) {
      categoriesString += element + (index < 4 ? " - " : "");
    }
  });

  return categoriesString;
};
