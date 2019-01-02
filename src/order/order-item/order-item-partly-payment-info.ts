import { Period } from "../../period/period";
import { CustomerItem } from "../../customer-item/customer-item";

export type OrderItemPartlyPaymentInfo = {
  deadline: Date; // the deadline for the next partly payment
  periodType: Period; // what type of period
  customerItem?: string | CustomerItem; // id of customerItem of the CusotmerItem
}
