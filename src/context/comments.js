import React, { createContext, useState, useEffect } from 'react';
import { getComments } from '../Services/api';
export const commentContext = createContext();

const CommentListProvider = ({ children }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getComments(setCommentList, 0, 10);
  }, []);

  const addComment = comment => {
    setCommentList([...commentList, comment]);
  };

  const deleteComment = commentId => {
    const indexToDelete = commentList.findIndex(
      comment => comment.id === commentId
    );
    setCommentList([
      ...commentList.slice(0, indexToDelete),
      ...commentList.slice(indexToDelete + 1),
    ]);
  };
  return (
    <commentContext.Provider
      value={{
        commentList,
        addComment,
        deleteComment,
        nextId: commentList[commentList.length - 1]
          ? commentList[commentList.length - 1].id + 1
          : 1,
      }}>
      {children}
    </commentContext.Provider>
  );
};
export default CommentListProvider;
