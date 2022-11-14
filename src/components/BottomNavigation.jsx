import { Link } from "react-router-dom";
import { FolderIcon, HomeIcon, PersonIcon, WalletIcon } from "../assets/svg";

export const BottomNavigation = () => {
  const bottomNavigations = [
    {
      name: "Home",
      icon: HomeIcon,
      path: "/home",
    },
    {
      name: "My Splits",
      icon: FolderIcon,
      path: "/my-splits",
    },
    {
      name: "Add New",
      path: "/",
    },
    {
      name: "Pending",
      icon: WalletIcon,
      path: "/pending",
    },
    {
      name: "Profile",
      icon: PersonIcon,
      path: "/profile",
    },
  ];
  return (
    <div className="absolute bottom-0 w-full flex-shrink-0 bg-sky-200">
      <div className="grid grid-cols-5">
        {bottomNavigations.map((el, index) =>
          index !== 2 ? (
            <Link to={el.path} key={index}>
              <div className="flex cursor-pointer flex-col items-center space-y-1 py-2">
                <el.icon className="h-6 w-6" />

                <div className="text-xs">{el.name}</div>
              </div>
            </Link>
          ) : (
            <div className="grid place-content-center">
              <div className="h-10 w-10 rounded-full border-2 border-white"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
