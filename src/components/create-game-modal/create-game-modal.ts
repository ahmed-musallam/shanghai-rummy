import { Player } from './../../api/player';
import { Game } from './../../api/game';
import { Component } from '@angular/core'; 
import
{ 
  Platform,
  NavParams,
  ViewController,
  AlertController,
  AlertOptions
} from 'ionic-angular'; 
 
@Component({ 
  templateUrl: 'create-game-modal.html'
}) 
export class CreateGameModal {
  game: Game = new Game();

  constructor(public platform: Platform, 
              public params: NavParams, 
              public viewCtrl: ViewController,
              public alertCtrl: AlertController) {}

  dismiss             = ()  => this.viewCtrl.dismiss();
  start               = ()  => this.viewCtrl.dismiss(this.game);
  removePlayer        = (i) =>  this.game.players.splice(i, 1);
  showNewPlayerPrompt = ()  =>  this.createPrompt().present();

  addPlayer = (data:any):any => data.name
                                ? this.game.players.push(Player.fromName(data.name))
                                : null;

  addAnotherPlayer = (data:any) => 
  {
    this.addPlayer(data);
    this.showNewPlayerPrompt();
  }

  private createPrompt(){
    return this.alertCtrl.create(this.getOptions());
  }

  private getOptions(): AlertOptions{
    return {
      title: 'Add New Player',
      inputs:  [{ name: 'name', placeholder: 'player Name'}],
      buttons:
      [
        { text: 'Close', role: 'cancel'},
        { text: 'Add more', handler: this.addAnotherPlayer},
        { text: 'Add & close', handler: this.addPlayer}
      ]
    };
    
  }
}