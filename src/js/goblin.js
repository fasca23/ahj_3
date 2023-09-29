import Game from './game';

export default class Goblin {
  constructor() {
    this.point = 0;
    this.goblins = 0;
    this.gameField = [];
    this.win = 0;
    this.lose = 0;
  }

  renderApp() {
    this.gameField = document.getElementById('board');
    const points = document.createElement('div');
    const goblin = document.createElement('div');
    goblin.classList.add('goblin', 'points');
    points.classList.add('point', 'points');
    this.gameField.insertAdjacentElement('beforeBegin', points);
    points.insertAdjacentElement('afterend', goblin);
    document.querySelector('.points').textContent = 'Баллы:';
    document.querySelector('.goblin').textContent = 'Промахи:';
  }

  gameClick() {
    this.gameCells = [...document.querySelectorAll('.field')];
    this.gameCells.forEach((elem) => {
      elem.addEventListener('click', () => {
        if (elem.classList.contains('img')) {
          this.point += 1;
          document.querySelector('.points').textContent = `Баллы: ${this.point}`;
          this.winOrLose();
          // Удаляем гоблина при нажатии
          // Чтоб более 1 раза нельзя было нажать и получить очков больше
          Game.dellImg();
        } else if (!elem.classList.contains('img')) {
          this.goblins += 1;
          document.querySelector('.goblin').textContent = `Промахи: ${this.goblins}`;
          this.winOrLose();
        }
      });
    });
  }

  static dellDiv(div) {
    if (div) {
      div.remove();
    }
  }

  winOrLose() {
    if (this.goblins > 4) {
      const resultLose = document.querySelector('.result');
      Goblin.dellDiv(resultLose);
      this.lose += 1;
      const lost = document.createElement('div');
      lost.classList.add('result');
      this.gameField.insertAdjacentElement('afterend', lost);
      document.querySelector('.result').textContent = `Проигрышей всего - ${this.lose}`;
      this.goblins = 0;
      this.point = 0;
    }
    if (this.point > 6) {
      const resultwin = document.querySelector('.resultWin');
      Goblin.dellDiv(resultwin);
      this.win += 1;
      const win = document.createElement('div');
      win.classList.add('resultWin');
      this.gameField.insertAdjacentElement('afterend', win);
      document.querySelector('.resultWin').textContent = `ПОБЕД всего - ${this.win}`;
      this.goblins = 0;
      this.point = 0;
    }
  }
}
