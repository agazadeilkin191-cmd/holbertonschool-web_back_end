import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._verifyTypes(amount, currency);
    this._amount = amount;
    this._currency = currency;
  }

  _verifyTypes(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newVal) {
    if (typeof newVal !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newVal;
  }

  get currency() {
    return this._currency;
  }

  set currency(newVal) {
    if (!(newVal instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newVal;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
