import { Outlet } from "react-router-dom";

import BottomNavigation from "../components/BottomNavigation";
import ThemeContainer from "../components/shared/ThemeContainer";

const Root = () => {
  return (
    <ThemeContainer>
      <div className="relative h-screen min-h-screen w-screen  tracking-wide">
        <div className="container relative mx-auto flex h-full max-w-md flex-col shadow-lg">
          <div className="flex-grow bg-gray-200 dark:bg-slate-700">
            <Outlet />
          </div>

          <BottomNavigation />
        </div>
      </div>
    </ThemeContainer>
  );
};

export default Root;
