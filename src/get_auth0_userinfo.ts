import { fetch } from '@ctx-core/fetch'
import type { Token } from '@ctx-core/jwt'
import { _verify_access_token_header_authorization } from './_verify_access_token_header_authorization'
export function get_auth0_userinfo(params:get_auth0_userinfo_params_I): Promise<Response> {
	const {
		auth0_token, AUTH0_DOMAIN,
	} = params
	const authorization = _verify_access_token_header_authorization(auth0_token)
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
export interface get_auth0_userinfo_params_I {
	auth0_token:Token
	AUTH0_DOMAIN:string
}
