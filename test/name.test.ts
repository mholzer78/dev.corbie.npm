import cbColorConvert from '../src/index.js';
import { test, expect } from 'vitest';
import colors from './colors.js';

for (const [key, value] of Object.entries(colors)) {
  if (value.name !== 'No name found that matches this value') {
    test('name2hex ' + key, () => {
      expect(cbColorConvert.name.hex(value.name)).toBe(value.hex);
    });
    test('name2name ' + key, () => {
      expect(cbColorConvert.name.name(value.name)).toBe(value.name);
    });
    test('name2rgb ' + key, () => {
      expect(cbColorConvert.name.rgb(value.name)).toStrictEqual(value.rgb);
    });
    test('name2hwb ' + key, () => {
      expect(cbColorConvert.name.hwb(value.name)).toStrictEqual(value.hwb);
    });
    test('name2hsv ' + key, () => {
      expect(cbColorConvert.name.hsv(value.name)).toStrictEqual(value.hsv);
    });
    test('name2hsl ' + key, () => {
      expect(cbColorConvert.name.hsl(value.name)).toStrictEqual(value.hsl);
    });
    test('name2cmyk ' + key, () => {
      expect(cbColorConvert.name.cmyk(value.name)).toStrictEqual(value.cmyk);
    });
    test('name2name ' + key, () => {
      expect(cbColorConvert.name.name(value.name)).toStrictEqual(value.name);
    });
  }
}
