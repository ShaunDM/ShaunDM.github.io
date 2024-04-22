import { render, screen } from "@testing-library/react";
import Layout from "../layout/Layout";

describe("01-General tests", () => {
  test("renders Layout", () => {
    render(<Layout />);
    const linkElement = screen.getByText(/shaun mcrae - software engineer/i);
    expect(linkElement).toBeInTheDocument();
  });
});
