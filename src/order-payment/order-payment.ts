
export class OrderPayment {
	method: "card" | "vipps" | "cash";
	amount: number;
	confirmed: boolean;
	time: Date;
	byBranch: boolean;
	branch?: string;
}