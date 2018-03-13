
import {Comment} from "../comment/comment";
import {UserPermission} from "../permission/user-permission";

export class BlDocument {
	id: string;
	lastUpdated?: Date;
	creationTime?: Date;
	comments?: Comment[];
	active?: boolean;
	user?: {
		id: string;
		permission?: UserPermission;
	}
}