import { _b } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
export const post_auth0_oauth_token_b = _b(
	'post_auth0_oauth_token', (ctx)=>{
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		return function post_auth0_oauth_token(body) {
			return (
				fetch(`https://${get(AUTH0_DOMAIN)}/oauth/token`, {
					method: 'POST',
					headers:
						{ 'Content-Type': 'application/json' },
					body: JSON.stringify(body)
				})
			)
		}
	})
