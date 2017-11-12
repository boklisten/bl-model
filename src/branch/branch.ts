
export class Branch {
	id: string;
	name: string;
	type: string;
	desc: string;
	root: boolean;
	childBranches: string[];
	items: string[];
	openingHours: string[];
	payment: {
		branchResponsible: boolean,
		rentPricePercentage: {
			base: number,
			oneSemester: number,
			twoSemesters: number,
			buyout: number
		},
		extendPrice: number,
		acceptedMethods: string[]
	};
	contactInfo: {
		phone: number,
		email: string,
		address: string,
		postCode: string,
		postCity: string,
		country: string
	};
	lastUpdated: Date;
	creationTime: Date;
}