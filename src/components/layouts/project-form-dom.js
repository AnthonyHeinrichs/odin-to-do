import createElement from "../../utils/create-element";

export default function ProjectFormDom() {
  const addProjectButton = document.getElementById("newProject");
  const newProjectContainer = document.getElementById("newProjectsContainer");
  const projectForm = createElement({
    element: "form",
    domId: "projectForm",
    className: "hidden",
  });
  newProjectContainer.insertAdjacentElement("beforebegin", projectForm);

  const newProjectName = createElement({
    element: "input",
    domType: "text",
    domId: "projectName",
    domName: "projectName",
    domPlaceholder: "Project name...",
  });
  projectForm.appendChild(newProjectName);

  const buttonDiv = createElement({
    element: "div",
    className: "projectFormButtons",
  });
  projectForm.appendChild(buttonDiv);

  const saveButton = createElement({
    element: "input",
    className: "projectsSaveButton",
    domType: "submit",
    domValue: "Save",
  });
  buttonDiv.appendChild(saveButton);

  const cancelButton = createElement({
    element: "button",
    className: "projectsCancelButton",
    domType: "button",
    domText: "Cancel",
    domId: "projectsCancelBtn",
  });
  buttonDiv.appendChild(cancelButton);

  addProjectButton.addEventListener("click", () => {
    projectForm.classList.remove("hidden");
  });

  cancelButton.addEventListener("click", () => {
    projectForm.classList.add("hidden");
  });
}