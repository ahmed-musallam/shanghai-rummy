export interface Round{
  name:string;
  color:string;
}
export class RoundConstants
{
  static round1 = {number:1, name: "2 sets of 3",              color:"#e53935"};
  static round2 = {number:2, name: "1 set of 3 & 1 run of 4",  color:"#d81b60"};
  static round3 = {number:3, name: "2 runs of 4",              color:"#8e24aa"};
  static round4 = {number:4, name: "3 sets of 3",              color:"#5e35b1"};
  static round5 = {number:5, name: "2 sets of 3 & 1 run of 4", color:"#3949ab"};
  static round6 = {number:6, name: "1 set of 3 & 2 runs of 4", color:"#1e88e5"};
  static round7 = {number:7, name: "3 runs of 4",              color:"#00acc1"};
  static round8 = {number:8, name: "2 sets of 3 & 2 runs of 4", color:"#00897b"};
  static round9 = {number:9, name:  "4 sets of 3",             color:"#fdd835"};
  static rounds: Round[] = [RoundConstants.round1, RoundConstants.round2, RoundConstants.round3, RoundConstants.round4, RoundConstants.round5, RoundConstants.round6, RoundConstants.round7, RoundConstants.round8, RoundConstants.round9]

  static getRound(roundNumber: number):Round
  {
    if(roundNumber < 1 || roundNumber > 9) return null;
    return this["round"+roundNumber];
  }

  static getIndex(roundName:string):number
  {
    return 1;
  }
}