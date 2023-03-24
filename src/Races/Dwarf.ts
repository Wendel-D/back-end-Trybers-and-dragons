import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static instances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static override createdRacesInstances() {
    return Dwarf.instances;
  }
}
