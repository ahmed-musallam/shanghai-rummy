import { roundNames } from './../../app/constants';
import { Score } from './../../app/api';
import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'board.html',
  styles:['*{ white-space: pre-line; }']
})
export class Board {

  game: Score[];
  roundNames = roundNames;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController)
  {
    this.game  = this.params.get('game');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}