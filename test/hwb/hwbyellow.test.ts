import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { DefaultType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.yellow;
/*
test('hwb2hex as params', () => {
  expect(cbColorConvert.hwb.hex(0, 0, 0)).toBe('000000');
});
*/
test('hwb2hex', () => {
  expect(cbColorConvert.hwb.hex(master.hwb as DefaultType)).toBe('ffd900');
});
test('hwb2rgb', () => {
  expect(cbColorConvert.hwb.rgb(master.hwb as DefaultType)).toStrictEqual([
    255, 217, 0,
  ]);
});
test('hwb2hwb', () => {
  expect(cbColorConvert.hwb.hwb(master.hwb as DefaultType)).toStrictEqual(
    master.hwb,
  );
});
test('hwb2hsv', () => {
  expect(cbColorConvert.hwb.hsv(master.hwb as DefaultType)).toStrictEqual([
    51, 100, 100,
  ]);
});
test('hwb2hsl', () => {
  expect(cbColorConvert.hwb.hsl(master.hwb as DefaultType)).toStrictEqual([
    51, 100, 50,
  ]);
});
test('hwb2cmyk', () => {
  expect(cbColorConvert.hwb.cmyk(master.hwb as DefaultType)).toStrictEqual(
    master.cmyk,
  );
});
