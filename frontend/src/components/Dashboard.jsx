function Dashboard({ tasks }) {

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  return (

    <div className="row mb-4">

      <div className="col-md-3">

        <div className="card text-center shadow">

          <div className="card-body">

            <h5>Total Tasks</h5>

            <h2>{total}</h2>

          </div>

        </div>

      </div>

      <div className="col-md-3">

        <div className="card text-center bg-success text-white shadow">

          <div className="card-body">

            <h5>Completed</h5>

            <h2>{completed}</h2>

          </div>

        </div>

      </div>

      <div className="col-md-3">

        <div className="card text-center bg-warning shadow">

          <div className="card-body">

            <h5>Pending</h5>

            <h2>{pending}</h2>

          </div>

        </div>

      </div>

      <div className="col-md-3">

        <div className="card text-center bg-danger text-white shadow">

          <div className="card-body">

            <h5>High Priority</h5>

            <h2>{highPriority}</h2>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;