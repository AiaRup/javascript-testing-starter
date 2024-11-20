import { describe, expect, it, test } from "vitest";
import { fizzBuzz, max, calculateAverage, calculateFactorial } from "../intro";

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

describe("calculateAverage", () => {
  test("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  test("should calculate the average of an array with a single argument", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  test("should calculate the average of an array with two arguments", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  test("should calculate the average of an array with three arguments", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe("calculateFactorial", () => {
  it("should return 1 if given 0 ", () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  it("should return 1 if given 1 ", () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  it("should return 2 if given 2 ", () => {
    expect(calculateFactorial(2)).toBe(2);
  });

  it("should return 6 if given 3 ", () => {
    expect(calculateFactorial(3)).toBe(6);
  });

  it("should return 24 if given 4 ", () => {
    expect(calculateFactorial(4)).toBe(24);
  });

  it("should return undefined if given a negative number ", () => {
    expect(calculateFactorial(-1)).toBeUndefined();
  });
});
