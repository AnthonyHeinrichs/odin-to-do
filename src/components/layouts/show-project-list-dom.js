import createElement from "../../utils/create-element";
import checklistIcon from "../../assets/checklist.png";
import filterTasks from "../filter-tasks";
import updateFilterDom from "../update-filter-dom";

export default function ShowProjectListDom(tasks, projects, currentPage, name) {
  const singleProjectDiv = createElement({
    element: "div",
    className: "singleProject",
  });
  const projectIcon = createElement({
    element: "img",
    domSrc: checklistIcon,
    className: "checklistIcon",
  });
  const project = createElement({
    element: "button",
    className: "project",
    domText: name,
  });

  const projectListDiv = document.getElementById('createdProjects')
  const options = document.getElementById("taskProject");
  singleProjectDiv.appendChild(projectIcon);
  singleProjectDiv.appendChild(project);
  projectListDiv.appendChild(singleProjectDiv);
  project.addEventListener("click", () => {
    currentPage = project.innerHTML;
    filterTasks(tasks, currentPage, projects);
    updateFilterDom(currentPage);
    options.value = currentPage;
  });
};