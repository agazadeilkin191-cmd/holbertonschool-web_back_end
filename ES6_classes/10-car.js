export default class Car {
  constructor(brand, motor, color) {
    this._verifyTypes(brand, motor, color);
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  _verifyTypes(brand, motor, color) {
    if (brand !== undefined && typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    if (motor !== undefined && typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    if (color !== undefined && typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }
  }

  get brand() {
    return this._brand;
  }

  set brand(newVal) {
    if (typeof newVal !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = newVal;
  }

  get motor() {
    return this._motor;
  }

  set motor(newVal) {
    if (typeof newVal !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = newVal;
  }

  get color() {
    return this._color;
  }

  set color(newVal) {
    if (typeof newVal !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = newVal;
  }

  cloneCar() {
    const Species = this[Symbol.species] || this.constructor;
    return new Species();
  }
}

Car.prototype[Symbol.species] = function() {
  return new this.constructor(this._brand, this._motor, this._color);
};
