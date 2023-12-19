/// <reference types="ctx-core" />
/// <reference types="../_types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { auth0__body_ } from '../auth0__body_/index.js'
/**
 * @param {Ctx}ctx
 * @param {auth0__client_id__body_T|password_realm__body_T}data
 * @returns {auth0__client_id__body_T}
 */
export function password_realm__body_(
	ctx,
	data
) {
	return auth0__body_(ctx, {
		grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
		realm: 'Username-Password-Authentication',
		connection: 'Username-Password-Authentication',
		...data
	})
}
export {
	password_realm__body_ as password_realm_body_,
}
