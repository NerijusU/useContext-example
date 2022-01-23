import React from "react";
import Component4 from "./Component4";
// import { Context } from "./App";
import { Context } from "../context/ComponentContext";

export default function Component3() {
  return (
    <div className="component">
      <h2 style={{ color: "blue" }}>Component 3 (Context.Consumer)</h2>
      <Context.Consumer>
        {(value) => <h3>{`${value} in Component3`}</h3>}
      </Context.Consumer>
      <Component4 />
    </div>
  );
}
