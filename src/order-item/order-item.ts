
export class OrderItem {
	item: string;
	amount: number;
	type: "rent" | "buy" | "extend" | "sell" | "cancel" | "cancel-buy" | "cancel-extend" | "cancel-sell";
	customerItem?: string;
}