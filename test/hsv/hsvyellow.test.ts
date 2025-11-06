import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { DefaultType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.yellow;
/*
test('hsv2hex as params', () => {
  expect(cbColorConvert.hsv.hex(0, 0, 0)).toBe('000000');
});
*/
test('hsv2hex', () => {
  expect(cbColorConvert.hsv.hex(master.hsv as DefaultType)).toBe('ffd901');
});
test('hsv2rgb', () => {
  expect(cbColorConvert.hsv.rgb(master.hsv as DefaultType)).toStrictEqual([
    255, 217, 1,
  ]);
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
