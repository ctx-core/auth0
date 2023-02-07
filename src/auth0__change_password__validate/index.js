import { auth0__password_confirmation__validate } from '../auth0__password_confirmation__validate/index.js'
/** @type {typeof import('./index.d.ts').auth0__change_password__validate} */
export const auth0__change_password__validate = data=>
	auth0__password_confirmation__validate(data)
export {
	auth0__change_password__validate as validate_auth0_change_password,
}
