import './App.css';
import  stocks from "./data.json"
function App() {
  return (
    <div className="App">
       {stocks.map((stock) => (
        <div key={stock.id}>
          <ul><li><div>{stock.name}</div> <div className={`card-tag ${stock.color}`} >{stock.tag}</div></li></ul>
        
        </div>
      ))}
      
    </div>
  );
}

export default App;





