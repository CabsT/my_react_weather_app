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
        <a href="/">open-sourced on GitHub{" "}</a>and{" "}
        <a href="/">hosted on Netlify</a>
      </footer>
    </div>
  );
}

export default App;
