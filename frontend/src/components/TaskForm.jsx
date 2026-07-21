import { useState, useEffect } from "react";

function TaskForm({ onSubmit, initialData }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: ""
  });

  useEffect(() => {

    if (initialData) {

      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        priority: initialData.priority || "Medium",
        status: initialData.status || "Pending",
        dueDate: initialData.dueDate
          ? initialData.dueDate.substring(0, 10)
          : ""
      });

    }

  }, [initialData]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);

  };

  return (

    <form onSubmit={handleSubmit}>

      <div className="mb-3">

        <label>Task Title</label>

        <input
          type="text"
          name="title"
          className="form-control"
          value={formData.title}
          onChange={handleChange}
          required
        />

      </div>

      <div className="mb-3">

        <label>Description</label>

        <textarea
          name="description"
          className="form-control"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />

      </div>

      <div className="row">

        <div className="col-md-4">

          <label>Priority</label>

          <select
            name="priority"
            className="form-control"
            value={formData.priority}
            onChange={handleChange}
          >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>

          </select>

        </div>

        <div className="col-md-4">

          <label>Status</label>

          <select
            name="status"
            className="form-control"
            value={formData.status}
            onChange={handleChange}
          >

            <option>Pending</option>
            <option>Completed</option>

          </select>

        </div>

        <div className="col-md-4">

          <label>Due Date</label>

          <input
            type="date"
            name="dueDate"
            className="form-control"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />

        </div>

      </div>

      <button
        className="btn btn-primary mt-4"
        type="submit"
      >
        Save Task
      </button>

    </form>

  );
}

export default TaskForm;