import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import BookList from "./";

describe("Renders BookList correctly", () => {
  it("matches snapshot", () => {
    const Books = [];
    const bookList = renderer.create(<BookList books={Books} />).toJSON();

    expect(bookList).toMatchSnapshot();
  });
  it("renders all the passed books", () => {
    const Books = new Map([
      [
        1,
        {
          title: "title 1",
          author: {
            id: 1,
            author: "author 1",
          },
          summary: "summary 1",
        },
      ],
      [
        2,
        {
          title: "title 2",
          author: {
            id: 2,
            author: "author 2",
          },
          summary: "summary 2",
        },
      ],
    ]);
    const { getByText } = render(<BookList books={Books} />);

    expect(getByText(/title 1/i)).toBeTruthy();
    expect(getByText(/author 1/i)).toBeTruthy();
    expect(getByText(/summary 1/i)).toBeTruthy();
    expect(getByText(/title 2/i)).toBeTruthy();
    expect(getByText(/author 2/i)).toBeTruthy();
    expect(getByText(/summary 2/i)).toBeTruthy();
  });
});
