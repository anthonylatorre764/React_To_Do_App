import './TaskGroup.css'
import type { Task } from '../TaskItem/TaskItem'

interface Props {
  taskItems: Task[]
  removeItem: (event: React.MouseEvent, task: Task) => void
}

const TaskGroup = ({ taskItems, removeItem }: Props) => {

  return (
    <>
        
        <div id='list_container'>
          <h2>To Do List:</h2>
          <ul>
              {taskItems.map((t, index) => (
                <li key={index}> <input type="checkbox"/> <div className='task_x_btn'>{t.task} <button className='xBtn' onClick={(e) => removeItem(e, t)}>X</button></div></li>
              ))}
          </ul>  
        </div>
    </>
  )
}

export default TaskGroup