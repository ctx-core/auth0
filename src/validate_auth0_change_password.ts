import { validate_auth0_password_confirmation } from './validate_auth0_password_confirmation'
import type { auth0_password_confirmation_data_I } from './auth0_password_confirmation_data_I'
export function validate_auth0_change_password(data:auth0_password_confirmation_data_I) {
	return validate_auth0_password_confirmation(data)
}
