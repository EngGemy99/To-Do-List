import React, { useContext, useState } from "react";
import Model from "./Model";
import Task from "./Task";
import { ToDoTask } from "../../config/axiosConfig";
import { useDrop } from "react-dnd";
import Tasks from "../../Context/ToDo";

function Card({ state = "todo", toDos, inProcess, completed }) {
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

  const [isAdding, setIsAdding] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  let tasksToMap, bg;
  if (state == "todo") {
    tasksToMap = toDos;
    bg = "bg-[#F2DD54]";
  } else if (state == "inprogress") {
    tasksToMap = inProcess;
    bg = "bg-[#083f88]";
  } else {
    tasksToMap = completed;
    bg = "bg-[#0a8c07]";
  }
  return (
    <div
      ref={drop}
      className={` p-2 rounded-md shadow-md flex-1 min-w-[300px] 
      ${isOver ? "bg-gray-200" : "bg-white"}`}
    >
      <div className="flex justify-between items-center border-b-2 border-main-border mb-3 pb-3">
        <h3 className="font-bold">{state}</h3>
        <button className="p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="16"
            className="font-main-color"
            viewBox="0 0 4 16"
          >
            <g
              id="Group_47"
              data-name="Group 47"
              transform="translate(-608 -147)"
            >
              <circle
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="2"
                cy="2"
                r="2"
                transform="translate(608 147)"
                fill="#4d60ff"
              />
              <circle
                id="Ellipse_6"
                data-name="Ellipse 6"
                cx="2"
                cy="2"
                r="2"
                transform="translate(608 153)"
                fill="#4d60ff"
              />
              <circle
                id="Ellipse_7"
                data-name="Ellipse 7"
                cx="2"
                cy="2"
                r="2"
                transform="translate(608 159)"
                fill="#4d60ff"
              />
            </g>
          </svg>
        </button>
      </div>
      {/* to display tasks */}
      {tasksToMap.map((item, index) => (
        <Task key={item.description + index} item={item} bg={bg} />
      ))}

      {isAdding ? (
        <div>
          <input
            className="border p-2 pb-14  block w-full bg-[#F2F4FF] shadow-sm    sm:text-sm rounded-md placeholder-[#ACB5FF] outline-none"
            type="text"
            placeholder="Enter a title for this card"
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <div className="mt-5">
            <Model state={state} title={cardTitle} setIsAdding={setIsAdding} />
            <button
              className="btn btn-secondary mt-2 ml-2"
              onClick={() => setIsAdding(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.728"
                height="12.728"
                viewBox="0 0 12.728 12.728"
              >
                <g
                  id="Group_54"
                  data-name="Group 54"
                  transform="translate(-418.136 -379.136)"
                >
                  <line
                    id="Line_4"
                    data-name="Line 4"
                    y1="17"
                    transform="translate(430.51 379.49) rotate(45)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    y1="17"
                    transform="translate(430.51 391.51) rotate(135)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex cursor-pointer" onClick={() => setIsAdding(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-main-color"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <span className="ml-2 text-[#7F7F7F]">Add a card</span>
        </div>
      )}
    </div>
  );
}

export default Card;
