import React from 'react'

const NewTask = () => {
  return (
    <div className="h-full w-[300px] bg-blue-400 rounded-xl shadow-lg border-2 border-blue-500 overflow-hidden">
      {/* Priority & Date Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-red-500/20">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white uppercase tracking-wide">High</span>
        <span className="text-sm font-medium text-white">Feb 20, 2025</span>
      </div>

      {/* Task Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-2">Make a YouTube Video</h2>
        <p className="text-red-100 text-sm mb-4 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, adipisci quos praesentium inventore nesciunt eveniet enim illo accusantium earum sequi.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-colors shadow-md">
            Mark Completed
          </button>
          <button className="flex-1 bg-white hover:bg-gray-100 text-red-600 py-2 px-3 rounded-lg text-sm font-semibold transition-colors shadow-md">
            Mark Failed
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewTask