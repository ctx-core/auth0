import { validate_auth0_password_confirmation } from './validate_auth0_password_confirmation'
export function validate_auth0_change_password(form) {
	return validate_auth0_password_confirmation(form)
}
