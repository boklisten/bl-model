
import {BlDocument} from "../bl-document/bl-document";
import {ItemType} from "./item-type";

export class Item extends BlDocument {
	title: string;
	type: ItemType;
	price: number;
	taxRate: number;
	info?: any;
	desc?: string;
	categories?: string[];
}
