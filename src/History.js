import './App.css';
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const History = () => {
  const [distance, setDistance] = useState(null);
  const [showDistance, setShowDistance] = useState(false);
  const [errorLog, setErrorLog] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  
  useEffect(() => {
    getHistory()
  }, []);

  const getHistory = () => {
    fetch('http://localhost:2002/locations/history')
    .then(response => {
      setShowDistance(false);
      setShowErrors(false);
      if (response.ok) {
        return response.json().then((response) => {
          setDistance(response);
          setShowDistance(true);
        });
      } 
      return response.json().then((response => {
        setErrorLog("The API is not available, try again later.");
        setShowErrors(true);
      }));
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getHistory();
  };

  const Distance = () => (
    <div style={{ textAlign: 'left'}}>
      {distance.map((target, index) => {
        return(<div className="Query" key={index}>
          <p>
          <b>Source address:</b> {target.source_address} <br/>
          <b>Destination address:</b> {target.destination_address} <br/>
          <b>Distance:</b> {parseFloat(target.distance).toFixed(2)} km <br/>
          <b>Date:</b> {target.timestamp} <br/>
          </p>
        </div>)
      })}
    </div>
  )

  const ErrorLog = () => (
    <div style={{ color: 'red'}}>
      {errorLog}
    </div>
  )
  return (
    <div className="App">
      <h1>Queries History</h1>
      <fieldset>
        <form>
          <Link to="/"><button>
            Calculate Distances
          </button></Link>
          <button
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
          >
            Refresh
          </button>
          <br/>
          { showErrors ? <ErrorLog /> : null }
          { showDistance ? <Distance /> : null }
        </form>
      </fieldset>
    </div>
  );
};

export default History;