// @TODO: Make API so we can use camelCase instead of snake_case
// interface Product {
//   id: string,
//   brand: string,
//   primaryName: string,
//   secondaryName: string,
//   price: string,
//   imageUrl: string
// }

interface Product {
	id: String;
	sneakerID: String;
	sneakerData: {};
	zipCode: String;
	images: [String];
	size: String;
	condition: String;
	price: String;
	brand: String;
	description: String;
	sellerID: String;
	seller: {};
	prevSellers: [String];
}

export interface ProductCardProps {
	product: Product;
}
