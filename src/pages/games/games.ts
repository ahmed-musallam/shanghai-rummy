import { GameModal } from './../../components/game-modal/game-modal';
import { CreateGameModal } from './../../components/create-game-modal/create-game-modal';
import { Game } from './../../api/game';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
  games: Game[] = [];
  private GAMES_ITEM = "games";

  constructor(private navCtrl: NavController,
              private nativeStorage: NativeStorage,
              private platform: Platform,
              private modalCtrl: ModalController)
  {
     platform.ready().then(() => this.getGames());
  }

  newGame() {
    let modal = this.modalCtrl.create(CreateGameModal, {'games':this.games});
    modal.present();
    // if modal was saved, add game. otherwise nothing
    modal.onDidDismiss((game, role) => 
    {
      console.log(JSON.stringify(game));
      console.log(JSON.stringify(role));
      if(game){
        this.games.push(game);
        this.storeGames();
      }
    }); 
  }

  openGame(indx){
    let modal = this.modalCtrl.create(GameModal, {'game':this.games[indx]});
    modal.present();
  }

  removeGame(indx){
    this.games.splice(indx, 1);
    this.storeGames();
  }

  private getGames(){
    if(this.platform.is('mobile'))
    {
      this.nativeStorage.getItem(this.GAMES_ITEM).then(games => this.games = games.map(game => new Game(game)));
    }
  }

  private storeGames(){
    if(this.platform.is('mobile'))
    {
      this.nativeStorage.setItem(this.GAMES_ITEM, this.games);
    }
  }
}
