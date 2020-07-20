import React from "react";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Card from "./card";

describe("Renders Card correctly", () => {
  afterAll(cleanup);
  it("renders book card", () => {
    const properties = {
      index: 1,
      book: {
        title: "sample title",
        author: {
          id: 2,
          author: "Some author",
        },
        summary: "This is some summary",
      },
    };
    // const { getByText } = render(<Card {...properties} />);
    const card = renderer.create(<Card {...properties} />).toJSON();

    expect(card).toMatchSnapshot();
  });
  it("renders with attributes", () => {
    const properties = {
      index: 1,
      book: {
        title: "sample title",
        author: {
          id: 2,
          author: "Some author",
        },
        summary: "This is some summary",
      },
    };
    const { getByText } = render(<Card {...properties} />);

    expect(getByText(/sample title/i)).toBeTruthy();
    expect(getByText(/some author/i)).toBeTruthy();
    expect(getByText(/This is some summary/i)).toBeTruthy();
  });
});
