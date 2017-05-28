export class Score
{
  round1: number = 0;
  round2: number = 0;
  round3: number = 0;
  round4: number = 0;
  round5: number = 0;
  round6: number = 0;
  round7: number = 0;
  round8: number = 0;
  round9: number = 0;

  constructor(score?:Score){
    if(!score) return;
    this.round1 = score.round1;
    this.round2 = score.round2;
    this.round3 = score.round3;
    this.round4 = score.round4;
    this.round5 = score.round5;
    this.round6 = score.round6;
    this.round7 = score.round7;
    this.round8 = score.round8;
    this.round9 = score.round9;

  }

  getScores(): number[]
  {
    return [this.round1, this.round2, this.round3, this.round4, this.round5, this.round6, this.round7, this.round8, this.round9];
  }

    getScore(roundNumber: number):number
  {
    if(!this.isValid(roundNumber)) return null;
    return this["round"+roundNumber] ? this["round"+roundNumber] : 0;
  }

  setScore(roundNumber:number, score:number){
    console.log(`in Score.setSccore(${roundNumber}, ${score})`);
    if(!this.isValid(roundNumber)) return null;
    console.log("valid number");
    this["round"+roundNumber] = score;
    console.log(`saved score ${this["round"+roundNumber]}`);
  }

  getTotalScore(){
    return this.getScores().reduce((a,b)=>a+b,0);
  }

  private isValid(roundNumber){ return roundNumber > 0 && roundNumber < 10}
}