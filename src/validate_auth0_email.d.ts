import type { Auth0Error } from 'auth0-js'
export declare function validate_auth0_email(data:validate_auth0_email_data_T):validate_auth0_email_error_T|null
export interface validate_auth0_email_data_T {
	email:string
}
export declare type validate_auth0_email_error_T = Auth0Error
