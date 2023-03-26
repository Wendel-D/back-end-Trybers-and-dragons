import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _characterFighter: Fighter;
  private _monster: SimpleFighter[] | Fighter[];

  constructor(characterFighter: Fighter, monster: SimpleFighter[] | Fighter[]) {
    super(characterFighter);
    this._characterFighter = characterFighter;
    this._monster = monster;
  }

  override fight(): number {
    this._monster.forEach((monster) => {
      while (this._characterFighter.lifePoints > 0 && monster.lifePoints > 0) {
        this._characterFighter.attack(monster);
        monster.attack(this._characterFighter);
      }
    });
    return this._characterFighter.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;