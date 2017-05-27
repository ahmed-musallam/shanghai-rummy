import { RoundConstants } from './../../api/constants';
import { Game } from './../../api/game';
import { Component, Input, OnInit } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'round',
  templateUrl: 'round.html',
  styles:['*{ white-space: pre-line; }', `.col{border-bottom: solid 1px gray;}`]
})
export class Round implements OnInit{
  @Input() round:number;
  @Input() game: Game;
  name: string;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController){}
  ngOnInit()
  {
    console.log(JSON.stringify(this.game));
    this.name = RoundConstants.getRoundName(this.round);
  }

}