import type { Auth0Error } from 'auth0-js'
import type { auth0__signup_data_T } from '../_types/index.js'
export declare function auth0__signup__validate(
	data:auth0__signup_data_T
):Auth0Error&{ password_confirmation?:string }
export {
	auth0__signup__validate as validate_auth0_signup,
}
