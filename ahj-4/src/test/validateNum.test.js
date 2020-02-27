import validateNum from '../js/ValidateNum.js';

test.each([
  ['true for valid num', '371449635398431', true],
  ['false for invalid num', '3714496353984', false],
])(('Validate number card %s'), (_, input, expected) => {
  expect(validateNum(input)).toBe(expected);
});
