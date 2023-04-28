import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function home({stocks}) {
  return (
    <div className="App">
      {stocks.map((stock) => (
        <div key={stock.id}>
          <ul>
            <li>
              <Link style={{color:"white"}} to={`/details/${stock.id}`}>
                <div>{stock.name}</div>{" "}
                <div className={`card-tag ${stock.color}`}>{stock.tag}</div>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
