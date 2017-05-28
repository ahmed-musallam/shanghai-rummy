import { TotalComponent } from './../components/total/total';
import { GameService } from './../services/game.service';
import { GameModal } from './../components/game-modal/game-modal';
import { CreateGameModal } from './../components/create-game-modal/create-game-modal';
import { RoundComponent } from './../components/round/round';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GamesPage } from '../pages/games/games';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NativeStorage } from '@ionic-native/native-storage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    GamesPage,
    HomePage,
    AboutPage,
    TabsControllerPage,
    RoundComponent,
    CreateGameModal,
    GameModal,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamesPage,
    HomePage,
    AboutPage,
    TabsControllerPage,
    RoundComponent,
    CreateGameModal,
    GameModal,
    TotalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameService
  ]
})
export class AppModule {}