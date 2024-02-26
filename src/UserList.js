import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useUsersContext } from "./UsersContext";
import { Avatar, Box, Button, CircularProgress, Input } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StickyHeadTable() {
  const [usernameInput, setUsernameInput] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {
    users,
    usersIsLoading: isLoading,
    searchByUsernameAndLocation,
  } = useUsersContext();
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleUserItemClick(username) {
    navigate(`/github-app/users/${username}`);
  }

  function handleSearch() {
    searchByUsernameAndLocation(usernameInput, location);
  }

  return (
    <>
      <Input
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        type='text'
        placeholder='username'
      />
      <Input
        type='text'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='location'
      />
      <Button onClick={handleSearch}>search</Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper sx={{ width: "500px", overflow: "hidden" }} elevation={6}>
          <TableContainer style={{ height: `calc(${100}vh - ${110}px)` }}>
            <Table
              stickyHeader
              aria-label='sticky table'
              style={{ cursor: "default" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: 170 }}>Avatar</TableCell>
                  <TableCell style={{ minWidth: 170 }}>Username</TableCell>
                </TableRow>
              </TableHead>
              {
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={2} style={{ border: "none" }}>
                        <Box
                          sx={{
                            paddingTop: "10rem",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <CircularProgress />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ) : (
                    users
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((user) => {
                        return (
                          <TableRow
                            hover
                            role='checkbox'
                            onClick={() => handleUserItemClick(user.login)}
                            key={user.id}
                          >
                            <TableCell
                              style={{
                                paddingTop: ".7rem",
                                paddingBottom: ".7rem",
                              }}
                            >
                              <Avatar
                                alt={`Avatar of ${user.login}`}
                                src={user.avatar_url}
                              />
                            </TableCell>
                            <TableCell
                              style={{
                                paddingTop: ".7rem",
                                paddingBottom: ".7rem",
                              }}
                            >
                              @{user.login}
                            </TableCell>
                          </TableRow>
                        );
                      })
                  )}
                </TableBody>
              }
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
