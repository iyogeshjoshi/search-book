import React from "react";

const BookList = ({ books }) => {
  console.log(books);

  return (
    <>
      <section className="search-result">
        {books.entries((book) => (
          <>
            <div>title: {book.title}</div>
            <div>author: {book.author}</div>
            <div>{book.summary}</div>
          </>
        ))}
      </section>
    </>
  );
};

export default BookList;
