
import {Comment} from "../comment/comment";

export class BlDocument {
	id: string;
	lastUpdated: Date;
	creationTime: Date;
	comments: Comment[];
	active: boolean;
	user: {
		id: string;
	}
}