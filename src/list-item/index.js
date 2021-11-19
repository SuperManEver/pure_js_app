import * as css from "./styles.module.css";

function ListItem({ name }) {
  const container = document.createElement("div");

  container.className = css.root;

  container.appendChild(document.createTextNode(name));

  return container;
}

export default ListItem;
