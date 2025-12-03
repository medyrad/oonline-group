import { describe, expect, it } from "@jest/globals";
import { cn } from "../src/lib/utils";

describe("cn utility", () => {
  it("merges tailwind classes predictably", () => {
    expect(cn("px-2 py-1", "px-4", { "text-bold": false, "text-sm": true })).toBe(
      "py-1 px-4 text-sm",
    );
  });
});
