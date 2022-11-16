import React from "react";

import { NavLink } from "react-router-dom";

import {
  FolderFilledIcon,
  FolderIcon,
  HomeFilledIcon,
  HomeIcon,
  PersonCircleIcon,
  PersonIcon,
  WalletFilledIcon,
  WalletIcon,
} from "../assets/svg";

import ThemeContainer from "./shared/ThemeContainer";

const BottomNavigation = () => {
  const bottomNavigations = [
    {
      name: "Home",
      icon: HomeIcon,
      activeIcon: HomeFilledIcon,
      path: "/",
    },
    {
      name: "My Splits",
      icon: FolderIcon,
      activeIcon: FolderFilledIcon,
      path: "/splits/my",
    },
    {
      name: "Add New",
      path: "/splits/create",
    },
    {
      name: "Pending",
      icon: WalletIcon,
      activeIcon: WalletFilledIcon,
      path: "/splits/pending",
    },
    {
      name: "Profile",
      icon: PersonIcon,
      activeIcon: PersonCircleIcon,
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
          {bottomNavigations.map((el, index) => (
            <NavLink to={el.path} key={index}>
              {({ isActive }) =>
                index !== 2 ? (
                  <div
                    className={`flex cursor-pointer flex-col items-center space-y-1  py-2 ${
                      isActive && "bg-gray-200 dark:bg-slate-700"
                    }`}
                  >
                    {isActive ? (
                      <el.activeIcon className="h-6 w-6" />
                    ) : (
                      <el.icon className="h-6 w-6" />
                    )}

                    <div
                      className={`text-[10px] ${!isActive && "text-gray-500"}`}
                    >
                      {el.name}
                    </div>
                  </div>
                ) : (
                  <div className="grid h-full w-full place-content-center">
                    <div className="h-10 w-10 rounded-full border-2 border-white"></div>
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
