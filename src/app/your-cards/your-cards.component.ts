import { Component, OnInit } from '@angular/core';
import {CardData} from '../card-data';
import {CARDDATA} from '../mock-card-data';
import {Card} from '../card';

@Component({
  selector: 'app-your-cards',
  templateUrl: './your-cards.component.html',
  styleUrls: ['./your-cards.component.scss']
})
export class YourCardsComponent implements OnInit {

  allCardData = CARDDATA;
  cards: Card[];

  constructor() { }

  ngOnInit(): void {
    this.setCards();
  }

  setCards() {
    // for (let cardData of this.allCardData) {
    //   this.cards.push(new Card(cardData));
    // }
  }

}
