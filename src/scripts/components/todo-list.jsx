import React, { useState, useCallback } from "react";
import { TaskList } from "./task-list";
import { AddTask } from "./add-task";

export const TodoList = ({ label }) => {
  const [list, setList] = useState([]);

  const onAdd = (task) => {
    setList((prevList) => {
      return [...prevList, task];
    });
  };

  const onRemove = (task) => {
    setList((prevList) => {
      return prevList.filter((t) => t.id !== task.id);
    });
  };

  return (
    <div className="todo-list">
      <AddTask label={label} onAdd={onAdd} />
      <TaskList tasks={list} onRemove={onRemove} />
    </div>
  );
};
