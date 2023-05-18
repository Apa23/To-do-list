export interface Props {
    addNewTask: (n: Tasks) => void
    editTask: (n: Tasks) => void
    task: Tasks
    edit: boolean
  }

  
export interface Tasks{
    id: string;
    title: string,
    description?: string
    state: string,
  }