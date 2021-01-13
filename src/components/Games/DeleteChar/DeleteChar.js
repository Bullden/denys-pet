import React, { useState } from "react";
import "./DeleteChar.css";
import { Link } from "react-router-dom";
import { Char } from "./Char/Char";
// import { Char } from "./Char/Char";

export const DeleteChar = () => {
  const [inputValue, setInputValue] = useState("");
  const [arrNewValue, setArrNewValue] = useState([]);

  const changeInputValue = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const newValue = value.split("");
    let modify = [];
    newValue.map((i) => {
      let item = {
        value: i,
        id: `${i}${Math.random() * 10}${i}`,
      };
      modify.push(item);
    });

    setArrNewValue(modify);
  };

  const deleteSelectedChar = (i) => {
    let arrayWithoutChar = arrNewValue.filter((item) => item.id !== i.id);

    console.log(arrayWithoutChar);

    setArrNewValue(arrayWithoutChar);

    const input = [];
    arrayWithoutChar.map((i) => {
      input.push(i.value);
    });
    setInputValue(input.join(""));
  };

  return (
    <div className="delChar-wrapper">
      <div className="delChar-title">Delete char</div>
      <div className="delChar-content">
        <div className="delChar-input-wrapper">
          <input
            className="delChar-input"
            type="text"
            value={inputValue}
            onChange={changeInputValue}
          />
        </div>
        <div className="delChar-char">
          {arrNewValue.map((i) => (
            <Char
              char={i.value}
              key={i.id}
              deleteSelectedChar={() => deleteSelectedChar(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
