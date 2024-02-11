import { Outlet } from "react-router-dom";
import { UsersContextProvider } from "./UsersContext";

function Layout() {
  return (
    <UsersContextProvider>
      <Outlet />
    </UsersContextProvider>
  );
}

export default Layout;
