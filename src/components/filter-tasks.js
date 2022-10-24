import { format, isThisWeek } from "date-fns";
import manageTasks from "./manage-tasks";

export default function filterTasks(tasks, page, projects) {
  const dateToday = format(Date.now(), "yyyy-MM-dd");
  const options = document.getElementById("taskProject");

  // Show all tasks
  if (page === "main") {
    let allUncompleteTasks = tasks.filter((el) => {
      return el.complete == false;
    });
    manageTasks(allUncompleteTasks, projects);
    options.value = "No project";
  } else if (page === "due today") {
    let tasksDueToday = tasks.filter((el) => {
      return el.due == dateToday && el.complete == false;
    });
    manageTasks(tasksDueToday, projects);
    options.value = "No project";
  } else if (page === "due this week") {
    let tasksDueThisWeek = tasks.filter((el) => {
      return isThisWeek(Date.parse(el.due), 1) && (el.complete == false);
    });
    manageTasks(tasksDueThisWeek, projects);
    options.value = "No project";
  } else if (page === "complete") {
    let completedTasks = tasks.filter((el) => {
      return el.complete == true;
    });
    manageTasks(completedTasks, projects);
  } else {
    let tasksByProject = tasks.filter((el) => {
      return el.project === page && el.complete == false;
    });
    manageTasks(tasksByProject, projects);
    options.value = page;
  }
}
