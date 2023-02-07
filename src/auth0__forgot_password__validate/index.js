import { auth0__email__validate } from '../auth0__email__validate/index.js'
/** @type {typeof import('./index.d.ts').auth0__forgot_password__validate} */
export const auth0__forgot_password__validate = data=>{
	return auth0__email__validate(data)
}
export {
	auth0__forgot_password__validate as validate_auth0_forgot_password,
}
