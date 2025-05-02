import TaskCard from "./TaskCard";

export default function KanbanColumn({ title, tasks }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 min-h-[400px]">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}
