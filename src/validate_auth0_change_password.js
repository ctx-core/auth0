import { validate_auth0_password_confirmation } from './validate_auth0_password_confirmation.js'
/** @type {import('./validate_auth0_change_password.d.ts').validate_auth0_change_password} */
export const validate_auth0_change_password = (data)=>{
	return validate_auth0_password_confirmation(data)
}
//# sourceMappingURL=validate_auth0_change_password.js.map
