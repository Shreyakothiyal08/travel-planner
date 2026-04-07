import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Plan from "./Plan";
import Trips from "./Trips";
import About from "./About";


function App() {
  const [trips, setTrips] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <h1>🌍 Travel Planner</h1>

        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/plan">Plan</Link> | 
          <Link to="/trips">Trips</Link> | 
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan trips={trips} setTrips={setTrips} />} />
          <Route path="/trips" element={<Trips trips={trips} setTrips={setTrips} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;