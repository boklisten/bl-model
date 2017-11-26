#Bl-model
A library containing the classes needed for the boklisten ecosystem.

##Requires
    Typescript 2+ 
    
You can get Typscript at: www.typescriptlang.com

    Yarn
     
You can get the Yarn packet-mangager at: www.yarnpkg.com

##Installation
To install the library into your own module, simply do:

    yarn add path/to/your/bl-model-X.X.X.tgz
    
where X is the version number

##Example usage
```typescript
import {Branch} from 'bl-model';

myMethod() {
	this.branchService.get().then(
		(branches: Branch[]) => {
			// your code
		});
}
```


##The exported classes in this library

###Branch

To use this class in your code, simply do:

	import {Branch} from 'bl-model';
 
 The Branch class is described below:

```typescript
class Branch {
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
	active: boolean;
	lastUpdated: Date;
	creationTime: Date;
}
```

###Item
To use this class in your code, simply do:

	import {Item} from 'bl-model';
	
the item class is described below:

```typescript
export class Item {
	id: string;
	title: string;
	type: string;
	info: any;
	desc: string;
	price: number;
	sell: boolean;
	sellPrice: number;
	rent: boolean;
	buy: boolean;
	active: boolean;
	lastUpdated: Date;
	creationTime: Date;
}
```

###OpeningHour
To use this class in your code, simply do:

	import {OpeningHour} from 'bl-model';
	
The OpeningHour class is described below:

```typescript
export class OpeningHour {
	id: string;
	from: Date;
	to: Date;
	branch: string;
	active: boolean;
	creationTime: Date;
	lastUpdated: Date;
}
```


