import {BlDocument} from '../bl-document/bl-document';
import {Location} from '../location/location';
import {MatchProfile} from './match-profile';
import {MatchState} from './match-state';

export class Match extends BlDocument {
  sender: MatchProfile;
  recievers: MatchProfile[];
  items: {
    item: string; // id of the item in DB
    customerItem?: string;
    title: string; // title of the item
    reciever: string; // userId of the reciever
    rating?: {
      sender?: number; // a number between 0-5
      reciever?: number; // a number between 0-5
    };
    sent?: {time: Date};
    recieved?: {time: Date};
  }[];
  state: MatchState;
  events: {type: MatchState; time: Date}[];
  branch: string; // The branch of where the match should be made at
  meetingPoint: {location: Location; time: Date}[];
}

// You can only have ONE sender per Match, but several recievers
