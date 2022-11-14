import { Outlet } from "react-router-dom";

import { BottomNavigation } from "../components/BottomNavigation";

const Root = () => {
  return (
    <div className="h-screen w-screen bg-sky-200">
      <div className="container relative mx-auto flex h-full max-w-md flex-col bg-white shadow-lg">
        <div className="flex-grow bg-red-200 px-4 shadow-inner">
          <Outlet />
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Root;
