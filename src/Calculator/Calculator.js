import "./calculator.css";
function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-wrapper">
        <div className="number-displayer">0</div>
        <div className="math-operators">
          <button className="double-value clear-val">C</button>
          <button className="backspace">←</button>
          <button className="division operator">÷</button>
        </div>
        <div className="math-operators">
          <button className="numbers">7</button>
          <button className="numbers">8</button>
          <button className="numbers">9</button>
          <button className="multiplication operator">×</button>
        </div>
        <div className="math-operators">
          <button className="numbers">4</button>
          <button className="numbers">5</button>
          <button className="numbers">6</button>
          <button className="addition operator">+</button>
        </div>
        <div className="math-operators">
          <button className="numbers">1</button>
          <button className="numbers">2</button>
          <button className="numbers">3</button>
          <button className="subtraction operator">-</button>
        </div>
        <div className="math-operators">
          <button className="numbers triple-value">0</button>
          <button className="equal operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
