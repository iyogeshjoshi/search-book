import React, { useState } from "react";
import SearchForm from "../Form";
import BookList from "../BookList";
import { search } from "../../utils";
import "./style.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selections, setSelections] = useState(new Set());

  const searchHandler = (query, k) => {
    if (!query) {
      setBooks([]);
      return;
    }
    console.log("search handler called", query, k);
    const results = search(query, k);
    // let resultTitles = results.reduce((allTitles, result) => {
    //   return allTitles.concat(result.title);
    // }, []);
    // console.log(resultTitles);
    setBooks(results);
  };

  const onSelection = (book) => {
    if (!selections.has(book)) {
      setSelections(new Set([...selections, book]));
    }
    setBooks([]);
  };

  return (
    <div className="main-container">
      <SearchForm
        books={books}
        searchHandler={searchHandler}
        selectionHandler={onSelection}
      />
      <BookList books={selections} />
    </div>
  );
};

export default Home;
