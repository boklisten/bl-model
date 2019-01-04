import {BlDocument} from "..";
import { Item } from "../item/item";
import { SharedItem } from "../shared-item/shared-item";
import { Branch } from "../branch/branch";

export class BranchItem extends BlDocument {
	branch: string | Branch;
	item: string | Item;

  rent?: boolean; // possible to rent this item in webstore
  sell?: boolean; // possible to sell this item in webstore
  buy?: boolean; // possible to buy this item in webstore
  partlyPayment?: boolean; // possible to partly pay this item in webstore
  live?: boolean; // is this item live in webstore

  rentAtBranch?: boolean; // is it possible to rent item in bladmin
  sellAtBranch?: boolean; // is it possible to sell item in bladmin
  buyAtBranch?: boolean; // is it possible to buy item in bladmin
  partlyPaymentAtBranch?: boolean; // is it possible to partly pay item in bladmin
  liveAtBranch?: boolean; // is this item live at branch
  
	active?: boolean;
	sharedItems?: string[] | SharedItem[];
	categories?: string[];
}
