import type { auth0__signup_data_T } from '../_types'
import type { validate_auth0_email_error_T } from '../auth0__email__validate'
export declare function auth0__signup__validate(
	data:auth0__signup_data_T
):validate_auth0_email_error_T&{ password_confirmation?:string }
export {
	auth0__signup__validate as validate_auth0_signup,
}
