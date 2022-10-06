import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Routes,
  useParams,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

function Restaurant() {
  const { id } = useParams();

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
          Learn React Restaurant {id}
        </a>
      </header>
    </div>
  );
}

export default App;
