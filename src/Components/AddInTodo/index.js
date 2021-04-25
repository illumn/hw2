import React, { useContext, useRef } from 'react';
import { todoContext } from '../../context/todoList';

const AddInTodo = () => {
  const enter = useRef();
  const { addTodo, nextId } = useContext(todoContext);

  const ButtonClick = () => {
    if (enter.current.value) {
      addTodo({ id: nextId, title: enter.current.value });
      enter.current.value = '';
    }
};
  return (
    <>
      <div className="AddTodo col-center">
        <div className="mb-3">
          <label>
            Description
          </label>
          <input
            ref={enter}
            placeholder="add todo"
          />
        </div>
        <button
          onClick={ButtonClick}
          type="button"
          className="btn btn-primary">
          Add Something
        </button>
      </div>
    </>
  );
};

export default AddInTodo;
