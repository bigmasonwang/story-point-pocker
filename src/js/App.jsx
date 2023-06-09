import { useState } from "react";

const MODES = [
  {
    name: "Story points",
    values: ["1", "3", "5", "8", "13", "17", "?"],
  },
  {
    name: "T-shirt sizing",
    values: ["XS", "S", "M", "L", "XL"],
  },
];
const CHANGE_SCORE_STATE = 1;
const CHANGE_MODE_STATE = 2;
const SHOW_SCORE_STATE = 3;

function Card({ value, ...props }) {
  return (
    <div
      className="card d-flex align-items-center justify-content-center"
      {...props}
      style={{ height: "200px" }}
    >
      <span className="fs-1 fw-bold">{value}</span>
    </div>
  );
}

function App() {
  const [state, setState] = useState(CHANGE_SCORE_STATE);
  const [mode, setMode] = useState(MODES[0]);
  const [value, setValue] = useState();

  return (
    <div className="container mt-3">
      <div>
        {state === CHANGE_SCORE_STATE && (
          <div className="container">
            <div className="row row-cols-2 g-3">
              {mode.values.map((value) => (
                <div className="col" key={value}>
                  <Card
                    value={value}
                    onClick={() => {
                      setValue(value);
                      setState(SHOW_SCORE_STATE);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {state === CHANGE_MODE_STATE && (
          <div className="d-flex flex-column gap-3">
            {MODES.map((mode) => (
              <div
                className="card"
                key={mode.name}
                onClick={() => {
                  setMode(mode);
                  setState(CHANGE_SCORE_STATE);
                }}
              >
                <span className="fs-1 fw-bold">{mode.name}</span>
              </div>
            ))}
          </div>
        )}
        {state === SHOW_SCORE_STATE && (
          <div
            className="d-flex align-items-center justify-content-center border border-solid-3 rounded"
            onClick={() => setState(CHANGE_SCORE_STATE)}
          >
            <span style={{ fontSize: "20rem" }}>{value}</span>
          </div>
        )}
      </div>
      <div className="fixed-bottom d-flex justify-content-between container bg-body bg-opacity-75">
        <button
          className="btn btn-lg btn-secondary"
          onClick={() => setState(CHANGE_MODE_STATE)}
        >
          Switch mode
        </button>
        <button
          className="btn btn-lg btn-primary"
          onClick={() => setState(CHANGE_SCORE_STATE)}
        >
          Change score
        </button>
      </div>
    </div>
  );
}

export default App;
