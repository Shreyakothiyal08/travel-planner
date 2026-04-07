import PropTypes from "prop-types";

export default function Trips({ trips, setTrips }) {
  const deleteTrip = (index) => {
    const newTrips = trips.filter((_, i) => i !== index);
    setTrips(newTrips);
  };

  return (
    <div className="container">
      <h2>My Trips</h2>

      {trips.length === 0 ? (
        <p>No trips added yet !!!!</p>
      ) : (
        trips.map((t, i) => (
          <div className="card" key={i}>
            <h3>From: {t.source} → To: {t.destination}</h3>
            <p> ₹{t.budget}</p>
            <button onClick={() => deleteTrip(i)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

Trips.propTypes={
  trips: PropTypes.array,
  setTrips: PropTypes.func
};

