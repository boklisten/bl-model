import {BlDocument} from "../bl-document/bl-document";

export class Order extends BlDocument {
	employee?: string;
	customer?: string;
	amount: number;
	application?: string;
	byCustomer: boolean;
	branch: string;
	orderItems: string[];
	payments: {
		method: string,
		amount: number,
		confirmed: string,
		byBranch: boolean,
		branch?: string,
		time: Date;
	}[];
}