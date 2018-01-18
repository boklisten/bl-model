
export class OrderItem {
	item: string;
	amount: number;
	type: "rent" | "buy" | "extend" | "sell" | "buyout" | "cancel" | "cancel-buy" | "cancel-extend" | "cancel-sell" | "cancel-buyout";
	customerItem?: string;
}