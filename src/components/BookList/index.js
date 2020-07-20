import React from "react";
import Card from "./card";
import "./style.css";

const BookList = ({ books }) => {
  return (
    <>
      <section className="search-result">
        {books.size > 0 &&
          [...books.values()].map((book, index) => (
            <Card key={`CARD-${index}`} index={index} book={book} />
          ))}
      </section>
    </>
  );
};

export default BookList;
