import { useDrag } from "react-dnd";
import { formatDate } from "../../utils/formatDate";

function Task({ item, bg }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`flex flex-col bg-white rounded-lg shadow-md mx-auto max-w-md p-5 mb-4 cursor-grab ${
        isDragging ? "opacity-25" : "opacity-100"
      }`}
    >
      <div className={`${bg} w-1/4 rounded-md h-3`}></div>
      <h2 className="text-xl font-bold text-black mb-2">{item.task}</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
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
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-main-color mx-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-[#A6AFFF]">{formatDate(item.createdAt)}</span>
        </div>
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          className="rounded-full"
          style={{ height: "40px", width: "40px" }}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Task;
