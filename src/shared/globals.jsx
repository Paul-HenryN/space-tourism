import Home from "../routes/Home";
import Destination from "../routes/Destination";
import Crew from "../routes/Crew";
import Technology from "../routes/Technology";

export const dataFile = "./src/data.json";

export const pages = [
  {
    name: "Home",
    path: "/space-tourism",
    element: <Home />,
  },
  {
    name: "Destination",
    path: "/space-tourism/destination",
    element: <Destination />,
  },
  {
    name: "Crew",
    path: "/space-tourism/crew",
    element: <Crew />,
  },
  {
    name: "Technology",
    path: "/space-tourism/technology",
    element: <Technology />,
  },
];
