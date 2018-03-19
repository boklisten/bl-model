
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
	info?: OrderItemInfo; //if the type is rent or extend, this object contains info about the rental period
	discount?: PaymentDiscount; //can also have a discount on each item
}