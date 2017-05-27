import { Game } from './../api/game';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class GameService {
  private games: Game[] = [];
  private GAMES_ITEM = "games";

  constructor(private nativeStorage: NativeStorage,
    private platform: Platform) { }

  storeGames(games: Game[]): void {
    if (this.platform.is('mobile')) {
      this.nativeStorage.setItem(this.GAMES_ITEM, games);
    }
    this.games = games;
  }

  getGames(): Promise<Game[]>{
    if(this.platform.is('mobile'))
    {
      if(this.games.length > 0) return new Promise((resolve, reject)=> resolve(this.games));
      return this.nativeStorage.getItem(this.GAMES_ITEM).then(games => this.games = games.map(game => new Game(game)));
    }
  }

  removeGame(indx){
    this.games.splice(indx, 1);
    this.storeGames(this.games);
  }
}