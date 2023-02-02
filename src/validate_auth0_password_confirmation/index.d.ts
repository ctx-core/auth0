import type { Auth0Error } from 'auth0-js'
import type { nullish } from '@ctx-core/function'
import type { auth0_password_confirmation_data_I } from '../_types'
export declare function validate_auth0_password_confirmation(
	data:auth0_password_confirmation_data_I
):change_password_error_I|nullish
export interface change_password_error_I extends Auth0Error {
	password_confirmation?:string
}
