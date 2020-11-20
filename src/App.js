import React, { useEffect, useState } from "react";
import "./App.css";
import generateCosts from './algorithms/generateCosts';
import findMinCost from './algorithms/findMinCost';
import findPath from './algorithms/findPath';

function App() {
  const [matrix, setMatrix] = useState([]);
  const [path, setPath] = useState([]);
  const [result, setResult] = useState('--')

  useEffect(() => {
    newMap();
  }, []);


  function handleReset() {
    setPath([])
    setResult('--')
  }

  function newMap() {
    handleReset()
    const costs = generateCosts();
    setMatrix(costs);
  }

  function handlePlay() {
    const result = findMinCost(matrix, matrix.length, matrix[0].length)
    const path = findPath(result[1]);
    setPath(path);
    setResult(result[0]);
  }

  function isInPath(i, j) {
    const index = path.findIndex(coord => coord[0] === i && coord[1] === j);
    return index >= 0;
  }

  function getColor(i, j) {
    if (i + j === 0)
      return '#03787C';
    else if (isInPath(i, j))
      return '#03787C';
    else if ((i + 1)*(j + 1) === matrix.length*matrix.length )
      return '#e68057';
    return '#fff';
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
        <h4 className="text-center bold" ><b>O menor caminho é {result}</b></h4>
        <div className="row">
          <div className="col d-flex justify-content-center mt-3">
            <div>
              {matrix.map((line, i) => (
                  <div key={i+1} className="d-flex">
                    {
                      line.map((cost, j) => (
                        <div key={j+1} className="tablet d-flex justify-content-center align-items-center" style={{ backgroundColor: getColor(i, j)}}>
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
          <button className="btn handle-btn finish mr-5" onClick={newMap}>Novo Mapa</button>
          <button className="btn handle-btn start" onClick={handlePlay}>Jogar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
