import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersContext = createContext();

function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [usersIsLoading, setUsersIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [userDetailsIsLoading, setUserDetailsIsLoading] = useState(false);
  const { username } = useParams();

  useEffect(function () {
    async function getUsers() {
      setUsersIsLoading(true);
      const resp = await fetch(`https://api.github.com/users`);
      const data = await resp.json();
      setUsers(data);
      setUsersIsLoading(false);
    }
    getUsers();
  }, []);

  useEffect(
    function () {
      if (username === undefined) return;
      async function getUserDetails() {
        setUserDetailsIsLoading(true);
        const resp = await fetch(`https://api.github.com/users/${username}`);
        const data = await resp.json();
        setUserDetails(data);
        setUserDetailsIsLoading(false);
      }
      getUserDetails();
    },
    [username]
  );

  return (
    <UsersContext.Provider
      value={{
        users,
        usersIsLoading,
        userDetails,
        userDetailsIsLoading,
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
