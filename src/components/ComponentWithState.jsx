import { useState } from "react";

export default function Carsloaded() {
  const [car, setCar] = useState("Get Your Car");

const cars = [ "Toyota-Supra", "BMW", "Benz", "Honda", "Ferrari", "Lemborgini" ];
const adjectives = [ "Awesome Engine", "Bold Style", "Class Any Days", "Sporty", "Killer", "Bulls-Eye" ];

  const GenerateCars = () => {
    const randomCars = cars[Math.floor(Math.random() * cars.length)]; // nome aleatório do array
    const adjRandom = adjectives[Math.floor(Math.random() * adjectives.length)]; // adjetivo aleatório do array
    setCar(`${randomCars} ${adjRandom}`);
  };

  return (
    <div>
      <h3>Cars Loaded</h3>
      <p>{car}</p>
      <button onClick={GenerateCars}>Generate</button>
    </div>
  );
}