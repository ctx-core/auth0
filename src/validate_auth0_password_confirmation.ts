import type { auth0_password_confirmation_data_I } from './auth0_password_confirmation_data_I'
import type { auth0_token_error_I } from './auth0_token_error$_b'
export function validate_auth0_password_confirmation(data:auth0_password_confirmation_data_I) {
	const { password, password_confirmation } = data
	const change_password_error:change_password_error_I = {}
	let has_errors
	if (password != password_confirmation) {
		change_password_error.password_confirmation = 'Your passwords do not match.'
		has_errors = true
	}
	return has_errors && change_password_error
}
export interface change_password_error_I extends auth0_token_error_I{
	password_confirmation?:string
}
