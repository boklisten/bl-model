import { BlDocument } from "../../bl-document/bl-document";
import { Branch } from "../../branch/branch";
import { Order } from "../../order/order";
import { CustomerItem } from "../../customer-item/customer-item";

export class UserDetail extends BlDocument {
  name: string;
  email: string;
  phone: string;
  address: string;
  postCode: string;
  postCity: string;
  country: string;
  dob: Date;
  branch: string | Branch;
  emailConfirmed?: boolean;
  guardian?: {
    name: string;
    email: string;
    emailConfirmed?: boolean;
    phone: string;
    confirmed?: boolean;
  };
  orders?: string[] | Order[];
  customerItems?: string[] | CustomerItem[];
  signatures: string[];
}
