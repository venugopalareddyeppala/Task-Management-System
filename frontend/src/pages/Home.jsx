import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import TaskTable from "../components/TaskTable";
import { getTasks, deleteTask } from "../services/taskService";

function Home() {

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this task?")) {
      await deleteTask(id);
      loadTasks();
    }
  };

  return (
    <>
      <Dashboard tasks={tasks} />

      <TaskTable
        tasks={tasks}
        onDelete={handleDelete}
      />
    </>
  );
}

export default Home;