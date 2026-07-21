import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { createTask } from "../services/taskService";

function AddTask() {

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {

      await createTask(data);

      alert("Task Added Successfully");

      navigate("/");

    } catch (err) {

      console.error(err);

      alert("Failed to add task.");

    }
  };

  return (
    <div className="card shadow p-4">

      <h3 className="mb-4">Add New Task</h3>

      <TaskForm onSubmit={handleSubmit} />

    </div>
  );
}

export default AddTask;