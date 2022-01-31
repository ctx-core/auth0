import { validate_auth0_email } from './validate_auth0_email.js'
/** @type {import('./validate_auth0_forgot_password.d.ts').validate_auth0_forgot_password} */
export const validate_auth0_forgot_password = data=>{
	return validate_auth0_email(data)
}
