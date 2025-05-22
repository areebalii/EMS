import Headers from '../others/Headers'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../Task-list/TaskList'

function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Headers />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard