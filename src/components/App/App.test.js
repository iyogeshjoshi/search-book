import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./";

describe("App renders properly", () => {
  test("renders learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/search book/i);

    expect(linkElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
