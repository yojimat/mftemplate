import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const { REACT_APP_CONTENT_HOST } = process.env;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browser />} />
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

function Browser() {
  const restaurant = {
    id: Math.round(Math.random() * 10),
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${REACT_APP_CONTENT_HOST}/images/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. This is the{" "}
          <strong>browser component</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Browser</strong>
        </a>
      </header>
      <a href={`/restaurant/${restaurant.id}`}>
        Restaurant {restaurant.id}
      </a>
    </div>
  );
}

export default App;
