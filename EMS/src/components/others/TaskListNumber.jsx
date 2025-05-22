
function TaskListNumber() {
  return (
    <div className="flex mt-10 screen justify-between gap-5">
      <div className="w-[45%] rounded-xl py-6 px-9 bg-red-400">
        <h2 className="text-3xl">0</h2>
        <h3 className="text-xl">New Tasks</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-blue-400">
        <h2 className="text-3xl">0</h2>
        <h3 className="text-xl">New Tasks</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-green-400">
        <h2 className="text-3xl">0</h2>
        <h3 className="text-xl">New Tasks</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl">0</h2>
        <h3 className="text-xl">New Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumber