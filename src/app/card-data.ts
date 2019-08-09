import { User } from './user';

export class CardData {
  id: number;
  name: string;
  jobTitle: string;
  company: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
  imagePath: string;
  dateCreated: string;
  dateUpdated: string;
  owner: User;
  users: User[];
}
