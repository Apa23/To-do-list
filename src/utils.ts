import { keyBy } from "lodash";

const TaskStatus = {
  Todo: "TODO",
  Doing: "DOING",
  Complete: "COMPLETED",
};

const TaskStatusConfig = [
  {
    status: TaskStatus.Todo,
    label: "To do",
    color: "white",
  },
  {
    status: TaskStatus.Doing,
    label: "Doing",
    color: "yellow",
  },
  {
    status: TaskStatus.Complete,
    label: "Done",
    color: "green",
  },
];

export const TaskStatusConfigBy = keyBy(TaskStatusConfig, 'status');

