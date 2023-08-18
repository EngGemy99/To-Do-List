import { useDrag } from "react-dnd";

function Task({ item }) {
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
      <h2 className="text-xl font-bold text-black mb-2">{item.task}</h2>
      <p className="text-gray-700 text-base">{item.description}</p>
    </div>
  );
}

export default Task;
