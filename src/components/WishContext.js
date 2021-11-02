import React, { createContext, useState } from "react";

export const WishContext = createContext();

const WishProvider = (props) => {
  const [wishList, setWishList] = useState([]);
  const [catalogo, setCatalogo] = useState([
    { codigo: 1, titulo: "Programación", idioma: "ESP", desactivado: false },
    { codigo: 2, titulo: "Aprende Python", idioma: "ESP", desactivado: false },
    { codigo: 3, titulo: "Precálculo", idioma: "ESP", desactivado: false },
    {
      codigo: 4,
      titulo: "Ingenieria De Software",
      idioma: "ESP",
      desactivado: false,
    },
  ]);

  const agregar = (libro) => {
    let Fcatalogo = catalogo;

    let i = Fcatalogo.findIndex((e) => e.codigo === libro.codigo);

    Fcatalogo[i].desactivado = true;

    let Wcatalogo = [...wishList, libro];

    setWishList(Wcatalogo);
    setCatalogo(Fcatalogo);
  };

  const eliminar = (libro) => {
    let Fcatalogo = catalogo;
    let i = Fcatalogo.findIndex((e) => e.codigo === libro.codigo);

    Fcatalogo[i].desactivado = false;

    let Wcatalogo = wishList.filter((e) => e.codigo !== libro.codigo);
    setWishList(Wcatalogo);
    setCatalogo(Fcatalogo);
  };

  return (
    <WishContext.Provider
      value={{
        catalogo,
        wishList,
        eliminar,
        agregar,
      }}
    >
      {props.children}
    </WishContext.Provider>
  );
};

export default WishProvider;
