import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTasks = () => {
  const [authData] = useContext(AuthContext)

  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg shadow-lg mt-5">
      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 mb-3 px-4 py-3 bg-gray-800 rounded-t-lg">
        <h2 className="font-semibold text-gray-300">Employee Name</h2>
        <h3 className="font-semibold text-gray-300">New Tasks</h3>
        <h5 className="font-semibold text-gray-300">Active Tasks</h5>
        <h5 className="font-semibold text-gray-300">Completed</h5>
        <h5 className="font-semibold text-gray-300">Failed</h5>
      </div>

      {/* Table Body */}
      <div className="max-h-96 overflow-y-auto">
        {authData?.employees?.map((employee) => (
          <div 
            key={employee.id}
            className="grid grid-cols-5 gap-4 items-center px-4 py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 even:bg-gray-800 rounded mb-2"
          >
            <div className="flex items-center">
              <span className="font-medium text-white">{employee.firstName} {employee.lastName}</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-bold min-w-[28px]">{employee.taskCounts.active}</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-yellow-500 text-white text-sm px-3 py-1 rounded-full font-bold min-w-[28px]">{employee.taskCounts.newTask}</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full font-bold min-w-[28px]">{employee.taskCounts.completed}</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded-full font-bold min-w-[28px]">{employee.taskCounts.failed}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTasks