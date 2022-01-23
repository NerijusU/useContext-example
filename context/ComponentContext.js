import { createContext } from "react";
import App from "../src/App";

export const Context = createContext("DEFAULT VALUE");

function ComponentContext() {
  const testUser = "Nerijus";
  console.log(testUser); // does not work?
  return (
    <Context.Provider value={testUser}>
      <App />
    </Context.Provider>
  );
}

export default ComponentContext;
