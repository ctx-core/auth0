import { auth0__jwt__expiration__is_valid_ } from '../auth0__jwt__expiration__is_valid_/index.js'
/**
 * @param auth0__token{import('../_types').auth0__token_T}
 * @returns {boolean}
 */
export function auth0__token__is_valid_(auth0__token) {
	return auth0__jwt__expiration__is_valid_(auth0__token?.access_token)
}
