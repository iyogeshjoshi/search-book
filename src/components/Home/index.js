import React, { useState } from "react";
import SearchForm from "../Form";
import "./style.css";
import BookList from "../BookList";

const Home = () => {
  const [titles, setTitles] = useState([]);

  return (
    <div className="main-container">
      <SearchForm titles={titles} />
      <BookList />
    </div>
  );
};

export default Home;
