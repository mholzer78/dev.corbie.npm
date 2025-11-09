import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import colors from '../colors.js';
import { TCbDefault } from '../../src/modules/Color.js';

let master = colors.yellow;

test('hsv2hex as params', () => {
  expect(cbColorConvert.hsv.hex(...master.hsv as TCbDefault)).toBe('ffd901');
});
test('hsv2hex as object', () => {
  expect(cbColorConvert.hsv.hex(master.hsvObj)).toBe('ffd901');
});
test('hsv2hex', () => {
  expect(cbColorConvert.hsv.hex(master.hsv as TCbDefault)).toBe('ffd901');
});
test('hsv2name', () => {
  expect(cbColorConvert.hsv.name(master.hsv as TCbDefault)).toBe(master.name);
});
test('hsv2rgb', () => {
  expect(cbColorConvert.hsv.rgb(master.hsv as TCbDefault)).toStrictEqual([255, 217, 1]);
});
test('hsv2hwb', () => {
  expect(cbColorConvert.hsv.hwb(master.hsv as TCbDefault)).toStrictEqual(master.hwb);
});
test('hsv2hsv', () => {
  expect(cbColorConvert.hsv.hsv(master.hsv as TCbDefault)).toStrictEqual(master.hsv);
});
test('hsv2hsl', () => {
  expect(cbColorConvert.hsv.hsl(master.hsv as TCbDefault)).toStrictEqual(master.hsl);
});
test('hsv2cmyk', () => {
  expect(cbColorConvert.hsv.cmyk(master.hsv as TCbDefault)).toStrictEqual(master.cmyk);
});
