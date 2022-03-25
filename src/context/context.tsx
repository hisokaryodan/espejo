import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = ({ children }: any) => {
  const [name, setName] = useState("Jose Camilo");
  const [lastName, setLastName] = useState("Urrego Rojas");
  const [searchResult, setSearchResult] = useState({});

  return (
    <Context.Provider
      value={{
        name,
        lastName,
        searchResult,
        setSearchResult
      }}
    >
      {children}
    </Context.Provider>
  );
};
