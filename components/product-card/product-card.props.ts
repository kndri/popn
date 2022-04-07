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
	showVerificationBage?: Boolean,
	sneakerPoint?: Number
	showPrice?: Boolean
}
