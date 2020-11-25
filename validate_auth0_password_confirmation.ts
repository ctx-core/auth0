export function validate_auth0_password_confirmation(form) {
	const { password, password_confirmation } = form
	const change_password_error:{ password_confirmation?:string } = {}
	let has_errors
	if (password != password_confirmation) {
		change_password_error.password_confirmation = 'Your passwords do not match.'
		has_errors = true
	}
	return has_errors && change_password_error
}
