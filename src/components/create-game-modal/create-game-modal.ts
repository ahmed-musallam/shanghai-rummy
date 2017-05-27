import { Player } from './../../api/player';
import { Game } from './../../api/game';
import { Component } from '@angular/core'; 
import { Platform, NavParams, ViewController } from 'ionic-angular'; 
 
@Component({ 
  templateUrl: 'create-game-modal.html'
}) 
export class CreateGameModal {
  game: Game = new Game();

  constructor(public platform: Platform, 
              public params: NavParams, 
              public viewCtrl: ViewController) {} 

  dismiss() { this.viewCtrl.dismiss(); }
  start(){ this.viewCtrl.dismiss(this.game);}
  removePlayer(indx){ this.game.players.splice(indx, 1); }
  addPlayer(){ this.game.players.push(new Player()); }
}