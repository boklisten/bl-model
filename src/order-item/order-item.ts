
export class OrderItem {
	item: string;
	title: string;
	amount: number;
	unitPrice: number;
	taxAmount: number;
	rentRate: number;
	taxRate: number;
	type: "rent" | "buy" | "extend" | "sell" | "buyout" | "cancel-rent" | "cancel-buy" | "cancel-extend" | "cancel-sell" | "cancel-buyout";
	customerItem?: string;
	discount?: number;
	rentInfo?: {
		oneSemester: boolean,
		twoSemesters: boolean
	};
	lastOrderItem?: OrderItem;
}