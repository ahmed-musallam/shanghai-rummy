import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamesPage } from '../games/games';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = GamesPage;
  tab2Root: any = HomePage;
  tab3Root: any = AboutPage;
  constructor(public navCtrl: NavController) {
  }
  
}
