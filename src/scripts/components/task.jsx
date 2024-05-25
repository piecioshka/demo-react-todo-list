import React from "react";
import { Checkbox } from "./Checkbox";
import { CloseButton } from "./CloseButton";

export const Task = ({ task, onRemove, onResolve }) => {
  return (
    <li className={["task", task.done && "done"].join(" ")}>
      <Checkbox checked={task.done} onClick={() => onResolve(task)} />
      <label>{task.value}</label>
      <CloseButton onClick={() => onRemove(task)} />
    </li>
  );
};
