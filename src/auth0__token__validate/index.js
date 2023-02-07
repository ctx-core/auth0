import { auth0__jwt__expiration__validate } from '../auth0__jwt__expiration__validate/index.js'
/** @type {typeof import('./index.d.ts').auth0__token__validate} */
export const auth0__token__validate = auth0_token=>{
	auth0__jwt__expiration__validate(auth0_token?.id_token)
}
export {
	auth0__token__validate as validate_auth0_token,
}
