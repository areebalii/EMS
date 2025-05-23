import AcceptTask from "./AcceptTask"

function TaskList({ data }) {
    return (
        <div id="taskList" className=' w-full py-5 mt-16 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
           <AcceptTask />
            <div className="h-full flex-shrink-0 w-[300px] bg-blue-400 p-5">
                <div className="flex justify-between item-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4>20 feb 2025</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold ">make a youtube video</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, adipisci quos praesentium inventore nesciunt eveniet enim illo accusantium earum sequi.</p>
            </div>
            <div className="h-full flex-shrink-0 w-[300px] bg-green-400 p-5">
                <div className="flex justify-between item-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4>20 feb 2025</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold ">make a youtube video</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, adipisci quos praesentium inventore nesciunt eveniet enim illo accusantium earum sequi.</p>
            </div>
            <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 p-5">
                <div className="flex justify-between item-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                    <h4>20 feb 2025</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold ">make a youtube video</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, adipisci quos praesentium inventore nesciunt eveniet enim illo accusantium earum sequi.</p>
            </div>
        </div>
    )
}

export default TaskList