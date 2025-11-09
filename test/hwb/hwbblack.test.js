import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';

let master = colors.black;

test('hwb2hex as params', () => {
  expect(cbColorConvert.hwb.hex(...master.hwb)).toBe(master.hex);
});
test('hwb2hex as object', () => {
  expect(cbColorConvert.hwb.hex(master.hwbObj)).toBe(master.hex);
});
test('hwb2hex', () => {
  expect(cbColorConvert.hwb.hex(master.hwb)).toBe(master.hex);
});
test('hwb2name', () => {
  expect(cbColorConvert.hwb.name(master.hwb)).toBe(master.name);
});
test('hwb2rgb', () => {
  expect(cbColorConvert.hwb.rgb(master.hwb)).toStrictEqual(master.rgb);
});
test('hwb2hwb', () => {
  expect(cbColorConvert.hwb.hwb(master.hwb)).toStrictEqual(master.hwb);
});
test('hwb2hsv', () => {
  expect(cbColorConvert.hwb.hsv(master.hwb)).toStrictEqual(master.hsv);
});
test('hwb2hsl', () => {
  expect(cbColorConvert.hwb.hsl(master.hwb)).toStrictEqual(master.hsl);
});
test('hwb2cmyk', () => {
  expect(cbColorConvert.hwb.cmyk(master.hwb)).toStrictEqual(master.cmyk);
});
