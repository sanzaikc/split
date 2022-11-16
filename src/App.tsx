import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// routers
import SplitRouter from "./routers/SplitRouter";

// screens
import Root from "./layouts/Root";
import About from "./screens/About";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="/splits/*" element={<SplitRouter />} />
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
