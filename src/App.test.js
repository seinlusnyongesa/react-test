import App from "./App";
import { render } from "@testing-library/react";

describe("App component", () => {
  test("ensure the heading is correct", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
