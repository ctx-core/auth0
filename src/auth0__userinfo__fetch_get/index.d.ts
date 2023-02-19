import type { JwtToken } from '@ctx-core/jwt'
export declare function auth0__userinfo__fetch_get(
	params:auth0__userinfo__fetch_get__params_T
):Promise<[auth0__userinfo__fetch_get__payload_T, Response]>
export {
	auth0__userinfo__fetch_get as get_auth0_userinfo,
}
export interface auth0__userinfo__fetch_get__params_T {
	auth0__token:JwtToken
	AUTH0_DOMAIN:string
}
export declare type get_auth0_userinfo_params_I = auth0__userinfo__fetch_get__params_T
export interface auth0__userinfo__fetch_get__error_T {
	error:string
	error_description:string
}
export type auth0__userinfo__fetch_get__payload_T =
	auth0__userinfo_T
	|auth0__userinfo__fetch_get__error_T
	|string // Unauthorized
    // sub: 'auth0|63ede5eecb2091a2ae6a3d00',
    // nickname: 'brian.takita',
    // name: 'brian.takita@gmail.com',
    // picture: 'https://s.gravatar.com/avatar/a0599814ceddc2e283792f4e47c57f5e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbr.png',
    // updated_at: '2023-02-19T07:45:04.941Z',
    // email: 'brian.takita@gmail.com',
    // email_verified: false

export interface auth0__userinfo_T {
	sub:string
	nickname:string
	name:string
	picture:string
	updated_at:string
	email:string
	email_verified:boolean
	given_name?:string
	family_name?:string
	middle_name?:string
	preferred_username?:string
	profile?:string
	website?:string
	gender?:string
	birthdate?:string
	zoneinfo?:string
	locale?:string
	phone_number?:string
	phone_number_verified?:boolean
	address?:{ country:string }
}
export declare type get_auth0_userinfo_T = auth0__userinfo__fetch_get__payload_T
