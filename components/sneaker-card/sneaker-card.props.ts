// TODO: @Hasler fix this
interface Sneaker {
	image_url: string | undefined;
	createdAt: String;
	id: String;
	image: String;
	primaryName: String;
	secondaryName: String;
	updatedAt: String;
	user: {};
	userID: String;
	claim: {};
}

export interface SneakerCardProps {
	sneaker: Sneaker;
	showVerificationBage?: Boolean;
	sneakerPoint?: Number;
}
