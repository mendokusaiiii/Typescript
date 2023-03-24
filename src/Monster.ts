import { SimpleFighter } from './Fighter';

export default class MOnster implements SimpleFighter {
  constructor(
    protected _lifePoints: number = 85,
    protected _strength: number = 63,
  ) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const life = this._lifePoints - attackPoints;
    if (life <= 0) this._lifePoints = -1;
    return life;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}