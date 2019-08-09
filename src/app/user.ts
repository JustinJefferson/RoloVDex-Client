import {CardData} from './card-data';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  joinDate: string;
  yourCards: CardData[];
  sharedCards: CardData[];
}
