import Home from "./Home";

import "@testing-library/jest-dom";
const {
  render,
  screen,
  fireEvent,
  getByText,
} = require("@testing-library/react");
jest.mock("next/router", () => require("next-router-mock"));
describe("Home element", () => {
  test("'backward' button changes slide on click", () => {
    render(<Home />);
    const backwardButton = screen.getByLabelText("backward-button");
    fireEvent.click(backwardButton);
    const result = screen.getByText(
      "Sapphire Palace is located in a beautiful area by the Mediterranean Sea, in a place full of Italian climate. Our beach, offers excellent conditions for relaxation and water sports."
    );
    expect(result).toBeInTheDocument();
  });
  test("'forward' button changes slide on click", () => {
    render(<Home />);
    const forwardButton = screen.getByLabelText("forward-button");
    fireEvent.click(forwardButton);
    const result = screen.getByText(
      "Our team of chefs serves exquisite dishes made from the best ingredients, combining traditional flavors with modern culinary techniques."
    );
    expect(result).toBeInTheDocument();
  });
});
