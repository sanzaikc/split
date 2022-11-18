import { Route, Routes } from "react-router-dom";

import CreateSplitScreen from "screens/split/CreateSplitScreen";
import MySplitsScreen from "screens/MySplitsScreen";
import PendingSplitsScreen from "screens/PendingSplitsScreen";
import NotFound from "screens/NotFound";

const SplitRouter = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateSplitScreen />} />
      <Route path="/pending" element={<PendingSplitsScreen />} />
      <Route path="/my" element={<MySplitsScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SplitRouter;
