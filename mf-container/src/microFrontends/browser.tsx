import MicroFrontend from "../microFrontend";

const { REACT_APP_BROWSER_HOST } = process.env;

const Browser = () => {
  if (!REACT_APP_BROWSER_HOST) throw new Error("Browser host is undefined");
  return <MicroFrontend name="Browser" host={REACT_APP_BROWSER_HOST} />;
};

export default Browser;
