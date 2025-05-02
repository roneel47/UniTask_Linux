import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function TaskCard({ task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-blue-100 p-2 mb-2 rounded-md shadow-sm cursor-grab"
    >
      <p className="font-medium">{task.title}</p>
      <p className="text-sm text-gray-600">{task.description}</p>
    </div>
  );
}
