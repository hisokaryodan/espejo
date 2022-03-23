import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/context";

export const Detail = (props: {}) => {
  const { name, lastName }: any = useContext(Context);
  return (
    <div > vista buscador
    </div>
  );
};
