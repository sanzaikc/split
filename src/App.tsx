import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layouts/Root";
import About from "./screens/About";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import MySplits from "./screens/MySplits";
import NotFound from "./screens/NotFound";
import PendingSplits from "./screens/PendingSplits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "home",
        element: <Home />,
      },
      {
        path: "my-splits",
        element: <MySplits />,
      },
      {
        path: "pending",
        element: <PendingSplits />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
