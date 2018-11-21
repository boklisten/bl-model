import {BlDocument} from "..";
import { Item } from "../item/item";
import { SharedItem } from "../shared-item/shared-item";
import { Branch } from "../branch/branch";

export class BranchItem extends BlDocument {
	branch: string | Branch;
	item: string | Item;
	rent?: boolean;
	sell?: boolean;
	buy?: boolean;
	active?: boolean;
	sharedItems?: string[] | SharedItem[];
	categories?: string[];
}
