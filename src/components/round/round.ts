import { Player } from './../../api/player';
import { GameService } from './../../services/game.service';
import { RoundConstants, Round } from './../../api/constants';
import { Game } from './../../api/game';
import { Component, Input, OnInit } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'round',
  templateUrl: 'round.html'
})
export class RoundComponent implements OnInit{
  @Input() roundNumber:number;
  @Input() game: Game;
  round: Round;
  showScores: true;

  constructor(public platform: Platform,
              public params: NavParams,
              public gameService: GameService,
              public viewCtrl: ViewController){}
  ngOnInit()
  {
    this.round = RoundConstants.getRound(this.roundNumber);
  }

  saveScore(game:Game, player:Player, roundIndx:number, score:any){
    // console.log(`${game.name}, ${player.name}, ${roundIndx}, ${score}`)
    this.gameService.saveScore(game, player,roundIndx, parseInt(score));
  }

}