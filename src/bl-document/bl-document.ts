
import {Comment} from "../comment/comment";
import {UserPermission} from "../permission/user-permission";

export class BlDocument {
	id: string;
	lastUpdated?: Date;
	creationTime?: Date;
	comments?: Comment[];
	active?: boolean;
	user?: { // the user that created the document
		id: string; // the id of the user
		permission?: UserPermission; // the permission of the user
	};
	viewableFor?: string[] // ids of other user that can access this document if it is restricted
}