import React, { useContext, useState } from "react";
import Tasks from "../Context/ToDo";
import { ToDoTask } from "../config/axiosConfig";
import { toast } from "react-toastify";

function AddToDo() {
  const { setTasks } = useContext(Tasks);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!task.trim() || !description.trim()) {
      toast.error(" task and description are required", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }
    try {
      setLoading(true);
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
      setTask("");
      setDescription("");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mb-10">
      <input
        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="task"
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <textarea
        className="shadow appearance-none border rounded w-1/2 h-20 mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
        type="button"
        onClick={handleAdd}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add task"}
      </button>
    </div>
  );
}

export default AddToDo;
