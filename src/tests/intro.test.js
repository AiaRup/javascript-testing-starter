import { describe, expect, it, test } from "vitest";
import { fizzBuzz, max } from "../intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if the argument is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if the argument is only divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("should return Buzz if the argument is only divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return the argument as a string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(4)).toBe("4");
  });
});
