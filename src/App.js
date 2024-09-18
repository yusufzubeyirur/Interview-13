import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
  const [initialValue, setInitialValue] = useState("");
  const [program, setProgram] = useState([]);
  const [result, setResult] = useState(null);

  const operations = {
    half,
    double,
    increment,
    decrement,
  };
  // Hesaplama işlemini gerçekleştiren fonksiyon
  const computeResult = () => {
    let value = parseFloat(initialValue);
    if (isNaN(value)) return;

    program.forEach((op) => {
      value = operations[op](value);
    });

    setResult(value);
  };

  // Hesaplama işlemini ekler
  const handleAddOperation = (operation) => {
    setProgram([...program, operation]);
  };

  // Gönder butonuna basıldığında çalışır
  const handleSubmit = () => {
    computeResult();
    setInitialValue(""); // Başlangıç değerini temizle
  };

  return (
    <div className="container">
      <div className="button-group">
        <button onClick={() => handleAddOperation("half")}>Yarım</button>
        <button onClick={() => handleAddOperation("double")}>İki Katı</button>
        <button onClick={() => handleAddOperation("increment")}>Arttır</button>
        <button onClick={() => handleAddOperation("decrement")}>Azalt</button>
        <button
          onClick={() => {
            setProgram([]);
            setResult(null);
          }}
        >
          Temizle
        </button>
      </div>
      <h1>Fonksiyonum</h1>
      <div className="input-group">
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
          placeholder="Başlangıç değeri"
        />
        <button onClick={handleSubmit}>Gönder</button>
      </div>
      <div className="program-list">
        <h2>Seçilen İşlemler:</h2>
        <ul>
          {program.map((op, index) => (
            <li key={index}>
              {op === "half"
                ? "Yarım"
                : op === "double"
                ? "İki Katı"
                : op === "increment"
                ? "Arttır"
                : op === "decrement"
                ? "Azalt"
                : ""}
            </li>
          ))}
        </ul>
      </div>
      {result !== null && <div className="result">Sonuç: {result}</div>}
    </div>
  );
};

export default App;
