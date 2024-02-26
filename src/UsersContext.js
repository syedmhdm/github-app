import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersContext = createContext();

function UsersContextProvider({ children }) {
  const [usersToGet, setUsersToGet] = useState("initialUsers");
  const [users, setUsers] = useState({
    initialUsers: [],
  });
  const [usersIsLoading, setUsersIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [userDetailsIsLoading, setUserDetailsIsLoading] = useState(false);
  const { username } = useParams();

  useEffect(function () {
    async function getUsers() {
      setUsersIsLoading(true);
      const resp = await fetch(`https://api.github.com/users`);
      const data = await resp.json();
      setUsers({ initialUsers: data });
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

  // const resp = await fetch(
  //   `https://api.github.com/search/users?q=${username}+location:france`
  // );
  // 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
  // {
  //   headers: {
  //     Auth: "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",
  //   },
  // }
  async function searchByUsernameAndLocation(username = "", location = "") {
    try {
      if (username.trim() === "" && location.trim() === "") {
        setUsersToGet("initialUsers");
        return;
      }
      if (users[username + location]) {
        setUsersToGet(username + location);
        return;
      }

      const resp = await fetch(
        `https://api.github.com/search/users?q=${username}+location:${location}`
      );
      if (!resp.ok) throw new Error("Error get users");
      const data = await resp.json();
      setUsers((prev) => {
        return {
          ...prev,
          [username + location]: [...data.items],
        };
      });
      setUsersToGet(username + location);
    } catch (e) {}
  }

  const newUsers = users[usersToGet];

  return (
    <UsersContext.Provider
      value={{
        users: newUsers,
        usersIsLoading,
        userDetails,
        userDetailsIsLoading,
        searchByUsernameAndLocation,
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
