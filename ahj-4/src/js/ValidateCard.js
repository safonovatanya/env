import paySystem from './PaySystem.js';
import validateNum from './ValidateNum.js';
import choiceCard from './ChoiceCard.js';

export default class ValidateCard {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.inputText = '';
  }

  static get markup() {
    return `
    <div id="card">
      <form class="valid-card">
        <div class="img-cards">
          <div class="img-card" id="american"><img src="./img/american_express.png" alt=""></div>
          <div class="img-card" id="club"><img src="./img/club.png" alt=""></div>
          <div class="img-card" id="discover"><img src="./img/discover.png" alt=""></div>
          <div class="img-card" id="jcb"><img src="./img/jcb.png" alt=""></div>
          <div class="img-card" id="mastercard"><img src="./img/mastercard.png" alt=""></div>
          <div class="img-card" id="mir"><img src="./img/mir.png" alt=""></div>
          <div class="img-card" id="visa"><img src="./img/visa.png" alt=""></div>
        </div>
        <input type="text" id="input">
        <button id="btn-validate">Click to Validate</button>
      </form>
    </div>
    `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector('.valid-card');
    this.inputText = this.parentEl.querySelector('[id=input]');
    submit.addEventListener('submit', (e) => this.onSubmit(e));
    this.inputText.addEventListener('keypress', (e) => this.onKeypress(e));
    this.inputText.addEventListener('input', () => this.onInput());
  }

  onSubmit(e) {
    e.preventDefault();
    this.validateCard(this.inputText.value);
  }

  onKeypress(e) {
    e.preventDefault();
    if (e.key.search(/\d/) !== -1) {
      this.inputText.value += e.key;
      choiceCard(paySystem(this.inputText.value));
    }

    if (e.key === 'Enter') {
      this.validateCard(this.inputText.value);
    }
  }

  onInput() {
    choiceCard(paySystem(this.inputText.value));
  }

  validateCard(numCard) {
    if (numCard.length < 1 || !validateNum(numCard)) {
      this.inputText.className = 'invalid';
      return;
    }
    this.inputText.className = 'valid';
  }
}
