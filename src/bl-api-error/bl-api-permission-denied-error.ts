

import {BlApiError} from "./bl-api-error";
import {UserPermission} from "../permission/user-permission";

export class BlApiPermissionDeniedError extends BlApiError {
	permission?: UserPermission;
	permissionRequired?: UserPermission;
	
	constructor(msg?: string, code?: number, permission?: UserPermission, permissionRequired?: UserPermission) {
		super(msg, code);
		
		if (permission) {
			this.permission = permission;
		}
		
		if (permissionRequired) {
			this.permissionRequired = permissionRequired;
		}
	}
}