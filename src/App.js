import "./App.css";
import CitySearchForm from "./CitySearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CitySearchForm defaultCity="Somerset West" />
      </div>
    </div>
  );
}

export default App;
