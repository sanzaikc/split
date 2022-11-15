import { Outlet } from "react-router-dom";

import { BottomNavigation } from "../components/BottomNavigation";

const Root = () => {
  return (
    <div className="relative h-screen min-h-screen w-screen  bg-blue-200 tracking-wide text-slate-700 dark:bg-slate-800 dark:text-gray-400">
      <div className="container relative mx-auto flex h-full max-w-md flex-col shadow-lg">
        <div className="flex-grow bg-transparent px-4 shadow-inner">
          <Outlet />
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Root;
