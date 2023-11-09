import {describe, expect, it} from "@jest/globals";
import add from "./index";

describe("add", () => {
  it("should add two numbers together", () => {
    expect(add(4, 3)).toBe(7);
  });
});