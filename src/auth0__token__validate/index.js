import { auth0__jwt__expiration__validate } from '../auth0__jwt__expiration__validate/index.js'
/** @type {typeof import('./index.d.ts').auth0__token__validate} */
/**
 * @param auth0__token{import('../_types').auth0__token_T}
 */
export function auth0__token__validate(auth0__token) {
  auth0__jwt__expiration__validate(auth0__token?.id_token)
}
export {
	auth0__token__validate as validate_auth0_token,
}
