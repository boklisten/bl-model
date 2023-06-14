import { StandMatch, UserMatch } from "./match";

export interface RelevantDetails {
  name: string;
  phone: string;
}

export type MatchWithDetails =
  | StandMatch
  | (UserMatch & {
      senderDetails: RelevantDetails;
      receiverDetails: RelevantDetails;
    });
