import commonPartial from "./partials.js";
import { setHeader } from "./auth.js";
import { getAll } from "../models/events.js";
export function getHome(ctx) {
  setHeader(ctx);
  getAll().then((res) => {
    console.log(res.docs[0].data());
    const events = res.docs.map((x) => (x = { ...x.data(), id: x.id }));
    ctx.loadPartials(commonPartial).partial("./view/home.hbs");
  });
}
