import { Score } from './../../app/api';
import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'board.html'
})
export class Board {

  game: Score[];

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