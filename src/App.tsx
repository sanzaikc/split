import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./layouts/Root";
import About from "./screens/About";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import MySplits from "./screens/MySplits";
import NotFound from "./screens/NotFound";
import PendingSplits from "./screens/PendingSplits";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="my-splits" element={<MySplits />} />
        <Route path="pending" element={<PendingSplits />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
