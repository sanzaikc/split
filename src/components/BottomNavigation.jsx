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
    <div
      className="absolute bottom-0 w-full flex-shrink-0"
      style={{ boxShadow: "0 -3px 5px -5px currentcolor" }}
    >
      <div className="grid grid-cols-5">
        {bottomNavigations.map((el, index) =>
          index !== 2 ? (
            <NavLink to={el.path} key={index}>
              {({ isActive }) => (
                <div className="flex cursor-pointer flex-col items-center space-y-1 py-2">
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
              )}
            </NavLink>
          ) : (
            <div key={index} className="grid place-content-center">
              <div className="h-10 w-10 rounded-full border-2 border-white"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
