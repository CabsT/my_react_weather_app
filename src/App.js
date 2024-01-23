import "./App.css";
import SearchCityForm from "./SearchCityForm";

function App() {
  return (
    <div>
      <div className="App mb-0">
        <div className="container">
          <SearchCityForm defaultCity="Somerset West" />
        </div>
      </div>
      <footer className="fw-bold text-center mt-0">
        This project was coded by Charné Teichert and is{" "}
        <a
          className="link"
          href="https://github.com/CabsT/my_react_weather_app"
        >
          open-sourced on GitHub{" "}
        </a>
        and{" "}
        <a className="link" href="/">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
