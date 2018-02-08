

import {BlApiError} from "./bl-api-error";

export class BlApiNotFoundError extends BlApiError {
	path?: string;
	
	constructor(msg?: string, code?: number, path?: string) {
		super(msg, code);
		
		if(path) {
			this.path = path;
		}
	}
}