import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1>This is root page</h1>
      <Outlet />
    </div>
  );
};

export default Root;
