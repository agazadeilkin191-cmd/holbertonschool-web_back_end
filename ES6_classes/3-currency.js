export default class Currency {
  constructor(code, name) {
    this._verifyTypes(code, name);
    this._code = code;
    this._name = name;
  }

  _verifyTypes(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(newVal) {
    if (typeof newVal !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newVal;
  }

  get name() {
    return this._name;
  }

  set name(newVal) {
    if (typeof newVal !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newVal;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
