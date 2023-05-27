import Home from "../routes/Home";
import Destination from "../routes/Destination";

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
  },
  {
    name: "Technology",
    path: "/technology",
  },
];

export const destinations = ["Moon", "Mars", "Europa", "Titan"];
