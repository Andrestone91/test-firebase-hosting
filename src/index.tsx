import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./router";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

const element = document.getElementById("hello-example");
createRoot(element).render(
  <RecoilRoot>
    <Suspense>
      <React.StrictMode>
        <RouterProvider router={AppRoutes} />
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>
);
