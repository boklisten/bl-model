import { BlDocument } from "../bl-document/bl-document";
import { PaymentMethod } from "./payment-method/payment-method";
import { PaymentDiscount } from "./payment-discount/payment-discount";
import { PaymentInfo } from "./payment-info/payment-info";
import { Order } from "../order/order";
import { UserDetail } from "../user/user-detail/user-detail";
import { Branch } from "../branch/branch";

export class Payment extends BlDocument {
  method: PaymentMethod; //the method used for payment
  order: string | Order; // the id order this payment is for
  amount: number; //the total amount for this payment
  customer: string | UserDetail; //the id of the customer this payment is intended for
  branch: string | Branch; //the id of the branch this payment was placed on
  taxAmount?: number; //the tax amount of this payment
  info?: PaymentInfo | PaymentInfo[]; //method specific info, can also be array containing card, cash and cashout
  confirmed?: boolean; //a boolean to check if the payment is confirmed or not
  discount?: PaymentDiscount; //payment discount
}
