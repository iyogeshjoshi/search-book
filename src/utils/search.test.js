import search from "./search";
import data from "../data.json";

describe("Seach", () => {
  test("should return 3 books", () => {
    expect.assertions(2);
    const query = "something";
    const k = 3;

    const res = search(query, k);

    expect(res).toBeTruthy();
    expect(res.length).toBe(k);
  });

  test("should throw query error", () => {
    const k = 3;
    expect(() => {
      search("", k);
    }).toThrowError(new Error("No query provided"));
  });

  test("should throw k value error", () => {
    expect(() => {
      search("something");
    }).toThrowError(new Error("No k value provided"));
  });

  test("should have full query in it", () => {
    expect.assertions(3);
    const query = data.summaries[0].summary
      .replace("The Book in Three Sentences:", "")
      .split(" ")
      .slice(0, 10)
      .join(" ");
    const k = 1;
    const res = search(query, k);

    expect(res).toBeTruthy();
    expect(res.length).toBeLessThanOrEqual(k);
    expect(res).toMatchObject([data.summaries[0]]);
  });

  test("should have partial query in it", () => {
    expect.assertions(3);
    let query = data.summaries[0].summary
      .replace("The Book in Three Sentences:", "")
      .split(" ")
      .slice(0, 10)
      .join(" ");
    const k = 1;

    const res = search(`${query} something`, k);

    expect(res).toBeTruthy();
    expect(res.length).toBeLessThanOrEqual(k);
    expect(res).toMatchObject([data.summaries[0]]);
  });
});
