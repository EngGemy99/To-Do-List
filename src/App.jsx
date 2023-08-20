import ToDos from "./Context/ToDo";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToDoTask } from "./config/axiosConfig";
import Navbar from "./Components/Navbar";
import OptionBar from "./Components/OptionBar";
import SideCard from "./Components/SideCard";
import Lists from "./Components/Lists/Lists";
function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  let displayedTasks = tasks;
  if (searchTerm) {
    displayedTasks = tasks.filter((task) =>
      task.task.toLowerCase().includes(searchTerm)
    );
  }

  const fetchData = async () => {
    try {
      const { data } = await ToDoTask.get("toDos");
      setTasks(data.toDos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <ToDos.Provider value={{ tasks: displayedTasks, setTasks, handleSearch }}>
        <Navbar />
        <div className="bg-[#F7F8FF] min-h-screen">
          <div className="flex pt-10 w-[98%] gap-4 mx-auto items-start">
            <SideCard />
            <main className="col-span-12 md:col-span-7 flex-1">
              <OptionBar />
              <Lists />
            </main>
          </div>
        </div>
      </ToDos.Provider>
    </DndProvider>
  );
}

export default App;
