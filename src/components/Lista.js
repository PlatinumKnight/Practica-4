import React from "react";
import { useContext } from "react";
import { WishContext } from "./WishContext";

const Lista = () => {
  const { wishList, eliminar } = useContext(WishContext);
  return (
    <div className="div2">
      {wishList.length === 0 ? (
        <p className="text">Sin libros</p>
      ) : (
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
            {wishList.map((e, i) => (
              <tr key={i}>
                <td>{e.codigo}</td>
                <td>{e.titulo}</td>
                <td>{e.idioma}</td>
                <td>
                  {
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => eliminar(e)}
                    >
                      Eliminar
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Lista;
