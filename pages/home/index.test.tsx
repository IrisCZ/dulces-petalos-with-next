import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import { mockGet } from "../../src/mocks/server";
import Home from ".";

jest.mock('next/router', () => require('next-router-mock'));

describe("Home", () => {
  it("renders main title", () => {
    mockGet("/api/product", (_: any, res: (arg0: any) => any, ctx: { json: (arg0: never[]) => any; }) => {
      return res(ctx.json([]));
    });

    render(<Home />);
    const title = screen.getByText(/floristería dulces pétalos/i);

    expect(title).toBeInTheDocument();
  });

  it("renders a list view", async () => {
    mockGet("/api/product", (_: any, res: (arg0: any) => any, ctx: { json: (arg0: ({ id: string; name: string; binomialName: string; price: number; wateringsPerWeek: number; } | { id: string; name: string; binomialName: string; price: number; wateringsPerWeek?: undefined; })[]) => any; }) => {
      return res(
        ctx.json([
          {
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            name: "Orquídea",
            binomialName: "Ophrys tenthredinifera",
            price: 4.95,
            wateringsPerWeek: 1,
          },
          {
            id: "ND1elEt4nqZrCeFflDUZ2",
            name: "Rosa de damasco",
            binomialName: "Rosa damascena",
            price: 10.5,
          },
        ])
      );
    });

        render(<Home />);

    await waitFor(() => {
      expect(screen.getByText(/orquídea/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/rosa de damasco/i)).toBeInTheDocument();
  });

  it("filters a list element", async () => {
    mockGet("/api/product", (_: any, res: (arg0: any) => any, ctx: { json: (arg0: ({ id: string; name: string; binomialName: string; price: number; wateringsPerWeek: number; } | { id: string; name: string; binomialName: string; price: number; wateringsPerWeek?: undefined; })[]) => any; }) => {
      return res(
        ctx.json([
          {
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            name: "Orquídea",
            binomialName: "Ophrys tenthredinifera",
            price: 4.95,
            wateringsPerWeek: 1,
          },
          {
            id: "ND1elEt4nqZrCeFflDUZ2",
            name: "Rosa de damasco",
            binomialName: "Rosa damascena",
            price: 10.5,
          },
        ])
      );
    });

        render(<Home />);

    userEvent.type(screen.getByLabelText("search"), "orq");

    await waitFor(() => {
      expect(screen.getByText(/orquídea/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText(/rosa de damasco/i)).not.toBeInTheDocument();
    });
  });
});
