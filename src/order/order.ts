import {BlDocument} from "../bl-document/bl-document";
import {OrderItem} from "../order-item/order-item";
import {OrderPayment} from "../order-payment/order-payment";

export class Order extends BlDocument {
	employee?: string;
	customer?: string;
	amount: number;
	application?: string;
	byCustomer: boolean;
	branch: string;
	orderItems: OrderItem[];
	payments: OrderPayment[];
}