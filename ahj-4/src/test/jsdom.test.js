import ValidateCard from '../js/ValidateCard.js';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new ValidateCard(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(ValidateCard.markup);
});

test('should validate input', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new ValidateCard(container);

  widget.bindToDOM();

  const input = container.querySelector('[id=input]');
  input.value = '371449635398431';
  const submit = container.querySelector('.valid-card');
  submit.submit();

  expect(input.classList.contains('valid')).toBeTruthy();
});
