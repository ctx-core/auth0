import { assign } from '@ctx-core/object'
import { _valid__email } from '@ctx-core/email'
import { error_ctx_type, throw_bad_gateway } from '@ctx-core/error'
export function validate__user(user) {
	if (user && user.error) {
		console.error(`validate__user`)
		console.error(`${user.statusCode} ${user.error}`)
		console.error(user.message)
	}
	if (!user || !user.user_id) {
		throw_bad_gateway(user, {
			http_status: user.statusCode as number
		} as error_ctx_type)
	}
}
export function validate__signup(form) {
	const email_error = validate__email(form)
	const password_confirmation_error = validate__password_confirmation(form)
	const signup_error = {}
	let has__errors
	if (email_error || password_confirmation_error) {
		has__errors = true
		assign(signup_error, email_error, password_confirmation_error)
	}
	return has__errors && signup_error
}
export function validate__forgot_password(form) {
	return validate__email(form)
}
export function validate__change_password(form) {
	return validate__password_confirmation(form)
}
export function validate__email(form) {
	const { email } = form
	const error__email:{ email?:string } = {}
	let has__errors
	// if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)) {
	//	 error__signup.password = 'Your password must be at least 8 characters and contain at least one upper case letter, one lower case letter, and one number.'
	//	 has__errors = true
	// }
	if (!_valid__email(email)) {
		error__email.email = 'Please enter a valid email address.'
		has__errors = true
	}
	return has__errors && error__email
}
export function validate__password_confirmation(form) {
	const {
		password,
		password_confirmation
	} = form
	const error__change_password:{ password_confirmation?:string } = {}
	let has__errors
	if (password != password_confirmation) {
		error__change_password.password_confirmation = 'Your passwords do not match.'
		has__errors = true
	}
	return has__errors && error__change_password
}
