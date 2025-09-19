import { greet } from "../src/index";

test("greets properly", () => {
  expect(greet("World")).toBe("👋 Hello, World! Welcome to TypeScript 🚀");
});
