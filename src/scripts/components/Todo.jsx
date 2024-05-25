import React, { useMemo, useState } from "react";
import { AddTask } from "./AddTask";
import { Task } from "./Task";
import { Footer } from "./Footer";

export const Todo = ({ label }) => {
  const [allTasks, setAllTasks] = useState([]);
  const activeTasks = useMemo(
    () => allTasks.filter((task) => !task.done),
    [allTasks]
  );
  const resolveTasks = useMemo(
    () => allTasks.filter((task) => task.done),
    [allTasks]
  );
  const [mode, setMode] = useState("active");
  const tasks = useMemo(() => {
    switch (mode) {
      case "active":
        return activeTasks;
      case "completed":
        return resolveTasks;
      default:
        return allTasks;
    }
  }, [mode, allTasks]);

  const addTask = (task) => {
    setAllTasks((prev) => [...prev, task]);
  };

  const removeTask = (task) => {
    setAllTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const resolveTask = (task) => {
    setAllTasks((prev) => {
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
  };

  const removeCompletedTasks = () => {
    setAllTasks((prev) => prev.filter((t) => !t.done));
  };

  return (
    <div className="todo">
      <AddTask label={label} onAdd={addTask} />
      {tasks.length > 0 && (
        <ul className="tasks">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onResolve={resolveTask}
              onRemove={removeTask}
            />
          ))}
        </ul>
      )}
      {allTasks.length > 0 && (
        <Footer
          activeTasks={activeTasks}
          mode={mode}
          setMode={setMode}
          clearCompleted={removeCompletedTasks}
        />
      )}
    </div>
  );
};
