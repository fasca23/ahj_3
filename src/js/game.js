import goblinImg from '../img/goblin.png';

export default class Game {
  constructor() {
    this.previosPosition = 0;
    this.field = document.querySelectorAll('.game_field');
  }

  static activeImg() {
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = goblinImg;
    return img;
  }

  static dellImg() {
    const img = document.querySelector('img');
    if (img) {
      img.remove();
    }
    const imgDell = document.querySelectorAll('.img');
    imgDell.forEach((e) => {
      e.classList.remove('img');
    });
  }

  static randomNumber(maximum) {
    return Math.floor(Math.random() * maximum);
  }

  randomInsert() {
    const cordField = Game.randomNumber(this.field[0].children.length);
    if (cordField === this.previosPosition) {
      this.randomInsert();
    } else {
      this.previosPosition = cordField;
      this.field[0].children[cordField].appendChild(Game.activeImg());
      this.field[0].children[cordField].classList.add('img');
    }
  }

  main() {
    Game.dellImg();
    this.randomInsert();
  }
}
