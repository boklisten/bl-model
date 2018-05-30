import {BlDocument} from "..";

export class BranchItem extends BlDocument {
	branch: string;
	item: string;
	rent?: boolean;
	sell?: boolean;
	buy?: boolean;
	active?: boolean;
	sharedItems?: string[];
	categories?: string[];
}