import React from 'react';

export const AddTask = ({
    label,
    onAdd
}) => {
    const $form = React.createRef();
    const $input = React.createRef();

    const onSubmit = (evt) => {
        evt.preventDefault();
        const value = $input.current.value;
        $form.current.reset();
        onAdd(value);
    };

    return (
        <form ref={$form} onSubmit={onSubmit} >
            <label>
                {label}{" "}
                <input ref={$input} type="text" placeholder="Enter task..." required />
            </label>
        </form>
    );
};
