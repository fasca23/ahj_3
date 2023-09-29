import Game from './game';
import Goblin from './goblin';

const newGame = new Game();

setInterval(() => newGame.main(), 1000);

const indGob = new Goblin();
indGob.renderApp();
indGob.gameClick();
