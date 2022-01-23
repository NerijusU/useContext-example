import { useContext } from "react";
import Component3 from "./Component3";
import { Context } from "../context/ComponentContext";

export default function Component2() {
  const user2 = useContext(Context);
  // console.log(user2);
  return (
    <div className="component">
      <h2>Component 2</h2>
      <h3 style={{ color: "red" }}>{user2} in Component2</h3>
      <Component3 />
    </div>
  );
}
