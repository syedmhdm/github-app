import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersContext = createContext();

function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const { username } = useParams();

  useEffect(function () {
    async function getUsers() {
      const resp = await fetch(`https://api.github.com/users`);
      const data = await resp.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  useEffect(
    function () {
      if (username === undefined) return;
      async function getUserDetails() {
        const resp = await fetch(`https://api.github.com/users/${username}`);
        const data = await resp.json();
        setUserDetails(data);
      }
      getUserDetails();
    },
    [username]
  );

  return (
    <UsersContext.Provider
      value={{
        users,
        userDetails,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

function useUsersContext() {
  const context = useContext(UsersContext);
  if (UsersContext === undefined)
    throw new Error(
      "Cannot Access Users Context Outside Of UsersContextProvider"
    );
  return context;
}

export { UsersContextProvider, useUsersContext };
