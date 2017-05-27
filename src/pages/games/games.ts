import { GameService } from './../../services/game.service';
import { GameModal } from './../../components/game-modal/game-modal';
import { CreateGameModal } from './../../components/create-game-modal/create-game-modal';
import { Game } from './../../api/game';
import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
  games: Game[] = [];

  constructor(private navCtrl: NavController,
              private gameService: GameService,
              private platform: Platform,
              private modalCtrl: ModalController)
  {
    this.platform
    .ready()
    .then(() => this.gameService.getGames()
                .then(games => this.games = games));
  }

  newGame() {
    let modal = this.modalCtrl.create(CreateGameModal, {'games':this.games});
    modal.present();
    // if modal was saved, add game. otherwise nothing
    modal.onDidDismiss((game, role) => 
    {
      if(game){
        var index = this.games.push(game);
        this.gameService.storeGames(this.games);
        this.openGame(index-1);
      }
    }); 
  }

  openGame(indx){
    this.gameService.getGames().then(games => {
      this.games = games;
      let modal = this.modalCtrl.create(GameModal, {'game':this.games[indx]});
      modal.present();
    })
  }
  removeGame(indx){
    this.games = this.gameService.removeGame(indx);
  }
}
