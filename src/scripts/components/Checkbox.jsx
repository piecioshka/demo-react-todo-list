import React from "react";

export const Checkbox = ({ checked, onChange }) => {
  return (
    <i className="checkbox" onClick={onChange}>
      {checked ? "√" : ""}
    </i>
  );
};
