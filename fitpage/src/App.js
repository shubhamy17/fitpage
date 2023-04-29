import "./App.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./component/card";
import Indicator from "./component/indicator";
import Value from "./component/value";
import {getStockData} from "./helper"
import { useEffect, useState } from "react";

function App() {
  let [stocks,setStocks]=useState([]);
  useEffect(()=>{
    getStockData().then((res)=>{
      setStocks(res.data)
    })
  },[])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home stocks={stocks}/>}
          />
          <Route
            path="/details/:id"
            element={<Card stocks={stocks}/>}
          />
          <Route
            path="/details/indicator"
            element={<Indicator />}
          />
           <Route
            path="/details/param"
            element={<Value />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
