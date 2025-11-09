import cbColorConvert from '../src/index.js';
import { test, expect } from 'vitest';
import colors from './colors.js';
import { TCbDefault } from '../src/modules/Color.js';

for (const [key, value] of Object.entries(colors)) {
  test('rgb2hex as params ' + key, () => {
    expect(cbColorConvert.rgb.hex(...value.rgb as TCbDefault)).toBe(value.hex);
  });
  test('rgb2hex as object ' + key, () => {
    expect(cbColorConvert.rgb.hex(value.rgbObj)).toBe(value.hex);
  });
  test('rgb2hex ' + key, () => {
    expect(cbColorConvert.rgb.hex(value.rgb as TCbDefault)).toBe(value.hex);
  });
  test('rgb2name ' + key, () => {
    expect(cbColorConvert.rgb.name(value.rgb as TCbDefault)).toBe(value.name);
  });
  test('rgb2rgb ' + key, () => {
    expect(cbColorConvert.rgb.rgb(value.rgb as TCbDefault)).toStrictEqual(value.rgb);
  });
  test('rgb2hwb ' + key, () => {
    expect(cbColorConvert.rgb.hwb(value.rgb as TCbDefault)).toStrictEqual(value.hwb);
  });
  test('rgb2hsv ' + key, () => {
    expect(cbColorConvert.rgb.hsv(value.rgb as TCbDefault)).toStrictEqual(value.hsv);
  });
  test('rgb2hsl ' + key, () => {
    expect(cbColorConvert.rgb.hsl(value.rgb as TCbDefault)).toStrictEqual(value.hsl);
  });
  test('rgb2cmyk ' + key, () => {
    expect(cbColorConvert.rgb.cmyk(value.rgb as TCbDefault)).toStrictEqual(value.cmyk);
  });
  test('rgb2name ' + key, () => {
    expect(cbColorConvert.rgb.name(value.rgb as TCbDefault)).toStrictEqual(value.name);
  });
}
