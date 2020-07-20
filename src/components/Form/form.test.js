import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Form from "./";

describe("renders Form correctly", () => {
  const searchHandler = jest.fn();
  const selectionHandler = jest.fn();
  it("renders books", () => {
    const Books = [
      {
        title: "Sample title",
      },
    ];
    const { getByText } = render(
      <Form
        books={Books}
        searchHandler={searchHandler}
        selectionHandler={selectionHandler}
      />
    );

    expect(getByText(/Sample title/i)).toBeTruthy();
  });
  it("matches snapshot", () => {
    const Books = [];
    const form = renderer
      .create(
        <Form
          books={Books}
          searchHandler={searchHandler}
          selectionHandler={selectionHandler}
        />
      )
      .toJSON();

    expect(form).toMatchSnapshot();
  });
});
