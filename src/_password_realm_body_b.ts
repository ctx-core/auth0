import { _b, assign } from '@ctx-core/object'
import { _auth0_body_b, _auth0_body_Ctx } from './_auth0_body_b'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I'
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I'
const key = '_password_realm_body'
export interface _password_realm_body_Ctx<O extends password_realm_body_T = password_realm_body_T>
	extends _auth0_body_Ctx {
	_password_realm_body?:_password_realm_body_T<O>
}
export function _password_realm_body_b<O extends password_realm_body_T = password_realm_body_T>(
	ctx:_password_realm_body_Ctx<O>
) {
	return _b<_password_realm_body_Ctx<O>, typeof key>(key, ()=>{
		const _auth0_body = _auth0_body_b(ctx)
		return _password_realm_body as _password_realm_body_T<O>
		function _password_realm_body(data:Partial<O>) {
			const password_realm_body =
				_auth0_body(
					assign({
						grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
						realm: 'Username-Password-Authentication',
						connection: 'Username-Password-Authentication',
						data
					})) as O
			return password_realm_body as O
		}
	})(ctx)
}
export interface password_realm_body_T extends auth0_grant_type_body_I, auth0_client_id_body_I {
	realm:string
	connection:string
}
export type _password_realm_body_T<O extends password_realm_body_T = password_realm_body_T> =
	(data:Partial<O>)=>O
