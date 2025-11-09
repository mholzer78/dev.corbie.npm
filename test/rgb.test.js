import cbColorConvert from '../src/index.js';
import { test, expect } from 'vitest';
import colors from './colors.js';

for (const [key, value] of Object.entries(colors)) {
  test('rgb2hex as params ' + key, () => {
    expect(cbColorConvert.rgb.hex(...value.rgb)).toBe(value.hex);
  });
  test('rgb2hex as object ' + key, () => {
    expect(cbColorConvert.rgb.hex(value.rgbObj)).toBe(value.hex);
  });
  test('rgb2hex ' + key, () => {
    expect(cbColorConvert.rgb.hex(value.rgb)).toBe(value.hex);
  });
  test('rgb2name ' + key, () => {
    expect(cbColorConvert.rgb.name(value.rgb)).toBe(value.name);
  });
  test('rgb2rgb ' + key, () => {
    expect(cbColorConvert.rgb.rgb(value.rgb)).toStrictEqual(value.rgb);
  });
  test('rgb2hwb ' + key, () => {
    expect(cbColorConvert.rgb.hwb(value.rgb)).toStrictEqual(value.hwb);
  });
  test('rgb2hsv ' + key, () => {
    expect(cbColorConvert.rgb.hsv(value.rgb)).toStrictEqual(value.hsv);
  });
  test('rgb2hsl ' + key, () => {
    expect(cbColorConvert.rgb.hsl(value.rgb)).toStrictEqual(value.hsl);
  });
  test('rgb2cmyk ' + key, () => {
    expect(cbColorConvert.rgb.cmyk(value.rgb)).toStrictEqual(value.cmyk);
  });
  test('rgb2name ' + key, () => {
    expect(cbColorConvert.rgb.name(value.rgb)).toStrictEqual(value.name);
  });
}
