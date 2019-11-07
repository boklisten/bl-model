import {BlDocument} from '../bl-document/bl-document';
import {Location} from '../location/location';
import {MatchUser} from './match-user';

export class Match extends BlDocument {
  sender: MatchUser;
  reciever: MatchUser;
  meetingPoint: {location: Location; time: Date}[];
  matched?: {
    time: Date;
  };
}
