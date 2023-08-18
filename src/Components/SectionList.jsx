import React, { useContext } from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
import Tasks from "../Context/ToDo";
import { ToDoTask } from "../config/axiosConfig";

function SectionList({ state, toDos, inProcess, completed }) {
  const { setTasks } = useContext(Tasks);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToSection = async ({ item }) => {
    try {
      await ToDoTask.patch(`toDos/${item._id}`, {
        state,
      });
      setTasks((prev) => {
        const newTasks = prev.map((prevTask) => {
          if (prevTask._id === item._id) {
            return { ...prevTask, state };
          }
          return prevTask;
        });
        return newTasks;
      });
    } catch (error) {
      console.log(error);
    }
  };
  let bg, count, tasksToMap;
  if (state == "todo") {
    bg = "bg-gray-400";
    count = toDos.length;
    tasksToMap = toDos;
  } else if (state == "inprogress") {
    bg = "bg-purple-400";
    count = inProcess.length;
    tasksToMap = inProcess;
  } else {
    bg = "bg-green-400";
    count = completed.length;
    tasksToMap = completed;
  }
  return (
    <div
      ref={drop}
      style={{
        minHeight: "150px",
      }}
      className={`w-full md:w-1/3 bg-gray-100 rounded shadow-lg mb-5 ${
        isOver ? "bg-slate-400" : ""
      } `}
    >
      <h2
        className={`font-bold text-lg mb-4 p-4 ${bg} text-center text-white flex justify-center items-center`}
      >
        <span>{state} </span>
        <span className="inline-block bg-white text-slate-800 rounded-full px-2 py-1 text-xs ml-2">
          {count}
        </span>
      </h2>
      {tasksToMap.map((item, index) => (
        <Task key={item.description + index} item={item} />
      ))}
    </div>
  );
}

export default SectionList;
