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
          element: <Navigate to={"/users"} />,
          path: "/",
        },
        {
          element: <UserList />,
          path: "/users",
        },
        {
          path: "/users/:username",
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
