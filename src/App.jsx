import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Destination from "./routes/Destination";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
