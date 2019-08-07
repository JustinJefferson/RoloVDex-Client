import {CardData} from './card-data';

export class Card {
  cardData: CardData;
  display = false;

  constructor(cardData: CardData) {
    this.cardData = cardData;
  }

  toggleDisplay() {
    this.display = !this.display;
  }
}
