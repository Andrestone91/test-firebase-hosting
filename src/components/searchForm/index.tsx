import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchResult } from "hooks";
import { MainButton } from "ui/buttons";
import { SecondaryButton } from "ui/buttons";
import { MainInput } from "ui/text-field";
import css from "./index.css";

function SearchForm() {
  const navigate = useNavigate();
  const results = useSearchResult();
  function handleSubmit(e) {
    e.preventDefault();
    const q = e.target.s.value;
    if (q) {
      navigate("/search/" + q, { replace: true });
    }
  }
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.containerInput}>
        <MainInput
          type="text"
          name="s"
          placeholder="Buscador de Mercado Libre con React"
        />
        <MainButton children="Buscar"></MainButton>
      </div>
      <div>
        <h4 className={css.textResults}>Resultados:{results.length}</h4>
      </div>
    </form>
  );
}

export { SearchForm };
