import { cleanup, fireEvent, render } from "@testing-library/react";
// import { render } from "@testing-library/jest-dom";
import { within } from "@testing-library/dom";
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
  const { getByText, getByLabelText } = within(root);
  getByText("What needs to be done?");
});

it("Check the  header --react", () => {
  // const root = document.createElement("div");
  // ReactDOM.render(<Todo />, root);
  // expect(root.querySelector("h3").textContent).toBe("TODO");
  const { getByText, getByLabelText } = render(<Todo />);
  getByText("What needs to be done?");
});

it("user  input", () => {
  const { getByText, getByLabelText } = render(<Todo />);
  const input = getByLabelText("What needs to be done?");

  fireEvent.change(input, { target: { value: "Cake2" } });
  expect(input.value.length).toBeGreaterThan(0);
});

it("is button value changing ", () => {
  const { getByText, getByLabelText } = render(<Todo />);
  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");

  fireEvent.change(input, { target: { value: "Cake2" } });
  fireEvent.click(button);
  expect(button.textContent).toBe("Add #2");
});
