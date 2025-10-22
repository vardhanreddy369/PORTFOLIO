import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact";
import { CONTACT_EMAIL } from "../../data/content";

describe("Contact section", () => {
  const originalLocation = window.location;

  beforeEach(() => {
    delete window.location;
    window.location = { href: "" };
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  test("renders both contact details and message form", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: new RegExp(CONTACT_EMAIL) })).toHaveAttribute("href", expect.stringContaining("mailto"));
    expect(screen.getByRole("heading", { name: /send me a message/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument();
  });

  test("submits message via mailto link and resets the form", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText(/your name/i);
    const emailInput = screen.getByPlaceholderText(/your email/i);
    const messageInput = screen.getByPlaceholderText(/your message/i);
    const submitButton = screen.getByRole("button", { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: "Visitor" } });
    fireEvent.change(emailInput, { target: { value: "visitor@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello there!" } });
    fireEvent.click(submitButton);

    expect(window.location.href).toContain(`mailto:${CONTACT_EMAIL}`);
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });
});
