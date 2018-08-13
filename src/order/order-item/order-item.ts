
import {OrderItemInfo} from "./order-item-info";
import {OrderItemType} from "./order-item-type";
import {PaymentDiscount} from "../../payment/payment-discount/payment-discount";

export class OrderItem {
	type: OrderItemType; //the operation on this OrderItem
	item: string; //the id of the item
	title: string; //the title of item
	amount: number; //the amount to pay
	unitPrice: number; //item.price * rentRate
	taxRate: number; //item.taxRate
	taxAmount: number; //amount * taxRate
	handout?: boolean; // if set, this orderItem is the "handout" of this item
	info?: OrderItemInfo; //if the type is rent or extend, this object contains info about the rental period
	discount?: PaymentDiscount; //can also have a discount on each item
	delivered?: boolean; // if the orderItem is delivered out or not
	customerItem?: string; // if this orderItem is for a customerItem, this is the id of the customerItem
	movedToOrder?: string; // if the orderItem is added again in a new order, this points to it
	movedFromOrder?: string; //if the orderItem is from another order, this points to it
}