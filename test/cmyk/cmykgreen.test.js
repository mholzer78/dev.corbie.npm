import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';

let master = colors.green;

test('cmyk2rgb as params', () => {
  expect(cbColorConvert.cmyk.hex(...master.cmyk)).toBe('03ab6d');
});
test('cmyk2rgb as object', () => {
  expect(cbColorConvert.cmyk.hex(master.cmykObj)).toBe('03ab6d');
});
test('cmyk2hex', () => {
  expect(cbColorConvert.cmyk.hex(master.cmyk)).toBe('03ab6d');
});
test('cmyk2name', () => {
  expect(cbColorConvert.cmyk.name(master.cmyk)).toBe(master.name);
});
test('cmyk2rgb', () => {
  expect(cbColorConvert.cmyk.rgb(master.cmyk)).toStrictEqual([3, 171, 109]);
});
test('cmyk2hwb', () => {
  expect(cbColorConvert.cmyk.hwb(master.cmyk)).toStrictEqual([158, 1, 33]);
});
test('cmyk2hsv', () => {
  expect(cbColorConvert.cmyk.hsv(master.cmyk)).toStrictEqual([158, 98.2, 67.1]);
});
test('cmyk2hsl', () => {
  expect(cbColorConvert.cmyk.hsl(master.cmyk)).toStrictEqual([158, 96.6, 34.1]);
});
test('cmyk2cmyk', () => {
  expect(cbColorConvert.cmyk.cmyk(master.cmyk)).toStrictEqual(master.cmyk);
});
