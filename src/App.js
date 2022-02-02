import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'go swimming',
        day: 'Feb 1st at 8am',
        reminder: false,
        category: 'health'
    },
    {
        id: 2,
        text: 'Blockchain 101 course',
        day: 'Feb 3rd at 8am',
        reminder: true,
        category: 'learning'
    },
    {
        id: 3,
        text: 'React course',
        day: 'Feb 2nd at 8am',
        reminder: false,
        category: 'learning'
    },
])

// delete task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  console.log("deleted task", id)
}

//toggle reminder
const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header title='Task' />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'no tasks'}
    </div>
  );
}

export default App;
