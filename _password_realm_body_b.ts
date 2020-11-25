import { _b } from '@ctx-core/object'
import { _auth0_body_b } from './_auth0_body_b'
export const _password_realm_body_b = _b(
	'_password_realm_body', (ctx)=>{
		const _auth0_body = _auth0_body_b(ctx)
		return function _password_realm_body(...form) {
			const password_realm_body =
				_auth0_body(
					{
						grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
						realm: 'Username-Password-Authentication',
						connection: 'Username-Password-Authentication'
					},
					...form)
			return password_realm_body
		}
	})
