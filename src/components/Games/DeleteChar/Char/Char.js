import React, { useState } from "react";
import "./Char.css";

export const Char = (props) => {
  return (
    <div className="char-wrapper" onClick={props.deleteSelectedChar}>
      <div className="char">{props.char}</div>
    </div>
  );
};
