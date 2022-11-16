import React from "react";

const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-200 text-slate-700 dark:bg-slate-800 dark:text-gray-400">
      {children}
    </div>
  );
};

export default ThemeContainer;
