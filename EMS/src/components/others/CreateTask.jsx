const CreateTask = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Create New Task</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - All inputs except description */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Task Title</label>
                <input
                  type="text"
                  placeholder="Make a UI Design"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Due Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Assign To</label>
                  <input
                    type="text"
                    placeholder="Employee name"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input 
                  type="text" 
                  placeholder="disign, dev, etc" 
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>

            {/* Right Column - Only description */}
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="" 
                id="" 
                rows={10} 
                cols={25}
                className="w-full h-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Full width button below both columns */}
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTask