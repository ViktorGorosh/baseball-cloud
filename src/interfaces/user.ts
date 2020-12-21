export interface User {
	name: string;
	id: number;
	isAuthorized: boolean;
}

export interface UserExtended extends User {
	email: string;
	password: string;
}

export interface LoginPayload {
	email: UserExtended['email'];
	password: UserExtended['password'];
}

