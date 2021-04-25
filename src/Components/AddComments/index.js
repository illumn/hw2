import React, { useContext, useRef } from 'react';
import { commentListContext } from '../../context/comments';

const AddComment = () => {
  const nameEnter = useRef();
  const bodyEnter = useRef();
  const emailEnter = useRef();
  const { addComment, nextId } = useContext(commentListContext);

  const ButtonClick = () => {
    if (
        emailEnter.current.value &&
        nameEnter.current.value &&
        bodyEnter.current.value
        
    ) {
      addComment({
        id: nextId,
        email: emailEnter.current.value,
        name: nameEnter.current.value,
        body: bodyEnter.current.value
    });
        emailEnter.current.value = '';
        nameEnter.current.value = '';
        bodyEnter.current.value = '';
      
    }
  };
  return (
    <>
      <div className="AddTodo col-center">
        <div className="mb-3">
          <label className="htmlForm-label">
            Name
          </label>
          <input ref={nameEnter}
            type="text"
            placeholder="name"
          />
        </div>
        <div className="mb-3">
          <label>
            Email
          </label>
          <input ref={emailEnter}
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <label>
            Body
          </label>
          <input ref={bodyEnter}
            placeholder="body"
          />
        </div>
        <button
          onClick={ButtonClick}
          type="button"
          className="btn btn-primary">
          Add
        </button>
      </div>
    </>
  );
};

export default AddComment;
