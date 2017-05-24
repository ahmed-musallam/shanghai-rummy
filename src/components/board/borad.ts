import { roundNames } from './../../app/constants';
import { Score } from './../../app/api';
import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'board.html',
  styles:['*{ white-space: pre-line; }', `.col{border-bottom: solid 1px gray;}`]
})
export class Board {
  table: string[][] = [[]];
  private game: Score[]; 

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController)
  {
    this.game = this.params.get('game');
    this.calcTable();
  }

    
  dismiss() {
    this.viewCtrl.dismiss();
  }
  addPlayer(){
    this.game.push(<Score>{player:"", rounds:[0,0,0,0,0,0,0,0,0]});
    this.calcTable();
  }

  getInitials(str:string){
    var initials = str.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }

  private calcTable(){
    // add player names to table
    this.table = [[]];
    this.table[0].push("");
    this.game.forEach((player, i) => {
      this.table[0].push(player.player);
    })

    roundNames.forEach((roundName, i) =>{
      var row: string[] = [];
      row.push(roundName);
      this.game.forEach((player, j) => {
        const roundScore:string = player.rounds.length > j
                     ? player.rounds[j].toString()
                     : '';
        row.push(roundScore);
      })

      this.table.push(row);
    })
  }
}