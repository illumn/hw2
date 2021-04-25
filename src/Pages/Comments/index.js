import React, { useContext } from 'react';
import AddComment from '../../components/AddComment';
import Comment from '../../components/Comment';
import { commentListContext } from '../../context/comments';

const Comments = () => {
  const { commentList } = useContext(commentListContext);
  return (
    <div className="d-flex flex-row justify-content-around">
      <AddComment />
      <div className="todo-list-content d-flex flex-row justify-content-start flex-wrap">
        {commentList.map(({ name, body, email, id }, index) => (
          <Comment key={id} id={id} name={name} body={body} email={email} />
        ))}
      </div>
    </div>
  );
};

export default Comments;