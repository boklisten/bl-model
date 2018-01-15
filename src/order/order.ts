import {BlDocument} from "../bl-document/bl-document";

export class Order extends BlDocument {
	employee?: string;
	customer?: string;
	amount: number;
	application?: string;
	byCustomer: boolean;
	branch: string;
	orderItems: {
		item: string,
		amount: number,
		type: "rent" | "buy" | "cancel" | "extend",
		customerItem?: string
	}[];
	payments: {
		method: string,
		amount: number,
		confirmed: string,
		byBranch: boolean,
		branch?: string,
		time: Date;
	}[];
}