import { Outlet } from "react-router-dom";
import { UsersContextProvider } from "./UsersContext";

function Layout() {
  return (
    <div>
      <UsersContextProvider>
        <Outlet />
      </UsersContextProvider>
    </div>
  );
}

export default Layout;
