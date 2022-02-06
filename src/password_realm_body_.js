import { assign } from '@ctx-core/object'
import { auth0_body_ } from './auth0_body_.js'
export function password_realm_body_(ctx, data) {
	return auth0_body_(ctx, assign({
		grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
		realm: 'Username-Password-Authentication',
		connection: 'Username-Password-Authentication',
	}, data))
}
