import commonPartial from "./partials.js";
import { registerUser, login } from "../models/user.js";
import { saveUserInfo } from "./auth.js";
export function getLogin(ctx) {
  ctx.loadPartials(commonPartial).partial("./view/user/login.hbs");
}

export function getProfile(ctx) {
  ctx.loadPartials(commonPartial).partial("./view/user/profile.hbs");
}

export function getRegister(ctx) {
  ctx.loadPartials(commonPartial).partial("./view/user/register.hbs");
}

export function postRegister(ctx) {
  const { username, password, rePassword } = ctx.params;
  if (password !== rePassword) {
    throw new Error("Passwords do not match!");
  }
  registerUser(username, password)
    .then((res) => {
      saveUserInfo(res.user.email);
      ctx.redirect("#/home");
    })
    .catch((e) => console.log(e));
}

export function postLogin(ctx) {
  const { username, password, rePassword } = ctc.params;
  login(username, password)
    .then((res) => {
      saveUserInfo(res.user.email);
      ctx.redirect("#/home.js");
    })
    .catch((e) => console.log(e));
}

export function getLogout(ctx) {
  sessionStorage.clear();
  logout()
    .then((res) => {
      ctx.redirect("#/login");
    })
    .catch((e) => console.log(e));
}
