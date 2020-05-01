import db from "./db";

const Auth = {
  user: {},
  token: null,
  isLoggedIn: () => (Auth.token ? true : false),

  init: () => {
    return db
      .getItem("User")
      .then((User) => {
        Auth.token = User.token;
        Auth.user = User.user;
      })
      .catch((err) => console.error(err));
  },

  logoutRedirect: () => {
    window.location.assign("/");
  },

  logout: () => {
    db.removeItem("token", Auth.token);
    Auth.logoutRedirect();
  },
};

export default Auth;
