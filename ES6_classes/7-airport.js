export default class Airport {
  constructor(name, code) {
    this._verifyTypes(name, code);
    this._name = name;
    this._code = code;
  }

  _verifyTypes(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
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

  get code() {
    return this._code;
  }

  set code(newVal) {
    if (typeof newVal !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newVal;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
