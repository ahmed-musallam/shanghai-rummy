import { Player } from './../api/player';
import { Game } from './../api/game';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class GameService {
  private games: Game[] = [];
  private GAMES_ITEM = "games";

  constructor(private nativeStorage: NativeStorage,
              private platform: Platform) {}

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

  removeGame(indx: number): Game[]{
    this.games.splice(indx, 1);
    this.storeGames(this.games);
    return this.games;
  }

  saveScore(game:Game, player:Player, roundIndx:number, score:number){
    this.logPlayerScores(game, player, roundIndx); // rem
    var game: Game = this.games.find(g => g.name === game.name);
    if(!game) return;

    var player: Player = game.players.find(p => p.name === player.name);
    if(!player) return;

    player.score.setScore(roundIndx, score);
    this.storeGames(this.games);
    console.log("saved!") //rem
    this.logPlayerScores(game, player, roundIndx); //rem
    //console.log(JSON.stringify(this.games));
  }

  private logPlayerScores(game:Game, player:Player, roundIndx:number)
  {
    var score = this.games
    .find(g => g.name === game.name)
    .players.find(p => p.name === player.name)
    .score.getScore(roundIndx);
    console.log(`score ${score}`)
    return;
  }
}