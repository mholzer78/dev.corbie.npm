import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.json';
import { TCbDefault } from '../../src/modules/Color.js';

let master = colors.blue;

test('hwb2hex as params', () => {
  expect(cbColorConvert.hwb.hex(...master.hwb as TCbDefault)).toBe(master.hex);
});
test('hwb2hex as object', () => {
  expect(cbColorConvert.hwb.hex(master.hwbObj)).toBe(master.hex);
});
test('hwb2hex', () => {
  expect(cbColorConvert.hwb.hex(master.hwb as TCbDefault)).toBe(master.hex);
});
test('hwb2name', () => {
  expect(cbColorConvert.hwb.name(master.hwb as TCbDefault)).toBe(master.name);
});
test('hwb2rgb', () => {
  expect(cbColorConvert.hwb.rgb(master.hwb as TCbDefault)).toStrictEqual(master.rgb);
});
test('hwb2hwb', () => {
  expect(cbColorConvert.hwb.hwb(master.hwb as TCbDefault)).toStrictEqual(master.hwb);
});
test('hwb2hsv', () => {
  expect(cbColorConvert.hwb.hsv(master.hwb as TCbDefault)).toStrictEqual(master.hsv);
});
test('hwb2hsl', () => {
  expect(cbColorConvert.hwb.hsl(master.hwb as TCbDefault)).toStrictEqual(master.hsl);
});
test('hwb2cmyk', () => {
  expect(cbColorConvert.hwb.cmyk(master.hwb as TCbDefault)).toStrictEqual(master.cmyk);
});
