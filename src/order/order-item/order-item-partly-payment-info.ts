import { Period } from "../../period/period";
import { CustomerItem } from "../../customer-item/customer-item";

export type OrderItemPartlyPaymentInfo = {
  deadline: Date; // the deadline for the next partly payment
  totalAmount: number; // the total amount this item costs 
  customerItem?: string | CustomerItem; // id of customerItem of the CusotmerItem if this is from another order
}
