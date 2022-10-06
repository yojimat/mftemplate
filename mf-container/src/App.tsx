import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Browser, Restaurant } from "./microFrontends";

const getRandomRestaurantId = () => Math.floor(Math.random() * 10) + 1;

const Random = () => (
  <Navigate to={`/restaurant/${getRandomRestaurantId()}`} replace />
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Browser />}>
      <Route path="restaurant/:id" element={<Restaurant />} />
      <Route path="random" element={<Random />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
