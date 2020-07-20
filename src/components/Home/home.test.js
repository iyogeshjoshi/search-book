import React from "react";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "./";

describe("Renders Home correctly", () => {
  afterAll(cleanup);
  it("matches snapshot", () => {
    const home = renderer.create(<Home />).toJSON();

    expect(home).toMatchSnapshot();
  });
});
