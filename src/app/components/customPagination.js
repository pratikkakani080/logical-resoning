"use client";
import React, { useState } from "react";

function CustomPagination() {
  const [numBoxes, setNumBoxes] = useState(0);
  const [limit, setLimit] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNumBoxesChange = (e) => {
    setNumBoxes(parseInt(e.target.value) || 0);
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value) || 0);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(limit / numBoxes);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderInputs = () => {
    return (
      <div style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="numBoxes" style={{ marginRight: "10px" }}>
            Number of Boxes:
          </label>
          <input
            type="number"
            id="numBoxes"
            value={numBoxes}
            onChange={handleNumBoxesChange}
            min="1"
            style={{
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <label htmlFor="limit" style={{ marginRight: "10px" }}>
            Limit:
          </label>
          <input
            type="number"
            id="limit"
            value={limit}
            onChange={handleLimitChange}
            min="1"
            style={{
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>
    );
  };

  const renderBoxes = () => {
    const boxes = [];
    const startNum = (currentPage - 1) * numBoxes + 1;

    for (let i = 0; i < numBoxes && startNum + i <= limit; i++) {
      boxes.push(
        <div
          key={i}
          style={{
            width: "40px",
            height: "40px",
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5px",
          }}
        >
          {startNum + i}
        </div>
      );
    }

    return boxes;
  };

  const renderButtons = () => {
    const showPagination = numBoxes > 0 && limit > numBoxes;
    return (
      showPagination && (
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            onClick={() => handlePrevClick()}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={() => handleNextClick()}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </div>
      )
    );
  };

  return (
    <>
      {renderInputs()}
      {renderBoxes()}
      {renderButtons()}
    </>
  );
}

export default CustomPagination;
