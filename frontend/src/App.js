import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container mt-4">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/add" element={<AddTask />} />

          <Route path="/edit/:id" element={<EditTask />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;