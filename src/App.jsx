import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

import { pages } from "./shared/globals";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: pages,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
