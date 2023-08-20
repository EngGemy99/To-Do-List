import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Tasks from "../../Context/ToDo";
function Lists() {
  const { tasks } = useContext(Tasks);
  const [taskTypes, setTaskTypes] = useState({
    toDos: [],
    inProcess: [],
    completed: [],
  });

  useEffect(() => {
    setTaskTypes({
      toDos: tasks.filter((task) => task.state === "todo"),
      inProcess: tasks.filter((task) => task.state === "inprogress"),
      completed: tasks.filter((task) => task.state === "complete"),
    });
  }, [tasks]);

  const states = ["todo", "inprogress", "complete"];

  return (
    <div className="mt-5 flex gap-3 flex-wrap items-baseline">
      {states.map((state) => (
        <Card
          key={state}
          state={state}
          toDos={taskTypes.toDos}
          inProcess={taskTypes.inProcess}
          completed={taskTypes.completed}
        />
      ))}
      <div>
        <button className="flex-2 flex items-center mainBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Add another list</span>
        </button>
      </div>
    </div>
  );
}

export default Lists;
