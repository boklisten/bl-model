
import {BlApiError} from "./bl-api-error";

export class BlApiLoginRequiredError extends BlApiError {
	
	constructor(msg?: string, code?: number) {
		super(msg, code);
	}
}