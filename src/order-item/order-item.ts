
export class OrderItem {
	item: string;
	amount: number;
	type: "rent" | "buy" | "cancel" | "extend";
	customerItem?: string;
}