import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./components/layout";
import { Home, About, Product } from "./pages";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "",
        errorElement: <Error />,
      },
      {
        element: <About />,
        path: "about",
        errorElement: <Error />,
      },
      {
        element: <Product />,
        path: "product/:id",
        errorElement: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
