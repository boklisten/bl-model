

import {BlApiError} from "./bl-api-error";
import {UserPermission} from "../permission/user-permission";

export class BlApiPermissionDeniedError extends BlApiError {
	permission?: UserPermission;
	permissionRequired?: UserPermission;
}