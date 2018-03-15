
export type OrderItemInfo = { //holds information about the renting period, both for 'extend' and 'rent' types.
	from: Date; //rent period start
	to: Date; //rent period end
	numberOfPeriods: number; //number of the period type given
	periodType: "semester" | "year" //the period type, 'semester' means half year
	customerItem?: string //an id of the customerItem this orderItem has become when the item is delivered to customer
}