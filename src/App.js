import React, { useEffect, useState } from "react";
import "./App.css";
import generateCosts from './algorithms/generateCosts';

function App() {
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    getRandomTabels();
  }, []);

  const getRandomTabels = () => {
    const costs = generateCosts();
    console.log(costs)
    setMatrix([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
    ]);
  };

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="container">
        <div className="text-center mb-4 pt-4" style={{ color: "#353535" }}>
          <h1 className="mb-3">
            Projeto{" "}
            <span className="bold-text" style={{ color: "#03787C" }}>
              Custo Mínimo
            </span>
          </h1>
          <p>
            Júlia estava em casa em um dia de chuva quando a energia caiu. Ela
            decidiu espalhar seus tabletes de numeros para formar uma matriz 5 x
            5 e assim começar a brincar. A brincadeira consiste em encontrar o
            custo mínimo para alcançar o último tablete da matriz a partir da
            primeira.
          </p>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center mt-3">
            <div className="grid">
              {matrix.map((m) => (
                <div className="tablet d-flex justify-content-center align-items-center">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <div className="btn start-btn">Jogar</div>
        </div>
      </div>
    </div>
  );
}

export default App;
