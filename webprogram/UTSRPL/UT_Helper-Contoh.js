// UT_Helper-Contoh.js
const { capitalizeString } = require('./helper');

test('capitalizeString should capitalize the first letter of a string', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});

test('capitalizeString should return an empty string if input is empty', () => {
  expect(capitalizeString('')).toBe('');
});

test('capitalizeString should handle strings with only one character', () => {
  expect(capitalizeString('a')).toBe('A');
});
