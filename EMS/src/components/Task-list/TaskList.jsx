import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

function TaskList({ data }) {
  return (
    <div id="taskList" className=' w-full py-5 mt-16 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
     {data.tasks.map((elem) => {
       if(elem.active) {
        return <AcceptTask />
       }
       if(elem.newTask) {
        return <NewTask />
       }
       if(elem.completed) {
        return <CompleteTask />
       }
       if(elem.failed) {
        return <FailedTask />
       }
     })}
    </div>
  )
}

export default TaskList