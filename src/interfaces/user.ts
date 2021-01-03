export type Url = string | null

export interface Avatar {
	url: Url
}

export interface User {
	direct_paid: boolean
	email: string
	id: number
	paid: boolean
	plan_id: number | null
	role: string
	team_avatar: {
		url: Url,
		size_20_20: Avatar
		size_32_32: Avatar
		size_40_40: Avatar
		size_100_100: Avatar
	}
	team_user: boolean
	u_name: string | null
	uid: string
	unsubscribe: boolean
}

export interface UserExtended extends User {
	password: string;
}

export interface LoginPayload {
	email: User['email'];
	password: UserExtended['password'];
}

export interface RegisterPayload {
	name: User['u_name'];
	email: User['email'];
	password: UserExtended['password'];
}

export interface LoginSuccessPayload {
	name: User['u_name'];
	id: User['id'];
}

export interface RegisterResponseData {
	columns: [];
	email: User['email'];
	id: User['id'];
	name: User['u_name'];
	password: UserExtended['password'];
	token: string;
	message?: string;
}

export interface LoginResponseData {
	email: User['email'];
	id: User['id'];
	name: User['u_name'];
	token: string;
	message?: string;
}

export type Role = 'player' | 'scout'

export interface RoleNote {
	role: Role,
	title: string,
	message: string
}
