import { Player } from './../api/player';
import { Game } from './../api/game';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class GameService {
  private games: Game[] = [];
  private GAMES_ITEM = "games";
  private isNative:boolean=false;

  constructor(private nativeStorage: NativeStorage,
              private storage: Storage,
              private platform: Platform)
  {
      this.platform
      .ready()
      .then(() => this.isNative = this.platform.is('mobile') && !this.platform.is('mobileweb'))
  }

  storeGames(games: Game[]): Promise<any> {
    var storePromise: Promise<any>;
    // if app is running in native ios app
    if (this.isNative) {
      storePromise =  this.nativeStorage.setItem(this.GAMES_ITEM, games);
    }
    // if its runnign in browser
    else storePromise = this.storage.set(this.GAMES_ITEM, games);
    this.games = games;
    return storePromise;
  }

  getGames(): Promise<Game[]>{
    if(this.games.length > 0) return new Promise((resolve, reject)=> resolve(this.games));
    else if(this.isNative)
    {
      return this.nativeStorage
              .getItem(this.GAMES_ITEM)
              .then(this.deserialize);
    }
    else return this.storage
                .get(this.GAMES_ITEM)
                .then(this.deserialize);
  }

  removeGame(indx: number): Game[]{
    this.games.splice(indx, 1);
    this.storeGames(this.games);
    return this.games;
  }

  saveScore(game:Game, player:Player, roundIndx:number, score:number){
    //this.logPlayerScores(game, player, roundIndx); // rem
    var game: Game = this.games.find(g => g.name === game.name);
    if(!game) return;

    var player: Player = game.players.find(p => p.name === player.name);
    if(!player) return;

    player.score.setScore(roundIndx, score);
    this.storeGames(this.games);
    //console.log("saved!") //rem
    //this.logPlayerScores(game, player, roundIndx); //rem
    //console.log(JSON.stringify(this.games));
  }

  private deserialize = (games):Game[] => games.map(game => new Game(game));
/*
  private logPlayerScores(game:Game, player:Player, roundIndx:number)
  {
    if(!game || !player) {console.log("no game or player"); return;}
    var foundGame = this.games.find(g => g.name === game.name);

    if(!foundGame) {console.log(`cannot find player: ${player.name}`); return;}

    var score = foundGame.players.find(p => p.name === player.name)
    .score.getScore(roundIndx);
    console.log(`score ${score}`)
    return;
  }
  */
}