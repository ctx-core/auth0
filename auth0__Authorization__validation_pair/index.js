/// <reference types="ctx-core" />
/// <reference types="../types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { authorization__header__jwt_token_, jwt__expiration__error_ } from '@ctx-core/jwt'
import { auth0__token__error__logout } from '../auth0__token__error__logout/index.js'
import { auth0__unauthorized__error_ } from '../auth0__unauthorized/index.js'
/**
 * @param {ctx_T}ctx
 * @param {auth0_token_T}auth0__token
 * @return {Promise<auth0__Authorization__validation_pair_T>}
 * @private
 */
export async function auth0__Authorization__validation_pair_(
	ctx,
	auth0__token
) {
	const auth0_token__Authorization = auth0_token__Authorization_(auth0__token)
	if (!auth0_token__Authorization) {
		return [
			null,
			auth0__unauthorized__error_(
				'Unauthorized',
				{ data: auth0_token__Authorization })
		]
	}
	const jwt_token = authorization__header__jwt_token_(auth0_token__Authorization)
	const jwt__expiration__error = jwt__expiration__error_(jwt_token)
	if (jwt__expiration__error) {
		console.error(jwt__expiration__error)
		auth0__token__error__logout(ctx, jwt__expiration__error)
		return [
			null,
			auth0__unauthorized__error_('Unauthorized', jwt__expiration__error)
		]
	}
	return [auth0_token__Authorization, null]
}
/**
 * @param {auth0_token_T}auth0__token
 * @return {string|null}
 * @private
 */
function auth0_token__Authorization_(auth0__token) {
	if (!auth0__token) return null
	const { id_token, token_type } = auth0__token
	return token_type && id_token ? `${token_type} ${id_token}` : null
}
