import React from "react";
import { Checkbox } from "./Checkbox";

export const Task = ({ task, onRemove, onResolve }) => {
  return (
    <li className={["task", task.done ? "done" : ""].join(" ")}>
      <Checkbox checked={task.done} onChange={() => onResolve(task)} />
      <span style={{ padding: "0 10px" }}>{task.value}</span>
      <button className="remove-button" onClick={() => onRemove(task)}>
        x
      </button>
    </li>
  );
};
