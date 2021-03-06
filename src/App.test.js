import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("two plus two", () => {
  expect(2 + 2).toBe(4);
});

test("two plus one", () => {
  expect(2 + 2).toBe(4);
});

test("two plus three", () => {
  expect(2 + 2).toBe(4);
});
