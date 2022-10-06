import logo from "./logo.svg";
import "./App.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
    </HistoryRouter>
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
