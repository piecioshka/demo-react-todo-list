import React from "react";

export const Checkbox = ({ checked, onClick }) => {
  return (
    <i
      className={["checkbox", checked && "checked"].join(" ")}
      onClick={onClick}
    >
      {checked ? "✓" : ""}
    </i>
  );
};
