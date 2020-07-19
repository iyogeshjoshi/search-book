import React, { useRef, useState } from "react";
import "./style.css";

const Form = ({ books, searchHandler, selectionHandler }) => {
  const [quantity, setQuantity] = useState(3);
  const queryRef = useRef(null);

  let timeout;
  const onSearch = (e) => {
    const targetValue = e.target.value;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      targetValue && searchHandler(targetValue, quantity);
    }, 500);
  };
  const onOptionSelect = (book) => {
    queryRef.current.value = "";
    selectionHandler(book);
  };

  return (
    <>
      <section className="search-form">
        <input
          type="number"
          name="quantity"
          id="quantity"
          defaultValue={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min={1}
          title="number of results to show"
        />
        <input
          type="search"
          list="titles"
          name="query"
          id="query"
          placeholder="search here"
          title="Enter your input here to search books"
          tabIndex="1"
          onChange={onSearch}
          autoFocus
          ref={queryRef}
        />
        <span> Found: {books.length}</span>
        <div className={`dropdown ${books.length > 0 && "show"}`} id="titles">
          {books.map((book, index) => (
            <div
              key={`title-${index}`}
              className="option"
              onClick={() => onOptionSelect(book)}
            >
              {book.title}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Form;
