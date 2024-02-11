import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useUsersContext } from "./UsersContext";

function UserDetails() {
  const { userDetails } = useUsersContext();
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }

  return (
    <div>
      <button onClick={handleBackClick}>back</button>
      <br />
      Username: @{userDetails.login}
      <br />
      <Avatar
        alt={`Avatar of ${userDetails.login}`}
        src={userDetails.avatar_url}
      />
      name: {userDetails.name}
    </div>
  );
}

export default UserDetails;
