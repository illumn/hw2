import React, { useContext } from 'react';
import AddInTodo from '../../components/AddInTodo';

const Todolist = () => {
  return (
    <div className="d-flex flex-row justify-content-around">
      <AddInTodo />
      <div className="todo-list-content d-flex flex-row justify-content-start flex-wrap">
      </div>
    </div>
  );
};

export default Todolist;
