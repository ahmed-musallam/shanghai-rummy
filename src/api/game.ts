import { Player } from './player';

export class Game
{
  name: string;
  players: Player[] = [];

  constructor(game?:Game){
    if(!game) return;
    this.name = game.name;
    this.players = game.players.map(p => new Player(p))
  }

  addPlayer(name: string):boolean {
    if(this.hasPlayerName(name))
    {
      console.warn(`player named ${name} already exists`);
      return false;
    }
    var newPlayer = new Player();
    newPlayer.name = name
    this.players.push(newPlayer)

    return true;
  }

  hasPlayer(player: Player): boolean
  {
    if(!player || !player.name) return false;
    return this.hasPlayerName(player.name);
  }

  hasPlayerName(playerName:string): boolean
  {
    return !!this.players
             .find(player => player.name === playerName)
  }

}