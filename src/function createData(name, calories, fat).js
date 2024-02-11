function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

// avatar_url: "https://avatars.githubusercontent.com/u/1?v=4";
// events_url: "https://api.github.com/users/mojombo/events{/privacy}";
// followers_url: "https://api.github.com/users/mojombo/followers";
// following_url: "https://api.github.com/users/mojombo/following{/other_user}";
// gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}";
// gravatar_id: "";
// html_url: "https://github.com/mojombo";
// id: 1;
// login: "mojombo";
// node_id: "MDQ6VXNlcjE=";
// organizations_url: "https://api.github.com/users/mojombo/orgs";
// received_events_url: "https://api.github.com/users/mojombo/received_events";
// repos_url: "https://api.github.com/users/mojombo/repos";
// site_admin: false;
// starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}";
// subscriptions_url: "https://api.github.com/users/mojombo/subscriptions";
// type: "User";
// url: "https://api.github.com/users/mojombo";
