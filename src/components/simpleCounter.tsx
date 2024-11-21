import { useState } from "react";
import "./simpleCounterStyle.css";

function SimpleCounter() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="box-container">
      <div className="flex-container">
        <div className="container">
          <div className="form-container">
            <h1 className="hello-label">
              I miss you, {name == "" ? "Baby" : name}.
            </h1>
            <input
              className="form-control"
              value={name}
              placeholder="Type your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <h2 className="number">{num}</h2>
          <div className="btn-container">
            <button
              type="button"
              id="add-btn"
              className="btn btn-success"
              onClick={() => {
                setNum(num + 1);
              }}
            >
              Increase
            </button>
            <button
              type="button"
              id="minus-btn"
              className="btn btn-danger"
              onClick={() => {
                num > 0 && setNum(num - 1);
              }}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCounter;
