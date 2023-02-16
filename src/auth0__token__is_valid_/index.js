import { auth0__jwt__expiration__is_valid_ } from '../auth0__jwt__expiration__is_valid_/index.js'
/**
 * @param auth0_token{import('../auth0__token__').auth0__token_T}
 * @returns {boolean}
 */
export function auth0__token__is_valid_(auth0_token) {
	return auth0__jwt__expiration__is_valid_(auth0_token?.access_token)
}
