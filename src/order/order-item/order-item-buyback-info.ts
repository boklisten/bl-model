import { Period } from "../../period/period";
import { CustomerItem } from "../../customer-item/customer-item";

export type OrderItemBuybackInfo = {
  buybackAmount?: number; // the amount the employee pays to buyback
  customerItem?: string | CustomerItem;
  from?: Date;
  to?: Date;
  numberOfPeriods?: number;
  periodType?: Period;
};
