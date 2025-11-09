import cbColorConvert from '../src/index.js';
import { test, expect } from 'vitest';
import colors from './colors.json';

for (const [key, value] of Object.entries(colors)) {
  test('hex2hex' + key, () => {
    expect(cbColorConvert.hex.hex(value.hex)).toBe(value.hex);
  });
  test('hex2name' + key, () => {
    expect(cbColorConvert.hex.name(value.hex)).toBe(value.name);
  });
  test('hex2rgb' + key, () => {
    expect(cbColorConvert.hex.rgb(value.hex)).toStrictEqual(value.rgb);
  });
  test('hex2hwb' + key, () => {
    expect(cbColorConvert.hex.hwb(value.hex)).toStrictEqual(value.hwb);
  });
  test('hex2hsv' + key, () => {
    expect(cbColorConvert.hex.hsv(value.hex)).toStrictEqual(value.hsv);
  });
  test('hex2hsl' + key, () => {
    expect(cbColorConvert.hex.hsl(value.hex)).toStrictEqual(value.hsl);
  });
  test('hex2cmyk' + key, () => {
    expect(cbColorConvert.hex.cmyk(value.hex)).toStrictEqual(value.cmyk);
  });
}
