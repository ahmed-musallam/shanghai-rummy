import { Player } from './../../api/player';
import { GameService } from './../../services/game.service';
import { Game } from './../../api/game';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'total',
  templateUrl: 'total.html',
  styles:[]
})
export class TotalComponent{
  @Input() game: Game;

  constructor(){ }

}