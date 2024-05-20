import "../index.html";
import "../styles/main.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { TodoList } from "./components/todo-list";

createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <TodoList label="List no. 1" />
    <TodoList label="List no. 2" />
    <TodoList label="List no. 3" />
  </React.StrictMode>
);
