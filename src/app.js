import { add } from "./utils.js";
import ListItem from "./list-item/index.js";

const VALUES = ["ONE", "TWO", "THREE"];

document.addEventListener("DOMContentLoaded", function () {
  // Аналог $(document).ready(function(){
  // Если должен быть найден один элемент
  //   if (
  //     (e = document.querySelector(
  //       "#form_error_message_frontend + div > div:last-child label"
  //     )) !== null
  //   )
  //     e.classList.add("last"); // Аналог выборки и присвоения класса
  //   // Если элементов будет много
  //   Array.prototype.forEach.call(
  //     document.querySelectorAll(
  //       "#form_error_message_frontend + div > div:last-child label"
  //     ),
  //     function (e) {
  //       e.classList.add("last");
  //     }
  //   );

  const root = document.querySelector("#root");

  if (!root) return;

  VALUES.forEach((val) => {
    root.appendChild(ListItem({ name: val }));
  });
});