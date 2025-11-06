import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { CmykType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.green;
/*
test('cmyk2hex as params', () => {
  expect(cbColorConvert.cmyk.hex(0, 0, 0)).toBe('000000');
});
*/
test('cmyk2hex', () => {
  expect(cbColorConvert.cmyk.hex(master.cmyk as CmykType)).toBe('03ab6d');
});
test('cmyk2rgb', () => {
  expect(cbColorConvert.cmyk.rgb(master.cmyk as CmykType)).toStrictEqual([
    3, 171, 109,
  ]);
});
test('cmyk2hwb', () => {
  expect(cbColorConvert.cmyk.hwb(master.cmyk as CmykType)).toStrictEqual([
    158, 1, 33,
  ]);
});
test('cmyk2hsv', () => {
  expect(cbColorConvert.cmyk.hsv(master.cmyk as CmykType)).toStrictEqual([
    158, 98.2, 67.1,
  ]);
});
test('cmyk2hsl', () => {
  expect(cbColorConvert.cmyk.hsl(master.cmyk as CmykType)).toStrictEqual([
    158, 96.6, 34.1,
  ]);
});
test('cmyk2cmyk', () => {
  expect(cbColorConvert.cmyk.cmyk(master.cmyk as CmykType)).toStrictEqual(
    master.cmyk,
  );
});
