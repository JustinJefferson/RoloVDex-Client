import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {USER} from '../user-mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = USER;

  constructor() { }

  ngOnInit() {
  }

}
