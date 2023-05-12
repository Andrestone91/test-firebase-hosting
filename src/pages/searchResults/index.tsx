import React from "react";
import { useSearchResult } from "hooks";
import { Link } from "react-router-dom";

function SearchResult() {
  const results = useSearchResult();

  return (
    <div className="contenedor__result">
      {results.map((r) => (
        <div key={r.id} className="contenedor-item">
          <div className="contenedor__img">
            <img src={r.thumbnail} className="contenedor__img-item" />
          </div>
          <div className="contenedor__item">
            <Link className="path" to={"/item/" + r.id}>
              <h2 className="title">{r.title}</h2>
            </Link>
            <p className="price">$ {r.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export { SearchResult };
