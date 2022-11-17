import React from "react";

import { NavLink } from "react-router-dom";

import {
  FolderFilledIcon,
  FolderIcon,
  HomeFilledIcon,
  HomeIcon,
  PersonCircleIcon,
  PersonIcon,
  PlusCircleIcon,
  WalletFilledIcon,
  WalletIcon,
} from "assets/svg";

import ThemeContainer from "./shared/ThemeContainer";

type NavElement = {
  name: string;
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  path: string;
};

const BottomNavigation = () => {
  const bottomNavigations: NavElement[] = [
    {
      name: "Home",
      icon: <HomeIcon className="h-6 w-6" />,
      activeIcon: <HomeFilledIcon className="h-6 w-6" />,
      path: "/",
    },
    {
      name: "My Splits",
      icon: <FolderIcon className="h-6 w-6" />,
      activeIcon: <FolderFilledIcon className="h-6 w-6" />,
      path: "/splits/my",
    },
    {
      name: "Add New",
      icon: <PlusCircleIcon className="h-10 w-10" />,
      path: "/splits/create",
    },
    {
      name: "Pending",
      icon: <WalletIcon className="h-6 w-6" />,
      activeIcon: <WalletFilledIcon className="h-6 w-6" />,
      path: "/splits/pending",
    },
    {
      name: "Profile",
      icon: <PersonIcon className="h-6 w-6" />,
      activeIcon: <PersonCircleIcon className="h-6 w-6" />,
      path: "/profile",
    },
  ];

  return (
    <ThemeContainer>
      <div
        className="absolute bottom-0 w-full flex-shrink-0 bg-inherit"
        style={{ boxShadow: "0 -3px 5px -5px currentcolor" }}
      >
        <div className="grid grid-cols-5">
          {bottomNavigations.map(({ name, path, icon, activeIcon }, index) => (
            <NavLink to={path} key={index}>
              {({ isActive }) =>
                index !== 2 ? (
                  <div
                    className={`flex cursor-pointer flex-col items-center space-y-1  py-2 ${
                      isActive && "bg-gray-200 dark:bg-slate-700"
                    }`}
                  >
                    <>{isActive ? activeIcon : icon}</>

                    <div
                      className={`text-[10px] ${!isActive && "text-gray-500"}`}
                    >
                      {name}
                    </div>
                  </div>
                ) : (
                  <div className="grid h-full w-full place-content-center">
                    {icon}
                    {/* <div className="h-10 w-10 rounded-full border-2 border-white"></div> */}
                  </div>
                )
              }
            </NavLink>
          ))}
        </div>
      </div>
    </ThemeContainer>
  );
};

export default BottomNavigation;
