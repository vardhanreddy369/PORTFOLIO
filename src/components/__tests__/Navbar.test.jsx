import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("displays all navigation items", () => {
    render(<Navbar />);

    const expectedItems = ["Home", "About", "Education", "Projects", "Skills", "Contact", "Resume"];
    expectedItems.forEach((label) => {
      expect(screen.getByRole(label === "Resume" ? "link" : "button", { name: label })).toBeInTheDocument();
    });
  });

  test("hides when scrolling down and reappears on scroll up", () => {
    render(<Navbar />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("navbar--visible");

    window.scrollY = 200;
    fireEvent(window, new Event("scroll"));

    expect(nav).toHaveClass("navbar--hidden");

    window.scrollY = 0;
    fireEvent(window, new Event("scroll"));

    expect(nav).toHaveClass("navbar--visible");
  });
});
