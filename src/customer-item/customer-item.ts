import {BlDocument} from "../bl-document/bl-document";
import {Period} from "../period/period";


/**
 * A CustomerItem is a item that the customer is renting.
 * It holds information about the rental period such as the deadline.
 * it can either be handed out by a Branch or another Customer.
 */
export class CustomerItem extends BlDocument {
	item: string; // what item is this customerItem for
	customer: string; // the id of the customer
	sharedItem?: string; // can point to a shared item, if so the item has a unique id and can be traced
	deadline: Date; //the deadline to return this item
	status?: "rent" | "cancel" | "buy"; // status of the customerItem
	handout: boolean; // if this customerItem is handed out to customer or not
	handoutInfo?: {
		handoutBy: "branch" | "customer", // if this was handed out by another customer or a branch
		handoutById: string, // the id of the branch or customer that handed out the item
		handoutEmployee?: string, // if at branch, this is the id of the employee that handed out the item
		time: Date // the time this item was handed out
	};
	returned: boolean; // if this item is returned or not
	returnInfo?: {
		returnedTo: "branch" | "customer", //if the item was returned to a branch or a customer
		returnedToId: string, // if returnedTo a branch, this is the id of a branch, otherwise a customer
		returnEmployee?: string, // if it was returned to a branch, this is the id of the employee
		time: Date //the time of return
	};
	orders?: string[]; // what orders are this customerItem a part of, must be at least one, the order placement
	totalAmount?: number;
	periodExtends?: {
		from: Date, // the old deadline
		to: Date, // the new deadline
		periodType: Period, //what type of period this extend is
		time: Date // time this extend was made
	}[];
}