export class MatchItem {
  item: string; // id of the item in DB
  customerItem?: string;
  title: string; // title of the item
  reciever?: string; // userId of the reciever
  rating?: {
    sender?: number; // a number between 0-5
    reciever?: number; // a number between 0-5
  };
  sent?: { time: Date; user: string };
  recieved?: { time: Date; user: string };
}
