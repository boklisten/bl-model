
import {PaymentMethod} from "../payment/payment-method";

export class OrderPayment {
	method: PaymentMethod;
	amount: number;
	confirmed: boolean;
	time: Date;
	byBranch: boolean;
	branch?: string;
}