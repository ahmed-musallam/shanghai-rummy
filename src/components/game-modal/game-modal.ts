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
  showTotal = false;

  constructor(public platform: Platform, 
              public params: NavParams, 
              public viewCtrl: ViewController) {
                  this.game = this.params.get('game'); 
              } 

  dismiss() { this.viewCtrl.dismiss(); }
  toggle(){
    this.showTotal = !this.showTotal;
  }
  
}