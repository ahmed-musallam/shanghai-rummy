import { Score } from './score';

export class Player
{
  name: string;
  score: Score = new Score();

  constructor(player?: Player){
    if(!player) return;
    this.name = player.name;
    this.score = new Score(player.score);
  }
}