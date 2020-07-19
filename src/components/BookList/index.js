import React from "react";
import Card from "./card";
import "./style.css";

const BookList = ({ books }) => {
  console.log([...books.values()]);

  return (
    <>
      <section className="search-result">
        {books.size > 0 &&
          [...books.values()].map((book, index) => (
            <Card key={index} book={book} />
          ))}
      </section>
    </>
  );
};

export default BookList;
