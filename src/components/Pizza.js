import React from "react";
import { pizzaData } from "../data";

const Pizza = () => (
  <div>
    {pizzaData.map((data, index) => (
      <li key={index}>{data.name}</li>
    ))}
  </div>
);

export default Pizza;
