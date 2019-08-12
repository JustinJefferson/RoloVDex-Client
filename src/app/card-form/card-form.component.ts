import { Component, OnInit } from '@angular/core';
import {CardData} from '../card-data';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  cardData = new CardData();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

}
