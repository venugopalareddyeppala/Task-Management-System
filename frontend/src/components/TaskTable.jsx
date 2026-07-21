import { Link } from "react-router-dom";

function TaskTable({ tasks, onDelete }) {

  return (

    <table className="table table-bordered table-hover shadow">

      <thead className="table-dark">

        <tr>

          <th>Title</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        {tasks.length === 0 ? (

          <tr>

            <td colSpan="5" className="text-center">

              No Tasks Found

            </td>

          </tr>

        ) : (

          tasks.map((task) => (

            <tr key={task._id}>

              <td>{task.title}</td>

              <td>{task.priority}</td>

              <td>{task.status}</td>

              <td>
                {new Date(task.dueDate).toLocaleDateString()}
              </td>

              <td>

                <Link
                  to={`/edit/${task._id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(task._id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))

        )}

      </tbody>

    </table>

  );
}

export default TaskTable;