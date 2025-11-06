import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { DefaultType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.white;
/*
test('hwb2hex as params', () => {
  expect(cbColorConvert.hwb.hex(0, 0, 0)).toBe('000000');
});
*/
test('hwb2hex', () => {
  expect(cbColorConvert.hwb.hex(master.hwb as DefaultType)).toBe(master.hex);
});
test('hwb2rgb', () => {
  expect(cbColorConvert.hwb.rgb(master.hwb as DefaultType)).toStrictEqual(
    master.rgb,
  );
});
test('hwb2hwb', () => {
  expect(cbColorConvert.hwb.hwb(master.hwb as DefaultType)).toStrictEqual(
    master.hwb,
  );
});
test('hwb2hsv', () => {
  expect(cbColorConvert.hwb.hsv(master.hwb as DefaultType)).toStrictEqual(
    master.hsv,
  );
});
test('hwb2hsl', () => {
  expect(cbColorConvert.hwb.hsl(master.hwb as DefaultType)).toStrictEqual(
    master.hsl,
  );
});
test('hwb2cmyk', () => {
  expect(cbColorConvert.hwb.cmyk(master.hwb as DefaultType)).toStrictEqual(
    master.cmyk,
  );
});
