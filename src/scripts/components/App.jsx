import React from "react";
import { Todo } from "./Todo";

export const App = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) => (
        <Todo key={index} label={`List no. ${index + 1}`} />
      ))}
    </>
  );
};
