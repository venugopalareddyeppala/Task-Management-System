import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TaskForm from "../components/TaskForm";

import {
  getTask,
  updateTask,
} from "../services/taskService";

function EditTask() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [task, setTask] = useState(null);

  useEffect(() => {

    const fetchTask = async () => {

      const res = await getTask(id);

      setTask(res.data);

    };

    fetchTask();

  }, [id]);

  const handleSubmit = async (data) => {

    await updateTask(id, data);

    alert("Task Updated Successfully");

    navigate("/");

  };

  if (!task) {

    return <h4>Loading...</h4>;

  }

  return (

    <div className="card shadow p-4">

      <h3 className="mb-4">Edit Task</h3>

      <TaskForm
        initialData={task}
        onSubmit={handleSubmit}
      />

    </div>

  );
}

export default EditTask;