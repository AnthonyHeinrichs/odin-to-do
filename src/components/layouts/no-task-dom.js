import createElement from "../../utils/create-element";
import "../styles/no-tasks.css";

export default function NoTasks() {
  const noTaskDiv = createElement({
    element: "div",
    className: "noTaskContainer",
    domId: "noTask",
  });

  const noTasks = createElement({
    element: "p",
    className: "noTaskText",
    domText: "Hooray! You have no more tasks...",
  });

  noTaskDiv.appendChild(noTasks);

  return noTaskDiv;
}
