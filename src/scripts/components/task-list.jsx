import React from "react";
import { Task } from "./task";

export const TaskList = ({ tasks, onRemove }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onRemove={onRemove} />;
      })}
    </ul>
  );
};
