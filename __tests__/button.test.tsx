import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import React from "react";
import { Button } from "../src/components/ui/button";

describe("<Button />", () => {
  it("renders a native button by default", () => {
    render(<Button>Submit</Button>);

    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute("data-slot", "button");
  });

  it("respects the asChild prop", () => {
    render(
      <Button asChild>
        <a href="/profile">Profile</a>
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Profile" });
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("data-slot", "button");
  });
});
