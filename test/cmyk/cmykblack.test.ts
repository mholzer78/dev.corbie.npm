import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { CmykType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.black;
/*
test('cmyk2hex as params', () => {
  expect(cbColorConvert.cmyk.hex(0, 0, 0)).toBe('000000');
});
*/
test('cmyk2hex', () => {
  expect(cbColorConvert.cmyk.hex(master.cmyk as CmykType)).toBe(master.hex);
});
test('cmyk2rgb', () => {
  expect(cbColorConvert.cmyk.rgb(master.cmyk as CmykType)).toStrictEqual(
    master.rgb,
  );
});
test('cmyk2hwb', () => {
  expect(cbColorConvert.cmyk.hwb(master.cmyk as CmykType)).toStrictEqual(
    master.hwb,
  );
});
test('cmyk2hsv', () => {
  expect(cbColorConvert.cmyk.hsv(master.cmyk as CmykType)).toStrictEqual(
    master.hsv,
  );
});
test('cmyk2hsl', () => {
  expect(cbColorConvert.cmyk.hsl(master.cmyk as CmykType)).toStrictEqual(
    master.hsl,
  );
});
test('cmyk2cmyk', () => {
  expect(cbColorConvert.cmyk.cmyk(master.cmyk as CmykType)).toStrictEqual(
    master.cmyk,
  );
});
