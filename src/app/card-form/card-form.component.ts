import { Component, OnInit } from '@angular/core';
import {CardData} from '../card-data';
import {CardDataService} from '../card-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  cardData: CardData;
  submitted = false;

  constructor(private service: CardDataService, private router: Router) {
    this.cardData = new CardData();
  }

  ngOnInit() {
  }

  // onSubmit() {
  //
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.cardData);
    this.service.post(this.cardData, 1).subscribe((response: CardData) => {
      if (response != null) {
        this.router.navigate(['/profile']);
      } else {
        this.router.navigate(['/help']);
      }
    });
  }

}
