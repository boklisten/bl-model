
import {BlDocument} from "../bl-document/bl-document";

export class OrderItem extends BlDocument {
	order: string;
	item: string;
	type?: string;
	amount: boolean;
	customerItem?: string;
}