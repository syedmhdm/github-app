import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box, CircularProgress, Grid, Paper } from "@mui/material";
import { useUsersContext } from "./UsersContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function UserDetails() {
  const { userDetails, userDetailsIsLoading: isLoading } = useUsersContext();
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        // minWidth: "650px",
      }}
    >
      <Paper
        sx={{
          width: "80%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
        elevation={6}
      >
        <ArrowBackIcon
          onClick={handleBackClick}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "-2rem",
            left: "0",
          }}
        />
        {/* <Box sx={{ display: "flex", alignItems: "center" }}> */}
        <Avatar
          alt={`Avatar of ${userDetails.login}`}
          src={userDetails.avatar_url}
          sx={{ width: 150, height: 150, margin: "1rem", marginTop: "2rem" }}
        />
        {/* @{userDetails.login}
        </Box> */}
        <Grid container textAlign={"left"} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Name: {userDetails.name ? userDetails.name : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Followers: {userDetails.followers ? userDetails.followers : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Following: {userDetails.following ? userDetails.following : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Company: {userDetails.company ? userDetails.company : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Bio: {userDetails.bio ? userDetails.bio : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            E-mail:{" "}
            {userDetails.email ? (
              <Link to={"mailto:" + userDetails.email}>
                {userDetails.email}
              </Link>
            ) : (
              "n/a"
            )}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Location: {userDetails.location ? userDetails.location : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Blog:{" "}
            {userDetails.blog ? (
              <Link to={userDetails.blog} target='_blank'>
                {userDetails.blog}
              </Link>
            ) : (
              "n/a"
            )}
          </Grid>

          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Public Repos:{" "}
            {userDetails.public_repos ? userDetails.public_repos : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Username: {userDetails.login ? userDetails.login : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            Twitter:{" "}
            {userDetails.twitter_username
              ? userDetails.twitter_username
              : "n/a"}
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            sx={{ lineBreak: "anywhere", padding: "1rem" }}
          >
            GitHub:{" "}
            {userDetails.html_url ? (
              <Link to={userDetails.html_url} target='_blank'>
                {userDetails.html_url}
              </Link>
            ) : (
              "n/a"
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default UserDetails;
