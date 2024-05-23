import React, { useCallback, useState } from "react";
import { AddTask } from "./AddTask";
import { Task } from "./Task";

export const Todo = ({ label }) => {
  const [tasks, setTasks] = useState([]);

  const onAdd = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const onRemove = (task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const onResolve = useCallback((task) => {
    setTasks((prev) => {
      return prev.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            done: !t.done,
          };
        }
        return t;
      });
    });
  }, []);

  return (
    <div className="todo">
      <AddTask label={label} onAdd={onAdd} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onResolve={onResolve}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
};
