
import {OrderItemInfo} from "./order-item-info";
import {OrderItemType} from "./order-item-type";
import {PaymentDiscount} from "../../payment/payment-discount/payment-discount";

export class OrderItem {
	item: string; //the id of the item
	title: string; //the title of item
	amount: number; //unitPrice + taxAmount
	unitPrice: number; //item.price * rentRate
	taxAmount: number; //unitPrice * taxRate
	rentRate: number; //branch.rentRate(one/two semesters)
	taxRate: number; //item.taxRate
	type: OrderItemType; //the operation on this OrderItem
	info?: OrderItemInfo; //if the type is rent or extend, this object contains info about the intended period
	discount?: PaymentDiscount; //can also have a discount on each item
}