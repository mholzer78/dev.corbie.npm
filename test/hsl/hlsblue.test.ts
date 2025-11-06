import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { DefaultType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.blue;
/*
test('hsl2hex as params', () => {
  expect(cbColorConvert.hsl.hex(0, 0, 0)).toBe('000000');
});
*/
test('hsl2hex', () => {
  expect(cbColorConvert.hsl.hex(master.hsl as DefaultType)).toBe(master.hex);
});
test('hsl2rgb', () => {
  expect(cbColorConvert.hsl.rgb(master.hsl as DefaultType)).toStrictEqual(
    master.rgb,
  );
});
test('hsl2hwb', () => {
  expect(cbColorConvert.hsl.hwb(master.hsl as DefaultType)).toStrictEqual(
    master.hwb,
  );
});
test('hsl2hsv', () => {
  expect(cbColorConvert.hsl.hsv(master.hsl as DefaultType)).toStrictEqual(
    master.hsv,
  );
});
test('hsl2hsl', () => {
  expect(cbColorConvert.hsl.hsl(master.hsl as DefaultType)).toStrictEqual(
    master.hsl,
  );
});
test('hsl2cmyk', () => {
  expect(cbColorConvert.hsl.cmyk(master.hsl as DefaultType)).toStrictEqual(
    master.cmyk,
  );
});
