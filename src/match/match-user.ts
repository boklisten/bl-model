import {Location} from '../location/location';

export type MatchUser = {
  userId: string; // id of the UserDetail
  name: string; // name of the user
  email: string; // email of the user
  phone: string; // phonw nyumber for the user
  items: {
    itemId: string;
    title: string;
    rating: number;
    sent: boolean;
    recieved: boolean;
  }[]; // items to be delivered/recieved
  meetingOptions: {
    location: Location;
    time: Date;
  }[];
};
