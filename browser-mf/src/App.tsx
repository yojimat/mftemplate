import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browser />} />
      </Routes>
    </BrowserRouter>
  );
}

function Browser() {
  const restaurant = {
    id: Math.round(Math.random() * 10),
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Browser
        </a>
      </header>
      <Link to={`/restaurant/${restaurant.id}`} />
    </div>
  );
}

export default App;
