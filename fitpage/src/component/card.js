import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./card.css";
import { groupBy } from "../helper";

const Card = ({ stocks }) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  // Group stocks by id and set the data state
  useEffect(() => {
    const data = groupBy(stocks, "id");
    if (data?.[id]?.length > 0) {
      setData(data?.[id][0]);
    }
  }, [id, stocks]);

   // Get the value of a criterion, including any links to details pages
  let getValue = (criterion) => {
    const variables = criterion.variable;
    let array = [];
    criterion.text.split(" ").map((elm) => {
      if (elm.includes("$")) {
        // If the variable is a value, create a link to the param details page
        if (variables[elm].type === "value") {
          const valueArray=[...variables[elm].values]
          let value = (
            <React.Fragment key={elm}>
              <Link
                to="/details/param"
                state={{ value:variables[elm].values[0]< 0 ? valueArray.sort((a,b)=>b-a):valueArray.sort((a,b)=>a-b) }}  // sort array  
              >
                ({variables[elm].values[0]})
              </Link>
            </React.Fragment>
          );
          array.push(value);
        } else {
          // If the variable is an indicator, create a link to the indicator details page
          let value = (
            <React.Fragment key={elm}>
              <Link
                to="/details/indicator"
                 state= {{ default_value: variables[elm].default_value }}
              >
                ({variables[elm].default_value})
              </Link>
            </React.Fragment>
          );
          array.push(value);
        }
      } else {
        // If the element is not a variable, return it as is
        array.push(elm);
      }
    });
     // Return an array of elements as a paragraph with each element separated by a space
    return (
      <p>
        {array.map((elm) => {
          return <span> {elm} </span>;
        })}
      </p>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{data.name}</div>
        <div className={`card-tag ${data.color}`}>{data.tag}</div>
      </div>
      <div className="card-body">
        {data?.criteria?.map((criterion, index) => (
          <div key={index} className="criterion">
            {criterion.type === "plain_text" ? (
              <>
                <p style={{ fontSize: "15px" }}>{criterion.text} </p>
                {index === data.criteria.length - 1 ? null : (
                  <p style={{ fontSize: "8px" }}>and</p>
                )}
              </>
            ) : (
              <p style={{ fontSize: "15px" }}>{getValue(criterion)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
