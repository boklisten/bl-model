
import {BlDocument} from "../bl-document/bl-document";
import {PaymentMethod} from "./payment-method/payment-method";
import {PaymentInfoDibs} from "./payment-info/payment-info-dibs";
import {PaymentInfoVipps} from "./payment-info/payment-info-vipps";
import {PaymentInfoCard} from "./payment-info/payment-info-card";
import {PaymentInfoCash} from "./payment-info/payment-info-cash";

export class Payment extends BlDocument {
	method: PaymentMethod; //the method used for payment
	order: string; // the id order this payment is for
	info: PaymentInfoDibs | PaymentInfoVipps | PaymentInfoCard | PaymentInfoCash; //method specific info
	amount: number; //the total amount for this payment
	confirmed: boolean; //a boolean to check if the payment is confirmed or not
	customer: string; //the id of the customer this payment is intended for
	branch: string; //the id of the branch this payment was placed on
}