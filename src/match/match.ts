import { BlDocument } from "../bl-document/bl-document";

export enum MatchVariant {
  UserMatch = "UserMatch",
  StandPickupMatch = "StandPickupMatch",
  StandDeliveryMatch = "StandDeliveryMatch",
}

export interface UserMatchType {
  _variant: MatchVariant.UserMatch;
  sender: string;
  receiver: string;
  senderBranch: string;
  // Can be different from senderBranch for Ullern because they have separate branches for each class
  receiverBranch: string;
  // items which have been given from sender to anyone. May differ from receivedCustomerItems
  // when someone receives a book which technically does not belong to the sender
  deliveredCustomerItems: string[];
  // items which have been received by the receiver from anyone
  receivedCustomerItems: string[];
}

export interface StandPickupMatchType {
  _variant: MatchVariant.StandPickupMatch;
  sender: string;
  senderBranch: string;
  deliveredCustomerItems: string[];
}

export interface StandDeliveryMatchType {
  _variant: MatchVariant.StandDeliveryMatch;
  sender: string;
  senderBranch: string;
  deliveredCustomerItems: string[];
}

export type Match = {
  customerItems: string;
  active: boolean;
  handoffInfo: {
    location: string;
    date: Date;
  };
} & BlDocument &
  (UserMatchType | StandPickupMatchType | StandDeliveryMatchType);
