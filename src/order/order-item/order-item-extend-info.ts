
import {Period} from "../../period/period";
import {CustomerItem} from "../../customer-item/customer-item";

export type OrderItemExtendInfo = {
	from: Date;
	to: Date;
	numberOfPeriods: 1;
	periodType: Period;
	customerItem: string | CustomerItem; // the id of the customer item
}
