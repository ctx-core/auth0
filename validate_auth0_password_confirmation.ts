import type { auth0_password_confirmation_data_type } from './auth0_password_confirmation_data_type'
export function validate_auth0_password_confirmation(data:auth0_password_confirmation_data_type) {
	const { password, password_confirmation } = data
	const change_password_error:{ password_confirmation?:string } = {}
	let has_errors
	if (password != password_confirmation) {
		change_password_error.password_confirmation = 'Your passwords do not match.'
		has_errors = true
	}
	return has_errors && change_password_error
}
