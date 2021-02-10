import { Location } from "../location/location";

export type MatchProfile = {
  userId: string; // id of the UserDetail
  name: string; // name of the user
  email: string; // email of the user
  phone: string; // phonw nyumber for the user
  meetingOptions?: {
    location: Location;
    time: Date;
  }[];
};
