import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { DefaultType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.white;
/*
test('hsv2hex as params', () => {
  expect(cbColorConvert.hsv.hex(0, 0, 0)).toBe('000000');
});
*/
test('hsv2hex', () => {
  expect(cbColorConvert.hsv.hex(master.hsv as DefaultType)).toBe(master.hex);
});
test('hsv2rgb', () => {
  expect(cbColorConvert.hsv.rgb(master.hsv as DefaultType)).toStrictEqual(
    master.rgb,
  );
});
test('hsv2hwb', () => {
  expect(cbColorConvert.hsv.hwb(master.hsv as DefaultType)).toStrictEqual(
    master.hwb,
  );
});
test('hsv2hsv', () => {
  expect(cbColorConvert.hsv.hsv(master.hsv as DefaultType)).toStrictEqual(
    master.hsv,
  );
});
test('hsv2hsl', () => {
  expect(cbColorConvert.hsv.hsl(master.hsv as DefaultType)).toStrictEqual(
    master.hsl,
  );
});
test('hsv2cmyk', () => {
  expect(cbColorConvert.hsv.cmyk(master.hsv as DefaultType)).toStrictEqual(
    master.cmyk,
  );
});
