export type Datas = Data[];

export type Data = {
	id: string, 
	name: string,
	email: string,
	phone: string,
	title: string,
	salary: string,
	address: string,
	benefits: string[],
	location: {
		lat: number,
		long: number
	},
	pictures: string[],
	createdAt: string,
	updatedAt: string,
	desciption: string,
	employment_type: string[]
};