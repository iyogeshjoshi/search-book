import data from "../data.json";

/**
 * Searchs and returns K number of book most relevant to
 * the query provided
 * @param {string} query input query to search
 * @param {int} k no. of results to show
 */
const search = (query, k) => {
  if (!query) {
    throw new Error("No query provided");
  }
  if (!k) {
    throw new Error("No k value provided");
  }
  // console.log(data);
  return data.summaries.slice(0, k);
};

export default search;
