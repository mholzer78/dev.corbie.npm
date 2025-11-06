import cbColorConvert from "./index.js";
import { test, expect } from "vitest";

test("rgb2hex", () => {
  expect(cbColorConvert.rgb.hex(0,0,0)).toBe('000000');
});