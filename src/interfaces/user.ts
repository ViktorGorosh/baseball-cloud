export type Url = string | null

export interface Avatar {
	url: Url
}

export type Role = 'player' | 'scout'

export interface RoleNote {
	role: Role,
	title: string,
	message: string
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
	email: User['email'];
	password: UserExtended['password'];
	password_confirmation: UserExtended['password'];
	role: Role
}

export interface AuthResponse {
	headers: {
		'access-token': string
		client: string
		uid: string
	}
}
