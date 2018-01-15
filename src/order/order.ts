import {BlDocument} from "../bl-document/bl-document";
import {OrderItem} from "../order-item/order-item";

export class Order extends BlDocument {
	employee?: string;
	customer?: string;
	amount: number;
	application?: string;
	byCustomer: boolean;
	branch: string;
	orderItems: OrderItem[];
	payments: {
		method: string,
		amount: number,
		confirmed: boolean,
		byBranch: boolean,
		branch?: string,
		time: Date;
	}[];
}