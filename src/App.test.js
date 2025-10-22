import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particles", () => () => <div data-testid="particles" />);
jest.mock("./components/Hero", () => () => <section aria-label="Hero Section" />);
jest.mock("./components/About", () => () => <section aria-label="About Section" />);
jest.mock("./components/Education", () => () => <section aria-label="Education Section" />);
jest.mock("./components/Skills", () => () => <section aria-label="Skills Section" />);
jest.mock("./components/Projects", () => () => <section aria-label="Projects Section" />);
jest.mock("./components/Footer", () => () => <footer />); 

describe("App integration", () => {
  test("renders navbar and primary sections", () => {
    render(<App />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /let's connect/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /send me a message/i })).toBeInTheDocument();
  });
});
