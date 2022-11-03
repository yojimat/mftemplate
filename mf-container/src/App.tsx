import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Browser, Restaurant } from "./microFrontends";

const getRandomRestaurantId = () => Math.floor(Math.random() * 10) + 1;

const Random = () => (
  <Navigate to={`/restaurant/${getRandomRestaurantId()}`} replace />
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Browser />} />
          <Route path="restaurant/:id" element={<Restaurant />} />
          <Route path="random" element={<Random />} />
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
                404 Container
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
