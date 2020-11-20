import React, { useEffect, useState } from "react";
import "./App.css";
import generateCosts from './algorithms/generateCosts';
import findMinCost from './algorithms/findMinCost';

function App() {
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    handleReset();
  }, []);


  function handleReset() {
    const costs = generateCosts();
    setMatrix([
      [4, 7, 8, 6, 4],
      [6, 7, 3, 9, 2],
      [3, 8, 1, 2, 4],
      [7, 1, 7, 3, 7],
      [2, 9, 8, 9, 3]
    ]);
  }

  function handlePlay() {
    const result = findMinCost(matrix, matrix.length, matrix[0].length)
    console.log(result)
  }

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
            <div>
              {matrix.map((line, i) => (
                  <div key={i+1} className="d-flex">
                    {
                      line.map((cost, j) => (
                        <div key={j+1} className={`tablet d-flex justify-content-center align-items-center ${i + j === 0 ? 'start' : null} ${(i + 1) * (j + 1) === line.length * line.length ? 'finish': null}`}>
                          {cost}
                        </div>
                      ))
                    }
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <button className="btn handle-btn finish mr-5" onClick={handleReset}>Reset</button>
          <button className="btn handle-btn start" onClick={handlePlay}>Jogar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
