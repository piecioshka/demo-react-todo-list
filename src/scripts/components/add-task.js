import React from 'react';

const ENTER_KEY_CODE = 13;

export const AddTask = ({
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
            <input ref={$input} placeholder="Name task..." required />
        </form>
    );
};
