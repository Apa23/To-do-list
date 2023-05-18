import { TaskCardComponent } from "./TaskCardComponent";

interface Props {
  taskList: String[];
}

let taskListCount = 0;

export const TaskListComponent: React.FC<Props> = ({ taskList }) => {
  return (
    <div className="task-list">
      {taskList.map((taskListItem) => {
        taskListCount += 1;
        return (
          <TaskCardComponent
            task={taskListItem}
            key={`taskListElement-${taskListCount}`}
          />
        );
      })}
    </div>
  );
};
