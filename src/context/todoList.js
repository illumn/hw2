import React, { createContext, useState, useEffect } from 'react';
import { getTodos } from '../Services/api';

export const todoContext = createContext();

const TodoListComponent = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos(setTodoList, 0, 10);
  }, []);

  const addTodo = todo => {
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = todoId => {
    const indexToDelete = todoList.findIndex(todo => todo.id === todoId);
    setTodoList([
      ...todoList.slice(0, indexToDelete),
      ...todoList.slice(indexToDelete + 1),
    ]);
  };
  return (
    <todoContext.Provider
      value={{
        todoList,
        addTodo,
        deleteTodo,
        nextId: todoList[todoList.length - 1]
          ? todoList[todoList.length - 1].id + 1
          : 1,
      }}>
      {children}
    </todoContext.Provider>
  );
};
export default TodoListComponent;
