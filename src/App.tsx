import { useState } from "react";
import { TextInputComponent } from "./components/TextInputComponent";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Modal,
  Paper,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TASKS as tasks } from "./Data";
import { Tasks } from "./types";
import { TaskStatusConfigBy as taskStatus } from "./utils";
import "./App.css";

function App() {
  const [editTask, setEditTask] = useState<Tasks>({
    id: "",
    title: "",
    description: "",
    state: "",
  });
  const [taskList, setTaskList] = useState<Tasks[]>(tasks);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setEditTask({
      id: "",
      title: "",
      description: "",
      state: "",
    });
    setOpen(false);
  };

  const addNewList = (task: Tasks) => {
    setTaskList((prev: Tasks[]) => {
      return [...prev, task];
    });
  };

  const editList = (editTask: Tasks) => {
    const newList = taskList.map((task) => {
      if (task.id === editTask.id) {
        return editTask;
      }
      return task;
    });
    setTaskList(newList);
    setEdit(false);
    handleClose();
  };

  const handleDeleteTask = (id: string) => {
    const newList = taskList.filter((task) => task.id !== id);
    setTaskList(newList);
  };

  const handleEditTask = (id: string) => {
    setEdit(true);
    const editTask = taskList.filter((task) => task.id === id);
    setEditTask(editTask[0]);
    handleOpen();
  };

  const handleStatusChanged = (taskChange: Tasks) => {;
     const newList = taskList.map((task) => {
      if (task.id === taskChange.id) {
        if(taskChange.state==='TODO'){
          taskChange.state='DOING'
         }else if(taskChange.state==='DOING'){
          taskChange.state='COMPLETED'
         }
        return taskChange;
      }
      return task;
    });
    setTaskList(newList);
  };

  return (
    <Container id="main">
      <Button variant="outlined" onClick={handleOpen} id="new-task-btn">
        + New Task
      </Button>

      <List>
        {taskList.map((task) => (
          <ListItem
            key={`task-id:${task.id}`}
            secondaryAction={
              <>
                <Button
                  id="edit-status-btn"
                  onClick={() => handleStatusChanged(task)}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      background: taskStatus[task.state].color,
                    }}
                  >
                    {" "}
                    {taskStatus[task.state].label}{" "}
                  </Paper>
                </Button>
                <IconButton
                  edge="end"
                  id="edit-task-btn"
                  onClick={() => handleEditTask(task.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  id="delete-task-btn"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))}
      </List>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="new-task-modal"
      >
        <Box>
          <h2>New Task</h2>
          <TextInputComponent
            addNewTask={addNewList}
            editTask={editList}
            task={editTask}
            edit={edit}
          />
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
