import { useState } from "react";
import Task from "./Components/Task";

export default function App(){
  //statefull array
  //tasks is a  
  const[tasks, setTasks] = useState([
    {id: 1, title: "Write Lesson Plan", completed: false},
    {id: 2, title: "Review MongoDB Quiz", completed: false}
  ]);

  // immutable updates to the map
  const toggleTask = id =>{
    setTasks(curr => curr.map (t => t.id === id? {...t, completed: !t.completed} : t));
  };

  return(
    <div className="min-h-screen bg-gray-500 p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">Task Dashboard</h1>
      {tasks.map(task =>(
        <Task key={task.id} {...task} onToggle={toggleTask}/>
      ))}
    </div>
  )
}