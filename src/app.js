import { add } from "./utils.js";
import ListItem from "./list-item/index.js";

const VALUES = ["ONE", "TWO", "THREE"];

document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector("#root");

  if (!root) return;

  VALUES.forEach((val) => {
    root.appendChild(ListItem({ name: val }));
  });
});
