import { Score } from './../../app/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
              private platform: Platform)
  {
     platform.ready().then(() => {
       nativeStorage.getItem(this.GAMES_ITEM).then(games => this.games = games);
     });
  }

  addGame(){
    this.games.push([{player:"some player", rounds:[0,0,0,0,0,0,0,0,0]}]);
    this.nativeStorage.setItem(this.GAMES_ITEM, this.games);
  }
  
}
