// import { render, screen } from "@testing-library/react";
import { render, within } from "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Todo from "./todo";

//to understan rend

// test("renders learn react link", () => {
//   render(<Todo />);
//   const linkElement = screen.getByText(/TODO/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("Check the  header", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Todo />, root);
  expect(root.querySelector("h3").textContent).toBe("TODO");
});

it("Check the  header -within", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Todo />, root);
  // expect(root.querySelector("h3").textContent).toBe("TODO");
  const { getBytext, get };
});
