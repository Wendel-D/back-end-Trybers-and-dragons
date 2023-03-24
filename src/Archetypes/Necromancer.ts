import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instaces = 0;

  constructor(
    name: string,
    special?: number,
    cost?: number,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name, special, cost);
    Necromancer.instaces += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static override createdArchetypeInstances(): number {
    return Necromancer.instaces;
  }
}