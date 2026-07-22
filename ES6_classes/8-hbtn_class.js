export default class HolbertonClass {
  constructor(size, location) {
    this._verifyTypes(size, location);
    this._size = size;
    this._location = location;
  }

  _verifyTypes(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
  }

  get size() {
    return this._size;
  }

  set size(newVal) {
    if (typeof newVal !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = newVal;
  }

  get location() {
    return this._location;
  }

  set location(newVal) {
    if (typeof newVal !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = newVal;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this._size;
  }
}
