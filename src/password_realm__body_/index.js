import { assign } from '@ctx-core/object'
import { auth0__body_ } from '../auth0__body_/index.js'
/** @type {import('../types').auth0__client_id__body_T}auth0__client_id__body_T */
/** @type {import('../types').password_realm__body_T}password_realm__body_T */
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @param data{auth0__client_id__body_T|password_realm__body_T}
 * @returns {auth0__client_id__body_T}
 */
export function password_realm__body_(
	ctx, data
) {
	return auth0__body_(ctx, assign({
		grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
		realm: 'Username-Password-Authentication',
		connection: 'Username-Password-Authentication',
	}, data))
}
export {
	password_realm__body_ as password_realm_body_,
}
