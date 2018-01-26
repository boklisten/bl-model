
export class OrderItem {
	item: string;
	title: string;
	amount: number; //unitPrice + taxAmount
	unitPrice: number; //item.price * rentRate
	taxAmount: number; //unitPrice * taxRate
	rentRate: number; //branch.rentRate(one/two semesters)
	taxRate: number; //item.taxRate
	type: "rent" | "buy" | "extend" | "sell" | "buyout" | "cancel-rent" | "cancel-buy" | "cancel-extend" | "cancel-sell" | "cancel-buyout";
	customerItem?: string;
	discount?: number;
	rentInfo?: {
		oneSemester: boolean,
		twoSemesters: boolean
	};
	lastOrderItem?: OrderItem;
}