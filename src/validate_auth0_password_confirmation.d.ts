import type { auth0_password_confirmation_data_I } from './_types'
import type { Auth0Error } from 'auth0-js'
export declare function validate_auth0_password_confirmation(
	data:auth0_password_confirmation_data_I
):false|change_password_error_I|undefined
export interface change_password_error_I extends Auth0Error {
	password_confirmation?:string
}
