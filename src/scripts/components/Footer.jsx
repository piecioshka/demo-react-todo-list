import React from "react";

export const Footer = ({ activeTasks, mode, setMode, clearCompleted }) => {
  return (
    <footer className="footer">
      <span>{activeTasks.length} items left</span>
      <ul>
        <li>
          <button
            className={["button", mode === "all" ? "active" : ""]
              .join(" ")
              .trim()}
            onClick={() => setMode("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={["button", mode === "active" ? "active" : ""]
              .join(" ")
              .trim()}
            onClick={() => setMode("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={["button", mode === "completed" ? "active" : ""]
              .join(" ")
              .trim()}
            onClick={() => setMode("completed")}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="text-link" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};
