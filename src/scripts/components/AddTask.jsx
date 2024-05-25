import React from "react";

export const AddTask = ({ label, onAdd }) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (evt) => {
    evt.preventDefault();
    onAdd({
      id: Date.now(),
      value: inputRef.current.value,
      done: false,
    });
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="add-task-form">
      <input
        className="add-task-input"
        ref={inputRef}
        type="text"
        placeholder={`(${label}) What needs to be done?`}
        required
      />
    </form>
  );
};
