import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = ({ children }: any) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
