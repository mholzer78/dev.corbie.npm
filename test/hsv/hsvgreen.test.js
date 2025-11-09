import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';

let master = colors.green;
test('hsv2hex as params', () => {
  expect(cbColorConvert.hsv.hex(...master.hsv)).toBe(master.hex);
});
test('hsv2hex as object', () => {
  expect(cbColorConvert.hsv.hex(master.hsvObj)).toBe(master.hex);
});
test('hsv2hex', () => {
  expect(cbColorConvert.hsv.hex(master.hsv)).toBe(master.hex);
});
test('hsv2name', () => {
  expect(cbColorConvert.hsv.name(master.hsv)).toBe(master.name);
});
test('hsv2name', () => {
  expect(cbColorConvert.hsv.name(master.hsv)).toBe(master.name);
});
test('hsv2rgb', () => {
  expect(cbColorConvert.hsv.rgb(master.hsv)).toStrictEqual(master.rgb);
});
test('hsv2hwb', () => {
  expect(cbColorConvert.hsv.hwb(master.hsv)).toStrictEqual(master.hwb);
});
test('hsv2hsv', () => {
  expect(cbColorConvert.hsv.hsv(master.hsv)).toStrictEqual(master.hsv);
});
test('hsv2hsl', () => {
  expect(cbColorConvert.hsv.hsl(master.hsv)).toStrictEqual(master.hsl);
});
test('hsv2cmyk', () => {
  expect(cbColorConvert.hsv.cmyk(master.hsv)).toStrictEqual(master.cmyk);
});
