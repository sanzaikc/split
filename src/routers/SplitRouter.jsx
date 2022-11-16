import { Route, Routes } from "react-router-dom";

import CreateSplit from "../screens/split/CreateSplit";
import MySplits from "../screens/MySplits";
import NotFound from "../screens/NotFound";
import PendingSplits from "../screens/PendingSplits";

const SplitRouter = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateSplit />} />
      <Route path="/pending" element={<PendingSplits />} />
      <Route path="/my" element={<MySplits />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SplitRouter;
