import "./App.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./component/card";
import stocks from "./data.json";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
