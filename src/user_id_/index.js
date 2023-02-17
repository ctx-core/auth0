/**
 * @param jwt_token_decoded{import('../_types').auth0__verified__jwt_token_T}
 * @returns {string|undefined}
 */
export function user_id_(jwt_token_decoded) {
	return jwt_token_decoded && (jwt_token_decoded.user_id || jwt_token_decoded.sub)
}
export { user_id_ as _user_id }
