import React from "react";

const Card = ({ index, book }) => {
  return (
    <div key={`selected-book-${index}`} className="book-card">
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
