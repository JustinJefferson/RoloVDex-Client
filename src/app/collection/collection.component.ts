import { Component, OnInit } from '@angular/core';
import { USER } from '../user-mock';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  user = USER;

  constructor() { }

  ngOnInit() {
  }

}
