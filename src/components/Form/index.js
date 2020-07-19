import React from "react";
import "./style.css";

const Form = ({ titles }) => {
  let timeout;
  const searchHandler = (e) => {
    const value = e.target.value;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(function () {
      console.log("search handler called", value);
    }, 500);
  };
  return (
    <>
      <section className="search-form">
        <input
          type="search"
          list="titles"
          name="query"
          id="query"
          placeholder="search here"
          tabIndex="1"
          onChange={searchHandler}
        />
        <datalist id="titles">
          {titles.map((title, index) => (
            <option key={`title-${index}`} value={title} />
          ))}
        </datalist>
      </section>
    </>
  );
};

export default Form;
