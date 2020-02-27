import paySystem from '../js/PaySystem.js';

test.each([
  ['American Express', '371449635398431', 'american'],
  ['Discover', '6011111111111117', 'discover'],
  ['Discover', '9991111117', false],
])(('Payment system card %s'), (_, input, expected) => {
  expect(paySystem(input)).toBe(expected);
});
