import type { Auth0Error } from 'auth0-js'
import type { auth0__password_confirmation__data_T } from '../_types'
export declare function auth0__password_confirmation__validate(
	data:auth0__password_confirmation__data_T
):auth0__password_confirmation__error_T
export {
	auth0__password_confirmation__validate as validate_auth0_password_confirmation,
}
export interface auth0__password_confirmation__error_T extends Auth0Error {
	password_confirmation?:string
}
export declare type change_password_error_I = auth0__password_confirmation__error_T
