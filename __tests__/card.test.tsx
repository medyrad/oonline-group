import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../src/components/ui/card";

describe("<Card /> compound components", () => {
  it("renders structural slots", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>42 items</CardContent>
        <CardFooter>
          <span>Footer</span>
        </CardFooter>
      </Card>,
    );

    expect(screen.getByText("Orders")).toHaveAttribute("data-slot", "card-title");
    expect(screen.getByText("42 items")).toHaveAttribute("data-slot", "card-content");
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
