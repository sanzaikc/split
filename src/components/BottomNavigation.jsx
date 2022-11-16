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

import { ThemeContainer } from "./shared/ThemeContainer";

export const BottomNavigation = () => {
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
      path: "/my-splits",
    },
    {
      name: "Add New",
      path: "/",
    },
    {
      name: "Pending",
      icon: WalletIcon,
      activeIcon: WalletFilledIcon,
      path: "/pending",
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
            <React.Fragment key={index}>
              {index !== 2 ? (
                <NavLink to={el.path}>
                  {({ isActive }) => (
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
                        className={`text-[10px] ${
                          !isActive && "text-gray-500"
                        }`}
                      >
                        {el.name}
                      </div>
                    </div>
                  )}
                </NavLink>
              ) : (
                <div className="grid place-content-center">
                  <div className="h-10 w-10 rounded-full border-2 border-white"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </ThemeContainer>
  );
};
