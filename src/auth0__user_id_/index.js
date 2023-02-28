/**
 * @param auth0__id_token_o{import('../_types').auth0__access_token_o_T}
 * @returns {string|undefined}
 */
export function auth0__user_id_(auth0__id_token_o) {
	return auth0__id_token_o && (auth0__id_token_o.user_id || auth0__id_token_o.sub)
}
export {
	auth0__user_id_ as user_id_,
	auth0__user_id_ as _user_id,
}
