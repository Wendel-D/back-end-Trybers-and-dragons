import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static instaces = 0;

  constructor(
    name: string,
    special?: number,
    cost?: number,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name, special, cost);
    Mage.instaces += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static override createdArchetypeInstances() {
    return Mage.instaces;
  }
}

export default Mage;