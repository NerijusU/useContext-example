import React, { useContext } from "react";
import { Context } from "../context/ComponentContext";
import { DateTime } from "luxon";

export default function Component4() {
  const user4 = useContext(Context);
  // console.log(user4);

  return (
    <div className="component">
      <h2>Component 4 (useContext)</h2>
      <h3 style={{ color: "red" }}>{`Hello ${user4} again!`}</h3>
      <p>{DateTime.local().toISO()}</p>
    </div>
  );
}
