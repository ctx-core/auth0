import { validate_auth0_password_confirmation } from './validate_auth0_password_confirmation/index.js'
/** @type {import('./validate_auth0_change_password.d.ts').validate_auth0_change_password} */
export const validate_auth0_change_password = data=>
	validate_auth0_password_confirmation(data)
