import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  cards =
  [
    {name:"Joker", points:50},
    {name:"Ace", points:20},
    {name:"8 - King", points:10},
    {name:"2 - 7", points:5}
  ]

  constructor(public navCtrl: NavController) {}
  
}
