
import {BlDocument} from "../bl-document/bl-document";
import {PaymentMethod} from "../payment/payment-method/payment-method";
import {BranchPaymentInfo} from "./branch-payment-info";

export class Branch extends BlDocument {
	name: string;
	type?: string;
	desc?: string;
	root?: boolean;
	childBranches?: string[];
	items?: string[];
	openingHours?: string[];
	paymentInfo?: BranchPaymentInfo;
	payment?: {
		branchResponsible: boolean,
		rentPricePercentage: {
			base: number,
			oneSemester: number,
			twoSemesters: number,
			buyout: number
		},
		extendPrice: number,
		acceptedMethods: PaymentMethod[]
	};
	itemCategories?: {
		name: string,
		items: string[]
	}[];
	contactInfo?: {
		phone: number,
		email: string,
		address: string,
		postCode: string,
		postCity: string,
		country: string
	};
}