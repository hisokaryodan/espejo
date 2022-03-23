import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/context";

export const Description = (props: {}) => {
  const { name, lastName }: any = useContext(Context);
  return (
    <div > vista buscador
    </div>
  );
};
