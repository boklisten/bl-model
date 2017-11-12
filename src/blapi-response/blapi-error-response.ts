

export class BlapiErrorResponse {
	code: number;
	msg: string | undefined;
	data: any;
	
	constructor(code: number, msg?: string, data?: any) {
		this.code = code;
		this.msg = msg;
		this.data = data;
	}
}