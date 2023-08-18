import React, { memo, useContext, useState, useCallback, useRef } from "react";
import Tasks from "../Context/ToDo";
import { ToDoTask } from "../config/axiosConfig";
import { toast } from "react-toastify";

const AddToDo = memo(() => {
  const { setTasks } = useContext(Tasks);
  const taskRef = useRef(null);
  const descriptionRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleAdd = useCallback(async () => {
    const task = taskRef.current.value;
    const description = descriptionRef.current.value;

    if (!task.trim() || !description.trim()) {
      toast.error("Task and description are required", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }
    setLoading(true);
    try {
      const { data } = await ToDoTask.post("toDos", {
        task,
        description,
      });
      setTasks((prev) => [...prev, data.toDo]);
      toast.success("Tasks Added Successfully", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    } finally {
      taskRef.current.value = "";
      descriptionRef.current.value = "";
      setLoading(false);
    }
  }, [setTasks]);

  return (
    <div className="flex flex-col justify-center items-center w-full mb-10">
      <input
        ref={taskRef}
        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="task"
        type="text"
        placeholder="Task"
      />
      <textarea
        ref={descriptionRef}
        className="shadow appearance-none border rounded w-1/2 h-20 mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        placeholder="Description"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
        type="button"
        onClick={handleAdd}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </div>
  );
});

export default AddToDo;
