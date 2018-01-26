
import {BlDocument} from "../bl-document/bl-document";

export class Item extends BlDocument {
	title: string;
	type: string;
	info: any;
	desc: string;
	price: number;
	taxRate: number;
	sell: boolean;
	sellPrice: number;
	rent: boolean;
	buy: boolean;
}
