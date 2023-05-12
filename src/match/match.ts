import { BlDocument } from "../bl-document/bl-document";

export enum MatchVariant {
  UserMatch = "UserMatch",
  StandPickupMatch = "StandPickupMatch",
  StandDeliveryMatch = "StandDeliveryMatch",
}

export class MatchBase extends BlDocument {
  customerItems: string[];
  handoffInfo: {
    location: string;
    date: Date;
  };

  constructor(customerItems: string[], handoffInfo: MatchBase["handoffInfo"]) {
    super();
    this.customerItems = customerItems;
    this.handoffInfo = handoffInfo;
  }
}

export class UserMatch extends MatchBase {
  _variant: MatchVariant.UserMatch = MatchVariant.UserMatch;
  sender: string;
  receiver: string;
  senderBranch: string;
  // can be different from senderBranch for Ullern because they have separate branches for each class
  receiverBranch: string;
  // items which have been given from sender to anyone. May differ from receivedCustomerItems
  // when someone receives a book which technically does not belong to the sender
  deliveredCustomerItems: string[] = [];
  // items which have been received by the receiver from anyone
  receivedCustomerItems: string[] = [];

  constructor(
    sender: string,
    receiver: string,
    customerItems: string[],
    senderBranch: string,
    receiverBranch: string,
    handoffInfo: MatchBase["handoffInfo"]
  ) {
    super(customerItems, handoffInfo);
    this.sender = sender;
    this.receiver = receiver;
    this.senderBranch = senderBranch;
    this.receiverBranch = receiverBranch;
  }
}

export class StandPickupMatch extends MatchBase {
  _variant: MatchVariant.StandPickupMatch = MatchVariant.StandPickupMatch;
  receiver: string;
  receiverBranch: string;
  receivedCustomerItems: string[] = [];

  constructor(
    receiver: string,
    customerItems: string[],
    receiverBranch: string,
    handoffInfo: MatchBase["handoffInfo"]
  ) {
    super(customerItems, handoffInfo);
    this.receiver = receiver;
    this.receiverBranch = receiverBranch;
  }
}

export class StandDeliveryMatch extends MatchBase {
  _variant: MatchVariant.StandDeliveryMatch = MatchVariant.StandDeliveryMatch;
  sender: string;
  senderBranch: string;
  deliveredCustomerItems: string[] = [];

  constructor(
    sender: string,
    customerItems: string[],
    senderBranch: string,
    handoffInfo: { location: string; date: Date }
  ) {
    super(customerItems, handoffInfo);
    this.sender = sender;
    this.senderBranch = senderBranch;
  }
}

export type Match = UserMatch | StandPickupMatch | StandDeliveryMatch;
