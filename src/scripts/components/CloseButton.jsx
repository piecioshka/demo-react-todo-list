import React from "react";

export const CloseButton = ({ onClick }) => {
  return (
    <button className="remove-button" onClick={onClick}>
      x
    </button>
  );
};
