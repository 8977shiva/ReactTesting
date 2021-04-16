import React from "react";
import renderer from "react-test-renderer";
import Todo from "../todo";

it("creating snapshot", () => {
  const comp = renderer.create(<Todo />);
  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});
