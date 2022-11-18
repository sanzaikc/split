import React from "react";

import { Outlet } from "react-router-dom";

import BottomNavigation from "components/BottomNavigation";

const HomeLayout = () => {
  return (
    <>
      <Outlet />

      <BottomNavigation />
    </>
  );
};

export default HomeLayout;
