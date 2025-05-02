import { useEffect, useState } from "react";
import axios from "axios";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useAuth } from "../hooks/useAuth";
import KanbanColumn from "./KanbanColumn";

const columns = ["To Be Started", "In Progress", "Completed", "Submitted"];

export default function Dashboard() {
  const { user, logout } = useAuth();

  const [name, setName] = useState(""); // ✅ State to hold name
  const [tasks, setTasks] = useState({
    "To Be Started": [],
    "In Progress": [],
    "Completed": [],
    "Submitted": [],
  });

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    // ✅ Get name from localStorage
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tasks/${user.usn}`);
        const grouped = {
          "To Be Started": [],
          "In Progress": [],
          "Completed": [],
          "Submitted": [],
        };
        res.data.forEach((task) => grouped[task.status].push(task));
        setTasks(grouped);
      } catch (err) {
        console.error("Error fetching tasks", err);
      }
    };

    if (user?.usn) {
      fetchTasks();
    }
  }, [user?.usn]);

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    let sourceCol, destCol;

    for (let col of columns) {
      if (tasks[col].some((task) => task._id === active.id)) {
        sourceCol = col;
      }
      if (tasks[col].some((task) => task._id === over.id)) {
        destCol = col;
      }
    }

    if (!sourceCol || !destCol) return;

    const sourceTasks = [...tasks[sourceCol]];
    const destTasks = [...tasks[destCol]];

    const draggedIndex = sourceTasks.findIndex((t) => t._id === active.id);
    const draggedTask = { ...sourceTasks[draggedIndex], status: destCol };

    sourceTasks.splice(draggedIndex, 1);
    destTasks.unshift(draggedTask); // or push() to bottom

    const newTasks = {
      ...tasks,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks,
    };

    setTasks(newTasks);

    try {
      await axios.put(`http://localhost:5000/api/tasks/${draggedTask._id}`, {
        status: draggedTask.status,
      });
    } catch (err) {
      console.error("Failed to update task", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-200 to-blue-300 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Hi, {name}!</h2>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((col) => (
            <SortableContext
              key={col}
              items={tasks[col].map((task) => task._id)}
              strategy={verticalListSortingStrategy}
            >
              <KanbanColumn
                title={col}
                tasks={tasks[col]}
                className="bg-white p-4 rounded-xl shadow-lg"
              />
            </SortableContext>
          ))}
        </div>
      </DndContext>
    </div>
  );
}
