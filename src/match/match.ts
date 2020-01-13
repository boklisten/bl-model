import {BlDocument} from '../bl-document/bl-document';
import {Location} from '../location/location';
import {MatchProfile} from './match-profile';
import {MatchState} from './match-state';
import {MatchItem} from './match-item';

export class Match extends BlDocument {
  sender: MatchProfile;
  recievers: MatchProfile[];
  items: MatchItem[];
  state: MatchState;
  events: {type: MatchState; time: Date; userId?: string}[];
  branch: string; // The branch of where the match should be made at
  meetingPoint: {location: Location; reciever: string; time: Date}[];
}

// You can only have ONE sender per Match, but several recievers
