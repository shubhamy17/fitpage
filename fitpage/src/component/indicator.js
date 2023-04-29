import React, { useEffect, useState } from "react";
import "../App.css";
import { useLocation } from "react-router";

const Indicator = () => {
  // Get the location data and destructure the necessary properties
  let location = useLocation();
  let { study_type, default_value } = location.state.data;

  // Set the initial state for the input value
  let [value, setValue] = useState("");

  // Set the default value when the component mounts
  useEffect(() => {
    setValue(default_value);
  }, []);

  return (
    <div className="App">
      {/* Render the study type as a header */}
      <div className="indicator-header">{study_type.toUpperCase()}</div>

      {/* Render the sub-header */}
      <div className="indicator-sub-header">Set Parameters</div>

      {/* Render the input field and label */}
      <div className="indicator-variable-section">
        <div className="left">Period</div>
        <input
          type="text"
          name=""
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="right"
        />
      </div>
    </div>
  );
};

export default Indicator;
