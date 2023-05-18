import React, { useState } from "react";
import { Props } from "../types";
import { v4 as uuidv4 } from "uuid";

export const TextInputComponent: React.FC<Props> = ({
  addNewTask,
  editTask,
  task,
  edit,
}) => {
  const [newTask, setNewTask] = useState({
    title: task.title ?? "",
    descriptions: task.description ?? "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.name === "task-title") {
      setNewTask((prev) => {
        return { ...prev, title: target.value };
      });
    } else {
      setNewTask((prev) => {
        return { ...prev, descriptions: target.value };
      });
    }
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (edit) {
      editTask({
        id: task.id,
        title: newTask.title,
        description: newTask.descriptions,
        state: task.state,
      });
    } else {
      addNewTask({
        id: uuidv4(),
        title: newTask.title,
        description: newTask.descriptions,
        state: "TODO",
      });
    }
    setNewTask({
      title: "",
      descriptions: "",
    });
  };

  return (
    <form
      onSubmit={(event) => {
        handleOnSubmit(event);
      }}
    >
      <input
        type="text"
        className="form-input"
        placeholder="Enter new task title..."
        name="task-title"
        value={newTask.title}
        onChange={(event) => {
          handleOnChange(event);
        }}
      ></input>
      <input
        type="text"
        className="form-input"
        placeholder="Enter new task description"
        name="task-description"
        value={newTask.descriptions}
        onChange={(event) => {
          handleOnChange(event);
        }}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
