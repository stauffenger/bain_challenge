import './App.css';

import { React, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");
  const [showDistance, setShowDistance] = useState(false);
  const [errorLog, setErrorLog] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:2002/locations/calculateDistance?'+ new URLSearchParams({
      source: source,
      destination: destination,
    }).toString())
    .then(response => {
        setShowDistance(false);
        setShowErrors(false);
        if (response.ok) {
          return response.json().then((response) => {
            setDistance(response.km);
            setShowDistance(true);
          });
        } 
        return response.json().then((response => {
          let message = "";
          if (response?.source_alternatives) {
            message += `The source address is ambiguous, try one of these options:\n${response.source_alternatives.map(str => ` "${str}"`)}\n`;
          }
          
          if (response?.destination_alternatives) {
            message += `The destination address is ambiguous, try one of these options:\n${response.destination_alternatives.map(str => ` "${str}"`)}\n`;
          }
          
          if (response?.addresses) {
            message += `No match found for:${response.addresses.map(str => ` "${str}"`)}\n`;
          }
          
          setErrorLog(message);
          setShowErrors(true);
        }));
      });
      };
      
      const handleReset = () => {
        setSource("");
        setDestination("");
        setDistance("");
        setShowDistance(false);
        setErrorLog("");
        setShowErrors(false);
  };

  const ErrorMessage = (props) => {
    const text = props.text;
    return text.split('\n').map(str => <div style={{ color: 'red', textAlign: 'left'}}><p>{str}</p></div>)
  }

  const Distance = () => (
    <div style={{ color: 'green'}}>
      The distance is {parseFloat(distance).toFixed(2)} km
    </div>
  )

  const ErrorLog = () => (
    <div>
      <ErrorMessage text={errorLog} />
    </div>
   )

  return (
      <div className="App">
        <h1>Distance Calculator</h1>
        <fieldset>
            <form action="#" method="get">
                <label for="source">
                    Source Address*
                </label>
                <input
                    type="text"
                    name="source"
                    id="source"
                    value={source}
                    onChange={(e) =>
                        setSource(e.target.value)
                    }
                    placeholder="Enter the source address"
                    required
                />
                <label for="destination">Destination Address*</label>
                <input
                    type="text"
                    name="destination"
                    id="destination"
                    value={destination}
                    onChange={(e) =>
                        setDestination(e.target.value)
                    }
                    placeholder="Enter the destination address"
                    required
                />
                { showErrors ? <ErrorLog /> : null }
                { showDistance ? <Distance /> : null }
                <button
                    type="reset"
                    value="reset"
                    onClick={() => handleReset()}
                >
                    Reset
                </button>
                <button
                    type="submit"
                    value="Submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Calculate
                </button>
                <br/>
                  <Link to="/history"><button>
                    Queries History
                </button></Link>
            </form>
        </fieldset>
      </div>
  );
}

export default App;
