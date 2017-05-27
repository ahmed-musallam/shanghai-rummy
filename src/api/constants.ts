export class RoundConstants
{
  static round1: string = "2 sets of 3";
  static round2: string = "1 set of 3 & 1 run of 4";
  static round3: string = "2 runs of 4";
  static round4: string = "3 sets of 3";
  static round5: string = "2 sets of 3 & 1 run of 4";
  static round6: string = "1 set of 3 & 2 runs of 4";
  static round7: string = "3 runs of 4";
  static round8: string = "2 sets of 3 & 2runs of 4";
  static round9: string = "4 sets of 3";
  static rounds:string[] = [RoundConstants.round1, RoundConstants.round2, RoundConstants.round3, RoundConstants.round4, RoundConstants.round5, RoundConstants.round6, RoundConstants.round7, RoundConstants.round8, RoundConstants.round9]

  static getRoundName(roundNumber: number):string
  {
    if(roundNumber < 1 || roundNumber > 9) return null;
    return this["round"+roundNumber];
  }
}