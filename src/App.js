import "./styles.css";
import Component2 from "./Component2";
import { Context } from "../context/ComponentContext";
import { useContext } from "react";

// export const Context = createContext("Default Value");

export default function App() {
  const user1 = useContext(Context);
  return (
    <div className="App component">
      <h2 style={{ color: "red" }}>{`Hello ${user1} in App!`}</h2>
      <Component2 />
    </div>
  );
}
