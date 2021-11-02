import React, { useContext } from "react";
import { WishContext } from "./WishContext";

const Libros = () => {
  const { catalogo, agregar } = useContext(WishContext);
  return (
    <div className="div1">
      <h1>Libros</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Titulo</th>
            <th>Idioma</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {catalogo.map((e, i) => (
            <tr key={i}>
              <td>{e.codigo}</td>
              <td>{e.titulo}</td>
              <td>{e.idioma}</td>
              <td>
                <button
                  className="btn btn-outline-success"
                  disabled={e.desactivado}
                  onClick={() => agregar(e)}
                >
                  Agregar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Libros;
