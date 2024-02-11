import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={"/github-app/users"} />,
          path: "/github-app",
        },
        {
          element: <UserList />,
          path: "/github-app/users",
        },
        {
          path: "/github-app/users/:username",
          element: <UserDetails />,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
