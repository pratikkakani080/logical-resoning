"use client";
import React, { useState } from "react";

function CustomMatrixSelector() {
  const [size, setSize] = useState(0);
  const [selectedMatrix, setSelectedMatrix] = useState([]);

  const generateMatrix = () => {
    let matrix = [];

    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(j + 1);
      }
      matrix.push(row);
    }
    return matrix;
  };

  return (
    <div>
      <div>
        <label>Metrix size:</label>
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
          min="1"
        />
      </div>

      {size > 0 && (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
              width: "200px",
              marginBottom: "20px"
            }}
          >
            {generateMatrix().map((row, i) =>
              row.map((cell, j) => (
                <div
                  key={`${i}-${j}`}
                  onClick={() => {
                    let newMatrix = [];
                    for (let r = 0; r <= i; r++) {
                      let newRow = [];
                      for (let c = 0; c <= j; c++) {
                        newRow.push(c + 1);
                      }
                      newMatrix.push(newRow);
                    }
                    setSelectedMatrix(newMatrix);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </div>
              ))
            )}
          </div>

          {selectedMatrix.length > 0 && (
            <div>
              <h3>Selected Matrix:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                {selectedMatrix.map((row, i) => (
                  <div key={i} style={{ display: "flex", gap: "5px" }}>
                    {row.map((cell, j) => (
                      <div key={j} style={{ width: "20px" }}>{cell}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CustomMatrixSelector;
