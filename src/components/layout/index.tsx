import React from "react";
import { Outlet } from "react-router-dom";
import { useSearchResult } from "hooks";
import { SearchForm } from "../searchForm";
import css from "./index.css";

const Andres: User = {
  name: "Andres",
};

function Layout(props) {
  // const id = useId();
  return (
    <div className={css.root}>
      <header>header. data:</header>
      <SearchForm></SearchForm>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
export { Layout };
