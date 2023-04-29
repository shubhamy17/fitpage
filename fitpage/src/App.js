import "./App.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./component/card";
import stocks from "./data.json";
import Indicator from "./component/indicator";
import Value from "./component/value";

function App() {
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
