import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';

let master = colors.yellow;

test('hsl2hex as params', () => {
  expect(cbColorConvert.hsl.hex(...master.hsl)).toBe('ffd901');
});
test('hsl2hex as object', () => {
  expect(cbColorConvert.hsl.hex(master.hslObj)).toBe('ffd901');
});
test('hsl2hex', () => {
  expect(cbColorConvert.hsl.hex(master.hsl)).toBe('ffd901');
});
test('hsl2name', () => {
  expect(cbColorConvert.hsl.name(master.hsl)).toBe(master.name);
});
test('hsl2rgb', () => {
  expect(cbColorConvert.hsl.rgb(master.hsl)).toStrictEqual([255, 217, 1]);
});
test('hsl2hwb', () => {
  expect(cbColorConvert.hsl.hwb(master.hsl)).toStrictEqual(master.hwb);
});
test('hsl2hsv', () => {
  expect(cbColorConvert.hsl.hsv(master.hsl)).toStrictEqual(master.hsv);
});
test('hsl2hsl', () => {
  expect(cbColorConvert.hsl.hsl(master.hsl)).toStrictEqual(master.hsl);
});
test('hsl2cmyk', () => {
  expect(cbColorConvert.hsl.cmyk(master.hsl)).toStrictEqual(master.cmyk);
});
