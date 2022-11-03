import "./App.css";
import { Route, Routes, useParams, BrowserRouter } from "react-router-dom";

const { REACT_APP_CONTENT_HOST } = process.env;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              404
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Restaurant() {
  const { id } = useParams();

  return (
    <div className="App">
      <header className="App-header">
        <img src={`${REACT_APP_CONTENT_HOST}/images/logo.svg`} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React <strong>Restaurant {id}</strong>
        </a>
      </header>
    </div>
  );
}

export default App;
