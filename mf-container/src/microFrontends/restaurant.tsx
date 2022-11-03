import MicroFrontend from "../microFrontend";
const { REACT_APP_RESTAURANT_HOST } = process.env;

const Restaurant = () => {
  if (!REACT_APP_RESTAURANT_HOST)
    throw new Error("Restaurant host is undefined");
  return <MicroFrontend name="Restaurant" host={REACT_APP_RESTAURANT_HOST} />;
};

export default Restaurant;
