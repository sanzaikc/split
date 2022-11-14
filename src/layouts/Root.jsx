import { Outlet } from "react-router-dom";

import { BottomNavigation } from "../components/BottomNavigation";

const Root = () => {
  return (
    <div className="h-screen w-screen bg-sky-200">
      <div className="container relative mx-auto flex h-full max-w-md flex-col bg-white">
        <div className="flex-grow overflow-scroll px-4 shadow-inner">
          <Outlet />
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Root;
