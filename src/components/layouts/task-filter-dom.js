import createElement from "../../utils/create-element";
import "../styles/task-filters.css";
import FolderIcon from "../../assets/folder.png";
import DayIcon from "../../assets/calendar-checkmark.png";
import WeekIcon from "../../assets/full-calendar.png";
import CompletedIcon from "../../assets/complete.png";

// Functions purpose: Create dom elements for task buttons
export default function TaskFiltersDom() {
  // Create main div for filters
  const mainFilterDiv = createElement({
    element: "div",
    className: "allFilters",
  });

  const filterTitle = createElement({
    element: "h2",
    className: "filterListTitle",
    domText: "Filters",
  });
  mainFilterDiv.appendChild(filterTitle);

  // Create div for first filter icon & button and append to main filters div
  const allTasksDiv = createElement({ element: "div", className: "filter" });
  mainFilterDiv.appendChild(allTasksDiv);

  // Create folder icon and append to all tasks div
  const folderIcon = createElement({
    element: "img",
    className: "filterIcon",
    domSrc: FolderIcon,
    domAlt: "folder",
  });
  allTasksDiv.appendChild(folderIcon);

  // Create all tasks button and append to all tasks div
  const allTasksButton = createElement({
    element: "button",
    className: "filterButton",
    domId: "allTasks",
    domText: "All tasks",
  });
  allTasksDiv.appendChild(allTasksButton);

  // Create div for second filter icon & button and append to main filters div
  const dayTasksDiv = createElement({ element: "div", className: "filter" });
  mainFilterDiv.appendChild(dayTasksDiv);

  // Create day icon and append to all tasks div
  const dueTodayIcon = createElement({
    element: "img",
    className: "filterIcon",
    domSrc: DayIcon,
    domAlt: "Day calendar",
  });
  dayTasksDiv.appendChild(dueTodayIcon);

  // Create due today button and append to all tasks div
  const dayTasksButton = createElement({
    element: "button",
    className: "filterButton",
    domId: "dueToday",
    domText: "Due today",
  });
  dayTasksDiv.appendChild(dayTasksButton);

  // Create div for third filter icon & button and append to main filters div
  const weekTasksDiv = createElement({ element: "div", className: "filter" });
  mainFilterDiv.appendChild(weekTasksDiv);

  // Create due this week icon and append to all tasks div
  const dueWeekIcon = createElement({
    element: "img",
    className: "filterIcon",
    domSrc: WeekIcon,
    domAlt: "Week calendar",
  });
  weekTasksDiv.appendChild(dueWeekIcon);

  // Create due this week button and append to all tasks div
  const dueWeekButton = createElement({
    element: "button",
    className: "filterButton",
    domId: "dueThisWeek",
    domText: "Due this week",
  });
  weekTasksDiv.appendChild(dueWeekButton);

  const completedTasksDiv = createElement({
    element: "div",
    className: "filter",
  });
  mainFilterDiv.appendChild(completedTasksDiv);

  const completedIcon = createElement({
    element: "img",
    className: "filterIcon",
    domSrc: CompletedIcon,
    domAlt: "Trash bag",
  });
  completedTasksDiv.appendChild(completedIcon);

  const completedButton = createElement({
    element: "button",
    className: "filterButton",
    domId: "completedTasksFilter",
    domText: "Complete",
  });
  completedTasksDiv.appendChild(completedButton);

  // return the main div so it can be added to main page layout
  return mainFilterDiv;
}
