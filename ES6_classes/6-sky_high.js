import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._verifyTypes(floors);
    this._floors = floors;
  }

  _verifyTypes(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
  }

  get sqft() {
    return super.sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
