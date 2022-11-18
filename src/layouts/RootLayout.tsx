import { Outlet } from "react-router-dom";

import ThemeContainer from "components/shared/ThemeContainer";

const RootLayout = () => {
  return (
    <ThemeContainer>
      <div className="relative h-screen min-h-screen w-screen select-none">
        <div className="container relative mx-auto flex h-full max-w-md flex-col shadow-2xl">
          <div className="flex-grow bg-gray-200 dark:bg-slate-700">
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeContainer>
  );
};

export default RootLayout;
