import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static instaces = 0;

  constructor(
    name: string,
    special?: number,
    cost?: number,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name, special, cost);
    Warrior.instaces += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static override createdArchetypeInstances(): number {
    return Warrior.instaces;
  }
}