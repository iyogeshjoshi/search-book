import React from "react";

const Card = ({ key, book }) => {
  return (
    <div key={`selected-book-${key}`} className="book-card">
      <div className="title" title={book.title}>
        {book.title}
      </div>
      <div className="author">By {book.author.author}</div>
      <div className="summary" title={book.summary}>
        {book.summary}
      </div>
    </div>
  );
};

export default Card;
