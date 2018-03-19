import {BlDocument} from "../bl-document/bl-document";

export class CustomerItem extends BlDocument {
	item: string;
	deadline: Date;
	handout: boolean;
	handoutTime?: Date;
	handoutBranch?: string;
	handoutEmployee?: string;
	status?: "rent" | "cancel" | "buy";
	returned?: boolean;
	returnTime?: Date;
	returnBranch?: string;
	returnEmployee?: string;
	totalAmount: number;
	orderItems: string[];
	deadlineExtends?: {
		oldDeadline: Date,
		newDeadline: Date,
		time: Date
	}[];
}