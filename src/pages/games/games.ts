import { Board } from './../board/borad';
import { Score } from './../../app/api';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
  games: Score[][] = [];

  private emptyRounds = [0,0,0,0,0,0,0,0,0];
  private GAMES_ITEM = 'games';

  constructor(private navCtrl: NavController,
              private nativeStorage: NativeStorage,
              private platform: Platform,
              private modalCtrl: ModalController)
  {
     platform.ready().then(() => this.storeGames());
  }

  addGame(){
    this.games.push([{player:"some player", rounds:[0,0,0,0,0,0,0,0,0]}]);
        
  }
  removeGame(i: number){
    this.games.splice(i, 1);
    this.storeGames();
  }

  openModal(game) {
    let modal = this.modalCtrl.create(Board, {'game':game});
    modal.present();
  }

  private storeGames(){
    if(this.platform.is('mobile'))
    {
      this.nativeStorage.setItem(this.GAMES_ITEM, this.games);
    }
  }
}
