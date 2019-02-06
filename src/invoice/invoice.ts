import {BlDocument} from '../bl-document/bl-document';
import {CustomerItem} from '../customer-item/customer-item';
import {UserDetail} from '../user/user-detail/user-detail';

export class Invoice extends BlDocument {
  duedate: Date;
  customerHavePayed: boolean;
  customerItemPayments: {
    customerItem: string | CustomerItem;
    title: string;
    numberOfItems: number;
    payment: {
      unit: number; // price per unit without vat
      gross: number;
      net: number;
      vat: number;
      discount: number; // in percentage
    };
  }[];
  customerInfo: {
    userDetail: string | UserDetail;
    name: string;
    branchName?: string;
    email: string;
    phone: string;
    dob: Date;
    postal: {
      address: string;
      city: string;
      code: string;
      country: string;
    };
  };
  payment: {
    total: {
      // amounts are a sum of all items
      gross: number;
      net: number;
      vat: number;
      discount: number; // in percentage
    };
    fee: {
      unit: number; // fee per unit without vat
      gross: number;
      net: number;
      vat: number;
      discount: number; // in percentage
    };
    totalIncludingFee: number; // total.gross + fee.gross
  };
  invoiceId?: string; // ex. 201810000
  reference?: string; // ex. 'Not delivered books in time'
}
