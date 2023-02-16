import type { JwtToken } from '@ctx-core/jwt'
export declare function auth0__userinfo__fetch_get(
	params:auth0__userinfo__fetch_get__params_T
):Promise<[auth0__userinfo__fetch_get__payload_T, Response]>
export {
	auth0__userinfo__fetch_get as get_auth0_userinfo,
}
export interface auth0__userinfo__fetch_get__params_T {
	auth0_token:JwtToken
	AUTH0_DOMAIN:string
}
export declare type get_auth0_userinfo_params_I = auth0__userinfo__fetch_get__params_T
export interface auth0__userinfo__fetch_get__payload_T {
	sub:string
	name:string
	given_name:string
	family_name:string
	middle_name:string
	nickname:string
	preferred_username:string
	profile:string
	picture:string
	website:string
	email:string
	email_verified:boolean
	gender:string
	birthdate:string
	zoneinfo:string
	locale:string
	phone_number:string
	phone_number_verified:boolean
	address:{ country:string }
	updated_at:string
}
export declare type get_auth0_userinfo_T = auth0__userinfo__fetch_get__payload_T
