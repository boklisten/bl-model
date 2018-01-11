export class Order {
	id: string;
	employee?: string;
	customer?: string;
	amount: number;
	application?: string;
	byCustomer: boolean;
	branch: string;
	orderItems: any[];
	payments: {
		method: string,
		amount: number,
		confirmed: string,
		byBranch: boolean,
		branch?: string,
		time: Date;
	}[];
	user: {
		blid: string;
	}
}