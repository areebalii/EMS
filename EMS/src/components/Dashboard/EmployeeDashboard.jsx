import Headers from '../others/Headers'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../Task-list/TaskList'

function EmployeeDashboard({ data, changeUser }) {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Headers changeUser={changeUser}  data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard