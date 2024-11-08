"use client";

import React from "react";
import { Fragment, useState } from "react";

function GroupAlphabetSelections() {
  // Track selected values in state
  const [selectedAlphabets, setSelectedAlphabets] = useState([]);

  const renderAlphabets = () => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    const alphbetArray = alphabets.split("");

    const alphbetArrayInGroupOfThree = alphbetArray.reduce(
      (acc, curr, index) => {
        if (index % 3 === 0) {
          acc.push([curr]);
        } else {
          acc[acc.length - 1].push(curr);
        }
        return acc;
      },
      []
    );

    return alphbetArrayInGroupOfThree.map((el) => {
      return (
        <div key={el}>
          <input
            type="checkbox"
            id={el}
            name={el}
            value={el}
            onChange={handleAlphabetSelections}
          />
          <label htmlFor={el}> {el}</label>
        </div>
      );
    });
  };

  const handleAlphabetSelections = (e) => {
    // add logic to handle alphabet selections
    const selectedValue = e.target.value;
    const selectedCheckbox = e.target.checked;

    if (selectedCheckbox) {
      setSelectedAlphabets([...selectedAlphabets, selectedValue]);
    } else {
      setSelectedAlphabets(
        selectedAlphabets.filter((alpha) => alpha !== selectedValue)
      );
    }
  };

  return (
    <>
      {renderAlphabets()}
      <div>
        <h3>Selection Matrix:</h3>
        <div>
          {Array(selectedAlphabets.length)
            .fill(null)
            .map((_, i) => (
              <Fragment key={`matrix-${i}`}>
                <div>
                  {selectedAlphabets.map((letter, rowIndex) => (
                    <div key={`row-${rowIndex}-${i}`}>
                      <span key={`${rowIndex}-${i}`}>{letter}</span>
                    </div>
                  ))}
                </div>
                <div className="spacer"></div>
              </Fragment>
            ))}
        </div>
      </div>
    </>
  );
}

export default GroupAlphabetSelections;
