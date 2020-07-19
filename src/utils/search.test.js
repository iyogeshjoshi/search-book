import search from "./search";

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
});
