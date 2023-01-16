import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { mockGet } from "../../../src/mocks/server";
import Detail  from ".";

jest.mock('next/router', () => require('next-router-mock'));

describe("Home", () => {
  it("renders main title", () => {
    mockGet("/api/product", (_, res, ctx) => {
      return res(ctx.json([]));
    });

    renderComponent();
    const title = screen.getByText(/floristería dulces pétalos/i);

    expect(title).toBeInTheDocument();
  });
});

const renderComponent = () => {
  render(
      <Detail />
  );
};
