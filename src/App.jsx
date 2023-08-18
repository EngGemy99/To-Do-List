import AddToDo from "./Components/AddToDo";
import ToDos from "./Context/ToDo";
import { useEffect, useState } from "react";
import List from "./Components/List";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToDoTask } from "./config/axiosConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [tasks, setTasks] = useState([]);
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
      <ToastContainer />
      <ToDos.Provider value={{ tasks, setTasks }}>
        <div className=" bg-slate-400 min-h-screen">
          <div className="flex flex-col justify-center items-center pt-10  w-full">
            <AddToDo />
            <List />
          </div>
        </div>
      </ToDos.Provider>
    </DndProvider>
  );
}

export default App;
