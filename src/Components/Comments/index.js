import React, { useContext } from 'react';
import { commentContext } from '../../context/comments';

const Comment = ({ id, email, name, body }) => {
  const { deleteComment } = useContext(commentContext);

  return (
    <>
      <div>
        <div onClick={() => deleteComment(id)}>
          {`#${id}`} <span>click to delete</span>
        </div>
        <div className="card-body">
          <p className="card-text">{email}</p>
          <p className="card-text">{name}</p>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
