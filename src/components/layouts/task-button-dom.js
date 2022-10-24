import createElement from "../../utils/create-element";
import "../styles/new-task-button.css";
import PlusIcon from "../../assets/plus.png";

export default function NewTaskDom() {
  // Create new div for all new tasks
  const newTaskDiv = createElement({
    element: "div",
    className: "newTask",
    domId: "newTaskDiv",
  });

  // Create new icon img and append to div for all new tasks
  const newTaskIcon = createElement({
    element: "img",
    className: "newTaskIcon",
    domSrc: PlusIcon,
    domAlt: "plus icon",
  });
  newTaskDiv.appendChild(newTaskIcon);

  // Create new task button and append to div for all new tasks
  const newTaskButton = createElement({
    element: "button",
    className: "newTaskButton",
    domId: "newTask",
    domText: "Add task",
  });
  newTaskDiv.appendChild(newTaskButton);

  // Return new task div with appended elements
  return newTaskDiv;
}
