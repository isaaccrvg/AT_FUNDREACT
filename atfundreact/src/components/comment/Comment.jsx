import React from 'react';

const Comment = ({ comment }) => {
  const shortEmail = `@${comment.email.split('@')[0]}`;
  const shortBody = comment.body.length > 140 ? `${comment.body.slice(0, 140)}...` : comment.body;

  return (
    <div className="comment-card">
      <h4>{shortEmail}</h4>
      <p>{shortBody}</p>
    </div>
  );
}

export default Comment;
