import { User } from './user';
import {CardData} from './card-data';
import {CARDDATA} from './mock-card-data';

export const USER: User  = {
  id: 0,
  firstName: 'Joe',
  lastName: 'Doe',
  username: 'AnonJD',
  password: 'password',
  joinDate: 'Today',
  yourCards: CARDDATA,
  sharedCards: CARDDATA
};
