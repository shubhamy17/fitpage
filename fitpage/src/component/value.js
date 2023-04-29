import React from "react";
import "../App.css";
import { useLocation } from "react-router";

const Value = () => {
  let location = useLocation();
  return (
    <div className="App">
      {/* Map over the values and display them in a list */}
      {location.state.value.map((elm, index) => (
        <div key={index}>
          <ul>
            <li>{elm}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Value;
