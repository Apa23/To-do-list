import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Button from '@mui/material/Button';

interface Props {
  task: String;
}

export const TaskCardComponent: React.FC<Props> = ({ task }) => {
  return (
    <div>
      <p>{task}</p>
      <Button variant="outlined">Outlined</Button>
      <DeleteForeverOutlinedIcon />
    </div>
  );
};
