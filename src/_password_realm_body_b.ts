import { _b, assign } from '@ctx-core/object'
import { _auth0_body_b } from './_auth0_body_b'
import type { auth0_client_id_body_I } from './auth0_client_id_body_I'
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I'
import type { auth0_client_id_optional_body_I } from './auth0_client_id_body_I'
export function _password_realm_body_b</*@formatter:off*/
	Ctx extends object,
	In extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I,
	Out extends password_realm_body_T = password_realm_body_T
/*@formatter:on*/>(
	ctx:Ctx,
	_key:(base:string)=>keyof Ctx
) {
	const _password_realm_body_key = _key('_password_realm_body')
	return _b<Ctx, typeof _password_realm_body_key, _password_realm_body_T<Out>>(_password_realm_body_key, ()=>{
		const _auth0_body = _auth0_body_b<Ctx, In, Out>(ctx, _key)
		return _password_realm_body as _password_realm_body_T<Out>
		function _password_realm_body(data:Partial<Out>) {
			const password_realm_body =
				_auth0_body(
					assign({
						grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
						realm: 'Username-Password-Authentication',
						connection: 'Username-Password-Authentication',
						data
					})) as Out
			return password_realm_body as Out
		}
	})(ctx)
}
export interface password_realm_body_T extends auth0_grant_type_body_I, auth0_client_id_body_I {
	realm:string
	connection:string
}
export type _password_realm_body_T<Out extends password_realm_body_T = password_realm_body_T> =
	(data:Partial<Out>)=>Out
