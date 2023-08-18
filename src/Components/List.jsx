import React, { useContext, useEffect, useState } from "react";
import SectionList from "./SectionList";
import Tasks from "../Context/ToDo";

function List() {
  const { tasks } = useContext(Tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [taskTypes, setTaskTypes] = useState({
    toDos: [],
    inProcess: [],
    completed: [],
  });

  useEffect(() => {
    setFilteredTasks([...tasks]);
  }, [tasks]);

  useEffect(() => {
    setTaskTypes({
      toDos: filteredTasks.filter((task) => task.state === "todo"),
      inProcess: filteredTasks.filter((task) => task.state === "inprogress"),
      completed: filteredTasks.filter((task) => task.state === "complete"),
    });
  }, [filteredTasks]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.trim()) {
      setFilteredTasks(tasks);
    } else {
      const lowerCaseSearch = searchValue.toLowerCase();
      setFilteredTasks(
        tasks.filter((task) =>
          task.task.toLowerCase().includes(lowerCaseSearch)
        )
      );
    }
  };

  const states = ["todo", "inprogress", "complete"];

  return (
    <div className="bg-slate-500 w-3/4 p-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
        id="search"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      <div className="flex flex-col md:flex-row justify-between items-baseline md:items-baseline  w-full mt-8 px-4 md:px-0 gap-3">
        {states.map((state) => (
          <SectionList
            key={state}
            state={state}
            toDos={taskTypes.toDos}
            inProcess={taskTypes.inProcess}
            completed={taskTypes.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
