import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';

let master = colors.yellow;

test('cmyk2rgb as params', () => {
  expect(cbColorConvert.cmyk.hex(...master.cmyk)).toBe('ffd900');
});
test('cmyk2rgb as object', () => {
  expect(cbColorConvert.cmyk.hex(master.cmykObj)).toBe('ffd900');
});
test('cmyk2hex', () => {
  expect(cbColorConvert.cmyk.hex(master.cmyk)).toBe('ffd900');
});
test('cmyk2name', () => {
  expect(cbColorConvert.cmyk.name(master.cmyk)).toBe(master.name);
});
test('cmyk2rgb', () => {
  expect(cbColorConvert.cmyk.rgb(master.cmyk)).toStrictEqual([255, 217, +0]);
});
test('cmyk2hwb', () => {
  expect(cbColorConvert.cmyk.hwb(master.cmyk)).toStrictEqual(master.hwb);
});
test('cmyk2hsv', () => {
  expect(cbColorConvert.cmyk.hsv(master.cmyk)).toStrictEqual([51, 100, 100]);
});
test('cmyk2hsl', () => {
  expect(cbColorConvert.cmyk.hsl(master.cmyk)).toStrictEqual([51, 100, 50]);
});
test('cmyk2cmyk', () => {
  expect(cbColorConvert.cmyk.cmyk(master.cmyk)).toStrictEqual(master.cmyk);
});
