import { fetch } from '@ctx-core/fetch'
import { throw__unauthorized } from '@ctx-core/error'
import { validate__current__jwt, } from '@ctx-core/jwt'
export function _authorization__header__access_token(token__auth0) {
	const authorization__header__access_token =
		_authorization__token__auth0__access_token()
		|| false
	return authorization__header__access_token
	function _authorization__token__auth0__access_token() {
		const token_type = token__auth0 && token__auth0.token_type
		const access_token = token__auth0 && token__auth0.access_token
		const authorization__token__auth0 =
			(token_type && access_token)
			? `${token_type} ${access_token}`
			: null
		return authorization__token__auth0
	}
}
export function _authorization__header__access_token__verify(token__auth0) {
	const authorization__header__access_token__auth0 =
		_authorization__header__access_token(token__auth0)
	if (!authorization__header__access_token__auth0) {
		throw__unauthorized({ token__auth0 }, {
			error_message: '_authorization__header__access_token__verify'
		})
	}
	return authorization__header__access_token__auth0
}
export interface Opts__get__userinfo__auth0 {
	token__auth0:string
	AUTH0_DOMAIN:string
}
export function get__userinfo__auth0(opts:Opts__get__userinfo__auth0) {
	const {
		token__auth0,
		AUTH0_DOMAIN,
	} = opts
	const authorization = _authorization__header__access_token__verify(token__auth0)
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
export async function validate__current__token__auth0(token__auth0) {
	const id_token = token__auth0 && token__auth0.id_token
	validate__current__jwt(id_token)
}
