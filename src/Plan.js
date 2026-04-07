import PropTypes from "prop-types";
import { useState } from "react";

export default function Plan({ trips, setTrips }) {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");

  const addTrip = () => {
    if (!source || !destination || !budget) return;

    setTrips([...trips, { source, destination, budget }]);

    setSource("");
    setDestination("");
    setBudget("");
  };

  return (
    <div className="container">
      <h2> Plan a Trip</h2>

      <input
        placeholder="From (Source)"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        placeholder="To (Destination)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <button onClick={addTrip}>Add Trip</button>
    </div>
  );
}


Plan.propTypes={
  trips: PropTypes.array,
  setTrips: PropTypes.func
  };
