import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const toggleComplete = taskId => {
    const toggledTasks = tasks.map(task =>
      task.id === taskId
      ?
      {
        ...task,
        isComplete: !task.isComplete
      }
      :
      task
    );
    setTasks(toggledTasks);
  }

  const addTask = e => {
    e.preventDefault();
    // if(!title || !description) return;

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title,
        description,
        isComplete: false
      }
    ])

    setTitle('')
    setDescription('')
  }

  const removeTask = taskId => {
    const confrimRemoval = window.confirm('Are you sure you wanna delete this item?');
    if (!confrimRemoval) return;
    // if(confrimRemoval) {
      const tasksAfterRemoval = tasks.filter(task =>
        task.id !== taskId
      )
      setTasks(tasksAfterRemoval);
    // }
  }

  // console.log(tasks)

  return (
    <div className="px-4 py-10 max-w-md mx-auto mt-20">

      <h3 className="font-semibold text-2xl">
        Local State Task Management
      </h3>
      <form
        onSubmit={addTask}
        className="flex flex-col items-center"
      >
        <div>
          <input
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title"
            className="border border-gray-300 px-3 py-1 rounded focus:outline-none"
          />
        </div>
        <div>
          <input
            name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Enter Description"
            className="border border-gray-300 px-3 py-1 rounded my-3"
          />
        </div>
        <button type="submit" className="ml-2 bg-green-500 text-white px-2 py-1">
          Add
        </button>
      </form>

      {
        tasks?.map(task =>
        <ul className="mt-4" key={task.id}>
            <li className="flex justify-between items-center mb-2">
              <div
              >
                <h3 className={`${task.isComplete ? 'line-through' : ''} font-semibold text-xl`}>
                  {task.title}
                </h3>
                <p>
                  {task.description}
                </p>
              </div>
              <button
                onClick={() => toggleComplete(task.id)}
                className='cursor-pointer bg-amber-200 p-2'
              >
                Mark as Complete
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="bg-red-500 text-white px-1.5 py-0.75"
              >
                x
              </button>
            </li>
        </ul>
        )
      }
    </div>
  );
}