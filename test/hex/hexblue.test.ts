import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { HexType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.blue;
/*
test('hex2hex as params', () => {
  expect(cbColorConvert.hex.hex(0, 0, 0)).toBe('000000');
});
*/
test('hex2hex', () => {
  expect(cbColorConvert.hex.hex(master.hex as HexType)).toBe(master.hex);
});
test('hex2rgb', () => {
  expect(cbColorConvert.hex.rgb(master.hex as HexType)).toStrictEqual(
    master.rgb,
  );
});
test('hex2hwb', () => {
  expect(cbColorConvert.hex.hwb(master.hex as HexType)).toStrictEqual(
    master.hwb,
  );
});
test('hex2hsv', () => {
  expect(cbColorConvert.hex.hsv(master.hex as HexType)).toStrictEqual(
    master.hsv,
  );
});
test('hex2hsl', () => {
  expect(cbColorConvert.hex.hsl(master.hex as HexType)).toStrictEqual(
    master.hsl,
  );
});
test('hex2cmyk', () => {
  expect(cbColorConvert.hex.cmyk(master.hex as HexType)).toStrictEqual(
    master.cmyk,
  );
});
