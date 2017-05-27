import { RoundConstants, Round } from './../../api/constants';
import { Game } from './../../api/game';
import { Component, Input, OnInit } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'round',
  templateUrl: 'round.html',
  styles:['*{ white-space: pre-line; }', `.col{border-bottom: solid 1px gray;}`]
})
export class RoundComponent implements OnInit{
  @Input() roundNumber:number;
  @Input() game: Game;
  round: Round;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController){}
  ngOnInit()
  {
    console.log(JSON.stringify(this.game));
    this.round = RoundConstants.getRound(this.roundNumber);
  }

}