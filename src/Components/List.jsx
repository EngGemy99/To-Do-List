import { useContext, useEffect, useState } from "react";
import SectionList from "./SectionList";
import Tasks from "../Context/ToDo";

function List() {
  const { tasks } = useContext(Tasks);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [toDos, setToDos] = useState([]);
  const [inProcess, setInProcess] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    setFilteredTasks([...tasks]);
  }, [tasks]);
  useEffect(() => {
    let toDosTasks = filteredTasks.filter((task) => task.state === "todo");
    let inProcessTasks = filteredTasks.filter(
      (task) => task.state === "inprogress"
    );
    let completedTasks = filteredTasks.filter(
      (task) => task.state === "complete"
    );
    setToDos(toDosTasks);
    setInProcess(inProcessTasks);
    setCompleted(completedTasks);
  }, [filteredTasks]);
  const states = ["todo", "inprogress", "complete"];
  return (
    <div className="bg-slate-500 w-3/4 p-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
        id="search"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          if (e.target.value !== "") {
            const filteredData = tasks.filter((item) =>
              item.task.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredTasks(filteredData);
          } else {
            setFilteredTasks(tasks);
          }
        }}
      />
      <div className="flex flex-col md:flex-row justify-between items-baseline md:items-baseline  w-full mt-8 px-4 md:px-0 gap-3">
        {states.map((state) => (
          <SectionList
            key={state}
            state={state}
            toDos={toDos}
            inProcess={inProcess}
            completed={completed}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
