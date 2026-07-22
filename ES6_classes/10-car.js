export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newVal) {
    this._brand = newVal;
  }

  get motor() {
    return this._motor;
  }

  set motor(newVal) {
    this._motor = newVal;
  }

  get color() {
    return this._color;
  }

  set color(newVal) {
    this._color = newVal;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    return new Species();
  }
}
