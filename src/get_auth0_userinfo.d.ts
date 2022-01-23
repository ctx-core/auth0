import type { Token } from '@ctx-core/jwt'
export declare function get_auth0_userinfo(
	params:get_auth0_userinfo_params_I
):Promise<[get_auth0_userinfo_T, Response]>;
export interface get_auth0_userinfo_params_I {
	auth0_token:Token;
	AUTH0_DOMAIN:string;
}
export interface get_auth0_userinfo_T {
  sub: string
  name: string
  given_name: string
  family_name: string
  middle_name: string
  nickname: string
  preferred_username: string
  profile: string
  picture: string
  website: string
  email: string
  email_verified: boolean
  gender: string
  birthdate: string
  zoneinfo: string
  locale: string
  phone_number: string
  phone_number_verified: boolean
  address: {
    country: string
  },
  updated_at: string
}
