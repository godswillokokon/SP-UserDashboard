import Cookies from "js-cookie";
import db from "./db";

const Auth = {
  user: {},
  token: null,
  isLoggedIn: () => (Auth.token ? true : false),
  init: () => {
    const User = Cookies.getJSON("User");
    if (User) {
      db.setItem("User", User);
      Cookies.remove("User");
    }
    return db
      .getItem("User")
      .then((User) => {
        Auth.token = User.token;
        Auth.user = User.user;
      })
      .catch((err) => console.error(err));
  },
  logoutRedirect: () => {
    window.location.assign("https://spreadprolimited.com/");
  },

  logout: () => {
    db.removeItem("User").then(() => {
      Auth.logoutRedirect();
    });
  },
};

export default Auth;
