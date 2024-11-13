import { useState } from "react";

import Card from "./components/Card";

function App() {
  let myObj = {
    name: "hotes",
    age: 25,
    address: {
      city: "Jaipur",
      state: "Rajesthan",
      country: "India",
    },
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">Tailwind props</h1>
      <Card username="Dinesh" />
      <Card username="Gopal" post="staff Eng." newArr={newArr} />
      <Card myObj={myObj} />
    </>
  );
}

export default App;
