import Home from "../routes/Home";
import Destination from "../routes/Destination";
import Crew from "../routes/Crew";

export const dataFile = "./src/data.json";

export const pages = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Destination",
    path: "/destination",
    element: <Destination />,
  },
  {
    name: "Crew",
    path: "/crew",
    element: <Crew />,
  },
  {
    name: "Technology",
    path: "/technology",
  },
];
