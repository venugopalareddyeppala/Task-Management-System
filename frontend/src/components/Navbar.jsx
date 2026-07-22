import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Task Management System
        </Link>

        <div className="ms-auto">
          <Link to="/" className="btn btn-light btn-sm me-2">
            Home
          </Link>

          <Link to="/add" className="btn btn-warning btn-sm">
            Add Task
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
