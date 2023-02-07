import type { Auth0Error } from 'auth0-js'
export declare function auth0__email__validate(data:auth0__email__validate__data_T):validate_auth0_email_error_T|null
export {
	auth0__email__validate as validate_auth0_email,
}
export interface auth0__email__validate__data_T {
	email:string
}
export declare type validate_auth0_email_data_T = auth0__email__validate__data_T
export declare type validate_auth0_email_error_T = Auth0Error
