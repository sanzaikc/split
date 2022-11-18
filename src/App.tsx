import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// screens
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeLayout from "layouts/HomeLayout";
import CreateSplitScreen from "screens/split/CreateSplitScreen";
import MySplitsScreen from "screens/MySplitsScreen";
import PendingSplitsScreen from "screens/PendingSplitsScreen";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route element={<HomeLayout />} errorElement={<NotFound />}>
        <Route index element={<HomeScreen />} />
        <Route path="my-splits" element={<MySplitsScreen />} />
        <Route path="pending" element={<PendingSplitsScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
      </Route>
      <Route path="create" element={<CreateSplitScreen />} />
      <Route path="about" element={<AboutScreen />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
