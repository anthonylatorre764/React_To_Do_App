import { useState } from "react";
import Form from "./Form/Form.tsx";
import TaskGroup from "./TaskGroup/TaskGroup.tsx";
import { Task } from "./TaskItem/TaskItem.tsx";



const App = () => {
  const [taskItems, setTaskItems] = useState<Task[]>([]);

  const[newTask, setNewTask] = useState<Task>({task: ''})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setNewTask({task: event.target.value})
  }

  const handleAdd = (event: React.FormEvent) : void => {
    event.preventDefault()
    setTaskItems([...taskItems, newTask])
    console.log(`${newTask.task} was successfully added to your list`)
  }

  const removeItem = (event: React.MouseEvent, task: Task) : void => {
    event.preventDefault()
    setTaskItems(taskItems.filter((t) => t != task))
  }

  return (
    <>
      <Form handleAdd={handleAdd} handleChange={handleChange}/>
      <TaskGroup taskItems={taskItems} removeItem={removeItem}/>
    </>
  );
};

export default App;
