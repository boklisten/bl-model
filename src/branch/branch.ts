
import {BlDocument} from "../bl-document/bl-document";
import {BranchPaymentInfo} from "./branch-payment-info";
import {UserPermission} from "../permission/user-permission";

export class Branch extends BlDocument {
	name: string; // the name of the branch
	type?: string; // the type of branch, ex. School or Storage
	desc?: string; // the description of the branch
	root?: boolean; // is this a root branch
	childBranches?: string[]; // does this branch have child branches
	openingHours?: string[]; // id of all the opening hours this branch has
	paymentInfo?: BranchPaymentInfo; // payment information for this branch
	viewableFor?: [UserPermission]
	contactInfo?: { // the contact info for the branch
		phone: number,
		email: string,
		address: string,
		postCode: string,
		postCity: string,
		country: string,
		locationDesc?: string, // description of how to get to the location, ex: 2nd floor up the elevator to the left
		location?: { // to place the location of this branch on a map
			latitude: string,
			longitude: string
		}
	};
	items?: string[]; // all the items this branch has
	inventory?: [{ // the inventory of this branch, holds info about how many of each item it has
		item: string, // the item
		sharedItems: [string] // a list of ids to sharedItems of type item aka, how many of each
	}];
	itemCategories?: [{ // the item categories
		name: string, // the name of the category
		items: string[] // the items this category have
	}];
}