

import {BlApiError} from "./bl-api-error";

export class BlApiNotFoundError extends BlApiError {
	id?: string;
	path?: string;
}