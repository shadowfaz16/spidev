
const tasks = [
    {
        id: 1,
        text: 'go swimming',
        day: 'Feb 1st at 8am',
        remminder: false,
    },
    {
        id: 2,
        text: 'Blockchain 101 course',
        day: 'Feb 3rd at 8am',
        remminder: true,
    },
    {
        id: 3,
        text: 'React course',
        day: 'Feb 2nd at 8am',
        remminder: false,
    },
]

const Tasks = () => {
  return (
  <>
    {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
  </>
  )
}

export default Tasks;
