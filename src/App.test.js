import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  test("renders magnificent monkeys", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  test("renders radical rhinos after button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });
    userEvent.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
