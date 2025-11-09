import cbColorConvert from '../src/index.js';
import { test, expect } from 'vitest';
import colors from './colors.js';

for (const [key, value] of Object.entries(colors)) {
  test('hex2hex', () => {
    expect(cbColorConvert.hex.hex(value.hex)).toBe(value.hex);
  });
  test('hex2name', () => {
    expect(cbColorConvert.hex.name(value.hex)).toBe(value.name);
  });
  test('hex2rgb', () => {
    expect(cbColorConvert.hex.rgb(value.hex)).toStrictEqual(value.rgb);
  });
  test('hex2hwb', () => {
    expect(cbColorConvert.hex.hwb(value.hex)).toStrictEqual(value.hwb);
  });
  test('hex2hsv', () => {
    expect(cbColorConvert.hex.hsv(value.hex)).toStrictEqual(value.hsv);
  });
  test('hex2hsl', () => {
    expect(cbColorConvert.hex.hsl(value.hex)).toStrictEqual(value.hsl);
  });
  test('hex2cmyk', () => {
    expect(cbColorConvert.hex.cmyk(value.hex)).toStrictEqual(value.cmyk);
  });
}
