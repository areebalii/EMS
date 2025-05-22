import CreateTask from "../others/CreateTask";
import Headers from "../others/Headers";
import AllTasks from "./AllTasks";

const AdminDashboard = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-100 p-10'>
      <Headers />
      <CreateTask />
     <AllTasks />
    </div>
  )
}

export default AdminDashboard;