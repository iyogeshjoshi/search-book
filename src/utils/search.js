import data from "../data.json";

/**
 * Searches and returns K number of book most relevant to
 * the query provided
 * @param {string} query input query to search
 * @param {int} k no. of results to show
 * @param {string}  where to search the input query
 * @returns {array} an array of all the matches found based on query
 */
const search = (query, k, searchIn = "summaries") => {
  if (!query) {
    throw new Error("No query provided");
  }
  if (!k) {
    throw new Error("No k value provided");
  }

  let datastore = data[searchIn] || [];

  if (datastore.length === 0) {
    return [];
  }

  /**
   * loops through all entries and calculates all
   * the matching results rank and also filters
   * results with no match (rank = 0)
   */
  let result = datastore.reduce((found = [], elm) => {
    const summaryRank = getRanking(query, elm.summary);
    const authorRank = getRanking(query, data.authors[elm.id].author);
    const titleRank = getRanking(query, data.titles[elm.id]);
    const queryRank = getRanking(query, data.queries[elm.id]);
    // calculate total rank based on category
    const rank =
      0.3 * titleRank +
      0.3 * authorRank +
      0.25 * summaryRank +
      0.15 * queryRank;

    return rank > 0 ? found.concat({ ...elm, rank: rank }) : found;
  }, []);

  // sorts array in descending rank order
  result = result.sort((a, b) => b.rank - a.rank);

  return formatData(result.slice(0, k));
};

/**
 * takes query and source data and do partial/full matching
 * of all the words occuring in query to the source data and
 * calculates rank of the query based on no. of words matched
 * in source data - the formula is if matched:
 *  rank += (1 / (no. of words in query));
 *
 * @param {string} query input query to be matched
 * @param {string} data data to which match has to be found
 * @returns {number} rank in floating point based on matches
 */
function getRanking(query, data) {
  /**
   * create an array of all the word and put it in a set
   * to make a set of unique words
   */
  const dataWords = new Set(data.split(" ").map((word) => word.toLowerCase()));
  const queryWords = query.split(" ").map((q) => q.toLowerCase()) || [];
  let queryLength = queryWords.length - 1 || 1;

  return queryWords.reduce(
    (count, word) => {
      if (dataWords.has(word)) {
        return (count += 1 / queryLength);
      }
      /**
       * @todo someway to modify rank based on dataWord length matched
       */
      return count;
    },
    0,
    0
  );
}

function formatData(values) {
  return values.map((val) => ({
    ...val,
    title: data.titles[val.id],
    author: data.authors[val.id],
    query: data.queries[val.id],
  }));
}

export default search;
