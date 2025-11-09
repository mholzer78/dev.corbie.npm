import cbColorConvert from '../src/index.js';
import { test, expect } from 'vitest';

test('cmyk2hex lower limit', () => {
  expect(() => cbColorConvert.cmyk.hex([0, 0, -1, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [2] must be between 0 and 100',
    }),
  );
});
test('cmyk2hex upper limit', () => {
  expect(() => cbColorConvert.cmyk.hex([100, 102, 100, 100])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [1] must be between 0 and 100',
    }),
  );
});

test('hex2hsl', () => {
  expect(() => cbColorConvert.hex.hsl('Something')).toThrowError(
    expect.objectContaining({
      message: "Wrong input format. Should be: '(#)abcdef'",
    }),
  );
});

test('hsl2hsv lower limit', () => {
  expect(() => cbColorConvert.hsl.hsv([0, -1, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [1] must be between 0 and 100',
    }),
  );
});
test('hsl2hsv upper limit 1', () => {
  expect(() => cbColorConvert.hsl.hsv([361, 0, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [0] must be between 0 and 360',
    }),
  );
});
test('hsl2hsv upper limit 2', () => {
  expect(() => cbColorConvert.hsl.hsv([0, 0, 101])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [2] must be between 0 and 100',
    }),
  );
});

test('hsv2hwb lower limit', () => {
  expect(() => cbColorConvert.hsv.hwb([0, -1, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [1] must be between 0 and 100',
    }),
  );
});
test('hsv2hwb upper limit 1', () => {
  expect(() => cbColorConvert.hsv.hwb([361, 0, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [0] must be between 0 and 360',
    }),
  );
});
test('hsv2hwb upper limit 2', () => {
  expect(() => cbColorConvert.hsv.hwb([0, 0, 101])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [2] must be between 0 and 100',
    }),
  );
});

test('hwb2name lower limit', () => {
  expect(() => cbColorConvert.hwb.name([0, -1, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [1] must be between 0 and 100',
    }),
  );
});
test('hwb2name upper limit 1', () => {
  expect(() => cbColorConvert.hwb.name([361, 0, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [0] must be between 0 and 360',
    }),
  );
});
test('hwb2name upper limit 2', () => {
  expect(() => cbColorConvert.hwb.name([0, 0, 101])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [2] must be between 0 and 100',
    }),
  );
});

test('name2rgb', () => {
  expect(() => cbColorConvert.name.rgb('Something')).toThrowError(
    expect.objectContaining({
      message: 'No name found that matches this value',
    }),
  );
});

test('rgb2hex lower limit', () => {
  expect(() => cbColorConvert.rgb.hex([0, -1, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [1] must be between 0 and 255',
    }),
  );
});
test('rgb2hex upper limit', () => {
  expect(() => cbColorConvert.rgb.hex([266, 0, 0])).toThrowError(
    expect.objectContaining({
      message: 'Wrong input format. Item [0] must be between 0 and 255',
    }),
  );
});
