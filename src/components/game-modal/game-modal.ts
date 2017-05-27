import { RoundConstants } from './../../api/constants';
import { Game } from './../../api/game';
import { Component } from '@angular/core'; 
import { Platform, NavParams, ViewController } from 'ionic-angular'; 
 
@Component({ 
  templateUrl: 'game-modal.html'
}) 
export class GameModal {
  game: Game;
  rounds = RoundConstants.rounds;

  constructor(public platform: Platform, 
              public params: NavParams, 
              public viewCtrl: ViewController) {
                  this.game = this.params.get('game'); 
                  console.log(JSON.stringify(this.game));
              } 

  dismiss() { this.viewCtrl.dismiss(); }
  
}