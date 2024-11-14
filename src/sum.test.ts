import { add } from "./sum"

test("sum", () => {
  expect(add(1, 2)).toBe(3);
})