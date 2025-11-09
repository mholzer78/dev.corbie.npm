import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.json';
import { TCbCmyk } from '../../src/modules/Color.js';

let master = colors.white;

test('cmyk2rgb as params', () => {
  expect(cbColorConvert.cmyk.hex(...master.cmyk as TCbCmyk)).toBe(master.hex);
});
test('cmyk2rgb as object', () => {
  expect(cbColorConvert.cmyk.hex(master.cmykObj)).toBe(master.hex);
});
test('cmyk2hex', () => {
  expect(cbColorConvert.cmyk.hex(master.cmyk as TCbCmyk)).toBe(master.hex);
});
test('cmyk2name', () => {
  expect(cbColorConvert.cmyk.name(master.cmyk as TCbCmyk)).toBe(master.name);
});
test('cmyk2rgb', () => {
  expect(cbColorConvert.cmyk.rgb(master.cmyk as TCbCmyk)).toStrictEqual(master.rgb);
});
test('cmyk2hwb', () => {
  expect(cbColorConvert.cmyk.hwb(master.cmyk as TCbCmyk)).toStrictEqual(master.hwb);
});
test('cmyk2hsv', () => {
  expect(cbColorConvert.cmyk.hsv(master.cmyk as TCbCmyk)).toStrictEqual(master.hsv);
});
test('cmyk2hsl', () => {
  expect(cbColorConvert.cmyk.hsl(master.cmyk as TCbCmyk)).toStrictEqual(master.hsl);
});
test('cmyk2cmyk', () => {
  expect(cbColorConvert.cmyk.cmyk(master.cmyk as TCbCmyk)).toStrictEqual(master.cmyk);
});
