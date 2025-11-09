import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';

let master = colors.white;

test('cmyk2rgb as params', () => {
  expect(cbColorConvert.cmyk.hex(...master.cmyk)).toBe(master.hex);
});
test('cmyk2rgb as object', () => {
  expect(cbColorConvert.cmyk.hex(master.cmykObj)).toBe(master.hex);
});
test('cmyk2hex', () => {
  expect(cbColorConvert.cmyk.hex(master.cmyk)).toBe(master.hex);
});
test('cmyk2name', () => {
  expect(cbColorConvert.cmyk.name(master.cmyk)).toBe(master.name);
});
test('cmyk2rgb', () => {
  expect(cbColorConvert.cmyk.rgb(master.cmyk)).toStrictEqual(master.rgb);
});
test('cmyk2hwb', () => {
  expect(cbColorConvert.cmyk.hwb(master.cmyk)).toStrictEqual(master.hwb);
});
test('cmyk2hsv', () => {
  expect(cbColorConvert.cmyk.hsv(master.cmyk)).toStrictEqual(master.hsv);
});
test('cmyk2hsl', () => {
  expect(cbColorConvert.cmyk.hsl(master.cmyk)).toStrictEqual(master.hsl);
});
test('cmyk2cmyk', () => {
  expect(cbColorConvert.cmyk.cmyk(master.cmyk)).toStrictEqual(master.cmyk);
});
