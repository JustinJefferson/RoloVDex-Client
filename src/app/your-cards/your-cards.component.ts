import { Component, OnInit } from '@angular/core';
import {CardData} from '../card-data';
import {CARDDATA} from '../mock-card-data';

@Component({
  selector: 'app-your-cards',
  templateUrl: './your-cards.component.html',
  styleUrls: ['./your-cards.component.css']
})
export class YourCardsComponent implements OnInit {

  cardData: CardData;
  allCardData = CARDDATA;

  constructor() { }

  ngOnInit() {
  }

}
