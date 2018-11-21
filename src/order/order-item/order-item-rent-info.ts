
import {Period} from "../../period/period";
import { CustomerItem } from "../../customer-item/customer-item";

export type OrderItemRentInfo = {
	from: Date; //rent period start
	to: Date; //rent period end
	numberOfPeriods: number; //number of the period type given
	periodType: Period; //the period type, 'semester' means half year
	customerItem?: string | CustomerItem; //an id of the customerItem this orderItem has become when the item is delivered to customer
}
