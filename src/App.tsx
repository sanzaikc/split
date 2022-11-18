import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// routers
import SplitRouter from "./routers/SplitRouter";

// layouts
import RootLayout from "./layouts/RootLayout";

// screens
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route errorElement={<NotFound />}>
        <Route index element={<HomeScreen />} />
        <Route path="/splits/*" element={<SplitRouter />} />
        <Route path="profile" element={<ProfileScreen />} />
      </Route>
      <Route path="about" element={<AboutScreen />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
