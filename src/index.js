import ReactDOM from "react-dom";
import App from "./App";
import ComponentContext from "../context/ComponentContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ComponentContext>
    <App />
  </ComponentContext>,
  rootElement
);
