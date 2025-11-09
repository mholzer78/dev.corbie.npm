import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';

let master = colors.yellow;

test('hwb2hex as params', () => {
  expect(cbColorConvert.hwb.hex(...master.hwb)).toBe('ffd900');
});
test('hwb2hex as object', () => {
  expect(cbColorConvert.hwb.hex(master.hwbObj)).toBe('ffd900');
});
test('hwb2hex', () => {
  expect(cbColorConvert.hwb.hex(master.hwb)).toBe('ffd900');
});
test('hwb2name', () => {
  expect(cbColorConvert.hwb.name(master.hwb)).toBe(master.name);
});
test('hwb2rgb', () => {
  expect(cbColorConvert.hwb.rgb(master.hwb)).toStrictEqual([255, 217, 0]);
});
test('hwb2hwb', () => {
  expect(cbColorConvert.hwb.hwb(master.hwb)).toStrictEqual(master.hwb);
});
test('hwb2hsv', () => {
  expect(cbColorConvert.hwb.hsv(master.hwb)).toStrictEqual([51, 100, 100]);
});
test('hwb2hsl', () => {
  expect(cbColorConvert.hwb.hsl(master.hwb)).toStrictEqual([51, 100, 50]);
});
test('hwb2cmyk', () => {
  expect(cbColorConvert.hwb.cmyk(master.hwb)).toStrictEqual(master.cmyk);
});
