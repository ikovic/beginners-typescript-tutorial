import { expect, it } from "vitest";

type Amount = number | { amount: number };
type CoerceAmount = (amount: Amount) => number;

const coerceAmount: CoerceAmount = (input) => {
  if (typeof input === "number") {
    return input;
  }

  return input.amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
