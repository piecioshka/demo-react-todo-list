import React from "react";

export const AddTask = ({ label, onAdd }) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (evt) => {
    evt.preventDefault();
    const value = inputRef.current.value;
    formRef.current.reset();
    onAdd({
      id: Date.now(),
      value,
      done: false,
    });
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <label>
        {label}{" "}
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter the task..."
          required
        />
      </label>
    </form>
  );
};
