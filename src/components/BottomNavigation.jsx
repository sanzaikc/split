import { HomeIcon } from "../assets/svg";

export const BottomNavigation = () => {
  return (
    <div className="absolute bottom-0 w-full flex-shrink-0 bg-sky-200">
      <div className="grid grid-cols-5">
        {new Array(5).fill(null).map((_, index) => (
          <div
            className="flex cursor-pointer flex-col items-center space-y-1 py-2"
            key={index}
          >
            <HomeIcon />
            <div className="text-xs">Home</div>
          </div>
        ))}
      </div>
    </div>
  );
};
