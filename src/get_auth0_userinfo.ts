import { fetch } from '@ctx-core/fetch'
import type { Token } from '@ctx-core/jwt'
import { verify_access_token_header_authorization_fn } from './verify_access_token_header_authorization_fn'
export function get_auth0_userinfo(params:get_auth0_userinfo_params_I): Promise<Response> {
	const {
		auth0_token, AUTH0_DOMAIN,
	} = params
	const authorization = verify_access_token_header_authorization_fn(auth0_token)
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
