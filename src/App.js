import React from "react";
import "./App.css";

function App() {
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
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
