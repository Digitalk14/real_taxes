import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
