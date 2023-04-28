import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./card.css";
import { groupBy } from "../helper";

const Card = ({ stocks }) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    let data = groupBy(stocks, "id");
    if (data?.[id]?.length > 0) {
      setData(data?.[id]?.[0]);
    }
  }, [id]);

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
              <><p style={{fontSize:"15px"}}>{criterion.text} </p>
              {index===data.criteria.length-1 ? null:<p style={{fontSize:"8px"}}>and</p> }
              </>
            ) : (
                <p>
                {/* {criterion.text.replace(
                  /\$(\d)/g,
                  (_, number) => criterion.variable[`$${number}`].type==="value" ?  criterion.variable[`$${number}`]?.values?.map((el)=>console.log("eeeeee",el)) :null
                )} */}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
