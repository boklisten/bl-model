import {PaymentMethod} from "../payment/payment-method/payment-method";
import {Period} from "../period/period";

export class BranchPaymentInfo {
	responsible: boolean; // if set the branch is responsible for payment, not the customer
	rentPeriods: [{
		type: Period, // the allowed period
		maxNumberOfPeriods: number, // max number of periods of this type one item can be rented
		percentage: number //the percentage of the item.price the rent price is
	}];
	extendPeriods: [{
		type: Period, //the possible extend period type
		price: number, // the price of the extend period
		percentage?: number //if set then use percentage of item
	}];
	buyout: {
		percentage: number //the percentage of the item.price it costs for the customer to buyout a item
	};
	acceptedMethods: PaymentMethod[]
}