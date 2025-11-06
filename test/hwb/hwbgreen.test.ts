import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { DefaultType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.green;
/*
test('hwb2hex as params', () => {
  expect(cbColorConvert.hwb.hex(0, 0, 0)).toBe('000000');
});
*/
test('hwb2hex', () => {
  expect(cbColorConvert.hwb.hex(master.hwb as DefaultType)).toBe('05ab6e');
});
test('hwb2rgb', () => {
  expect(cbColorConvert.hwb.rgb(master.hwb as DefaultType)).toStrictEqual([
    5, 171, 110,
  ]);
});
test('hwb2hwb', () => {
  expect(cbColorConvert.hwb.hwb(master.hwb as DefaultType)).toStrictEqual(
    master.hwb,
  );
});
test('hwb2hsv', () => {
  expect(cbColorConvert.hwb.hsv(master.hwb as DefaultType)).toStrictEqual([
    158, 97.1, 67.1,
  ]);
});
test('hwb2hsl', () => {
  expect(cbColorConvert.hwb.hsl(master.hwb as DefaultType)).toStrictEqual([
    158, 94.3, 34.5,
  ]);
});
test('hwb2cmyk', () => {
  expect(cbColorConvert.hwb.cmyk(master.hwb as DefaultType)).toStrictEqual([
    97, +0, 36, 33,
  ]);
});
