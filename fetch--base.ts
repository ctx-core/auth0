import { fetch } from '@ctx-core/fetch'
import { throw_unauthorized } from '@ctx-core/error'
import { validate__current__jwt, } from '@ctx-core/jwt'
import type { auth0_error_ctx_type } from './auth0_error_ctx_type'
export function _authorization__header__access_token(auth0_token) {
	const authorization__header__access_token =
		_authorization__token__auth0__access_token()
		|| false
	return authorization__header__access_token
	function _authorization__token__auth0__access_token() {
		const token_type = auth0_token && auth0_token.token_type
		const access_token = auth0_token && auth0_token.access_token
		const authorization__token__auth0 =
			(token_type && access_token)
			? `${token_type} ${access_token}`
			: null
		return authorization__token__auth0
	}
}
export function _authorization__header__access_token__verify(auth0_token) {
	const authorization__header__access_token__auth0 =
		_authorization__header__access_token(auth0_token)
	if (!authorization__header__access_token__auth0) {
		throw_unauthorized({
			auth0_token,
			error_message: '_authorization__header__access_token__verify'
		} as auth0_error_ctx_type)
	}
	return authorization__header__access_token__auth0
}
export interface Opts__get__userinfo__auth0 {
	auth0_token:string
	AUTH0_DOMAIN:string
}
export function get__userinfo__auth0(opts:Opts__get__userinfo__auth0) {
	const {
		auth0_token,
		AUTH0_DOMAIN,
	} = opts
	const authorization = _authorization__header__access_token__verify(auth0_token)
	return (
		fetch(
			`https://${AUTH0_DOMAIN}/userinfo`,
			{
				headers:
					{
						'Content-Type': 'application/json',
						authorization,
					}
			})
	)
}
export async function validate__current__token__auth0(auth0_token) {
	const id_token = auth0_token && auth0_token.id_token
	validate__current__jwt(id_token)
}
