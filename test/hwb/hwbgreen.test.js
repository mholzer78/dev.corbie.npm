import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';

let master = colors.green;

test('hwb2hex as params', () => {
  expect(cbColorConvert.hwb.hex(...master.hwb)).toBe('05ab6e');
});
test('hwb2hex as object', () => {
  expect(cbColorConvert.hwb.hex(master.hwbObj)).toBe('05ab6e');
});
test('hwb2hex', () => {
  expect(cbColorConvert.hwb.hex(master.hwb)).toBe('05ab6e');
});
test('hwb2name', () => {
  expect(cbColorConvert.hwb.name(master.hwb)).toBe(master.name);
});
test('hwb2rgb', () => {
  expect(cbColorConvert.hwb.rgb(master.hwb)).toStrictEqual([5, 171, 110]);
});
test('hwb2hwb', () => {
  expect(cbColorConvert.hwb.hwb(master.hwb)).toStrictEqual(master.hwb);
});
test('hwb2hsv', () => {
  expect(cbColorConvert.hwb.hsv(master.hwb)).toStrictEqual([158, 97.1, 67.1]);
});
test('hwb2hsl', () => {
  expect(cbColorConvert.hwb.hsl(master.hwb)).toStrictEqual([158, 94.3, 34.5]);
});
test('hwb2cmyk', () => {
  expect(cbColorConvert.hwb.cmyk(master.hwb)).toStrictEqual([97, 0, 36, 33]);
});
test('hwb2cmyk', () => {
  expect(cbColorConvert.hwb.name(master.hwb)).toBe(
    'No name found that matches this value',
  );
});
